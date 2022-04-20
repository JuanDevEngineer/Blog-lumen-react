<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    protected $tipo_id = 1; // user

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(Request $request)
    {
        $name = $request->name;
        $email = $request->email;
        $phone = $request->phone;
        $password = $request->password;


        // Check if field is empty
        if (empty($name) or empty($email) or empty($password) or empty($phone)) {
            return response()->json(['status' => 'error', 'message' => 'You must fill all the fields'], Response::HTTP_OK);
        }

        // Check if email is valid
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return response()->json(['status' => 'error', 'message' => 'You must enter a valid email'], Response::HTTP_OK);
        }

        // Check if password is greater than 5 character
        if (strlen($password) < 6) {
            return response()->json(['status' => 'error', 'message' => 'Password should be min 6 character'], Response::HTTP_OK);
        }

        // Check if user already exist
        if (User::where('email', '=', $email)->exists()) {
            return response()->json(['status' => 'error', 'message' => 'User already exists with this email'], Response::HTTP_OK);
        }

        // Create new user
        try {

            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->phone = $request->phone;
            $user->tipo_id = $this->tipo_id;
            // $user->password = Crypt::encrypt($request->password);
            // $user->password = app('hash')->make($request->password);

            if ($user->save()) {
                return response()->json(['status' => 'success', 'message' => 'user create'], Response::HTTP_CREATED);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $flag = true;
        $credentials = $request->only(['email', 'password']);

        // Check if field is empty
        if (empty($credentials['email']) || empty($credentials['password'])) {
            $flag = false;
            return response()->json(['status' => 'error', 'message' => 'You must fill all the fields']);
        }

        // Check if email is valid
        if (!filter_var($credentials['email'], FILTER_VALIDATE_EMAIL)) {
            $flag = false;
            return response()->json(['status' => 'error', 'message' => 'You must enter a valid email']);
        }

        // Check if password is greater than 5 character
        if (strlen($credentials['password']) < 6) {
            $flag = false;
            return response()->json(['status' => 'error', 'message' => 'Password should be min 6 character']);
        }

        // Check if user already exist
        if (!User::where('email', '=', $credentials['email'])->exists()) {
            $flag = false;
            return response()->json(['status' => 'error', 'message' => 'error in your credentials']);
        }

        $user = User::with('tipo')
            ->where('email', '=', $credentials['email'])
            ->get()->first();
        // $user = DB::table('users')
        //         ->join('tipos_usuarios', 'users.tipo_id', '=', 'tipos_usuarios.id')
        //         ->where('email', '=',    $credentials['email'])
        //         ->get()->first();

        if ($user) {
            if (!Hash::check($request->input('password'), $user->password)) {
                $flag = false;
                return response()->json(['status' => 'error', 'message' => 'error in your credentials']);
            }
        }

        if (!$token = JWTAuth::claims(['name' => $user->name, 'email' => $user->email])->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token, $user);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $token = JWTAuth::getToken();

        try {

            $token = JWTAuth::invalidate($token);
            return response()->json([
                'code' => 5, 'success' => true, 'message' => "You have successfully logged out."
            ], 200);
        } catch (JWTException $e) {
            return response()->json([
                'code' => 6, 'success' => false, 'message' => 'Failed to logout, please try again.'
            ], 422);
        }
    }
}
