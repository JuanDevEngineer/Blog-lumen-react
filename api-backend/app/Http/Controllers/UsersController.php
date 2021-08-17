<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function index() 
    {
        $user = DB::table('users')
            ->select(
                'users.id', 'users.name', 'users.email', 
                'users.phone', 'users.tipo_id', 
                'tp.nombre as rol', 'users.created_at'
            )
            ->join('tipos_usuarios as tp', 'tp.id', '=', 'users.tipo_id')
            ->where('users.id', '!=', Auth::user()->id)
            ->get();

        if (count($user) == 0) 
        {
            return response()->json(["data" => []], 200);
        }

        return response()->json(['data' => $user], 200);
    }

    public function createUser(Request $request) 
    {
        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $phone = $request->phone;
        $tipo_id = $request->tipo_id;

        // Check if field is empty
        if (empty($name) or empty($email) or empty($password) or empty($phone) or empty($tipo_id)) 
        {
            return response()->json(['status' => 'error', 'message' => 'You must fill all the fields']);
        }

        // Check if email is valid
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
        {
            return response()->json(['status' => 'error', 'message' => 'You must enter a valid email']);
        }

        // Check if password is greater than 5 character
        if (strlen($password) < 6) 
        {
            return response()->json(['status' => 'error', 'message' => 'Password should be min 6 character']);
        }

        // Check if user already exist
        if (User::where('email', '=', $email)->exists()) 
        {
            return response()->json(['status' => 'error', 'message' => 'User already exists with this email']);
        }

        // Create new user
        try {
            
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->phone = $request->phone;
            $user->tipo_id = $request->tipo_id;

            if ($user->save()) 
            {
                return response()->json(['status' => 'success', 'message' => 'user create'], 201);
            }
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    public function showByIdUser($id) {
        $user = User::find($id);
        if (empty($user)) {
            return response()->json(['data' => []], 200);
        }
        return response()->json($user, 200);
    }
}
