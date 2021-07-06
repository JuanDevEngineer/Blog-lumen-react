<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Validator;

class BlogController extends Controller
{

    public function index()
    {
        $blog = DB::table('blog')
            ->join('categorias', 'categorias.id', '=', 'blog.id_categoria')
            ->select('blog.*', 'categorias.nombre as categoria')
            ->get();

        if (count($blog) == 0)
        {
            return response()->json(["data" => []], 200);
        }

        return response()->json(['data' => $blog], 200);
    }

    public function createBlog(Request $request)
    {
        dd(
            $request->hasFile('foto'), 
            $request->file('foto')->getClientOriginalName(),
            explode('.', $request->file('foto')->getClientMimeType()),
            base_path()
        );
    }

    public function store(Request $request)
    {
        //
    }

    public function showById($id)
    {
        // $user = Auth::user();
        // dd($user->id, $user->rol->nombre);

        $blog = DB::table('blog')
            ->join('categorias', 'categorias.id', '=', 'blog.id_categoria')
            ->select(
                'blog.titulo', 
                'categorias.nombre as categoria',
                'blog.image_path',
                'blog.texto_corto',
                'blog.texto_largo',
            )->where('blog.id', '=', $id)
            ->get();

        if (count($blog) == 0) 
        {
            return response()->json(["data" => []], 200);
        }

        return response()->json($blog, 200);
    }

    public function viewBlog($id)
    {
        $blog = DB::table('blog')
            ->join('categorias', 'categorias.id', '=', 'blog.id_categoria')
            ->select('blog.*', 'categorias.nombre as categoria')
            ->where('blog.id', '=', $id)
            ->get();

        if (count($blog) == 0) 
        {
            return response()->json(["data" => []], 200);
        }

        return response()->json($blog, 200);
    }

    public function updateBlog(Request $request, $id)
    {
        
    }

    public function destroyBlog($id)
    {
        //
    }
}
