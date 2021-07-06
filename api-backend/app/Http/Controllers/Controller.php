<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    /**
     * Get the token array structure.
     *
     * @param string $token
     * @param string User $user
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $user)
    {
        return response()->json([
            'token' => $token,
            'token_type' => 'Bearer ',
            'expires_in' => Auth::factory()->getTTL() * 60,
            'user' => $user
        ]);
    }

    protected function validateImage($file) 
    {
        $flag = false; 
        $type = array('image/gif', 'image/jpeg', 'image/jpg', 'image/png');

        if (in_array($file, $type)) {
            $flag = true;
        }
        return $flag;
    }
}
