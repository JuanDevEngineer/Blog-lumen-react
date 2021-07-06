<?php

namespace App\Http\Controllers;

use App\Models\Categorias;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CaterogoriasController extends Controller
{

    public function index()
    {
        return response()->json(['data' => Categorias::all()], 200);
    }

    public function create(Request $request)
    {
        $nombre = $request->input('nombre');

        if (Categorias::where('nombre', '=', $nombre)->exists()) {
            return response()->json(['status' => 'error', 'message' => 'category already exists'], 200);
        }
        
        if (!empty($nombre)) {
            $categoria = Categorias::create(['nombre' => $nombre]);
            if ($categoria) {
                return response()->json([
                    'status'=> 'success',
                    'msg' => 'category create'
                ], 200);
            }
        }
        return response()->json([
            'status'=> 'error',
            'msg' => 'el campo esta vacio'
        ], 200);
    }

    public function show($id)
    {
        $categoria = Categorias::find($id);
        if (empty($categoria)) {
            return response()->json(['data' => []], 200);
        }
        return response()->json($categoria, 200);
    }
}
