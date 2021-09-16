<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->group(['prefix' => 'v1'], function() use ($router) {
    
    $router->post('/api/auth/register', 'AuthController@register'); // ->withoutMiddleware('auth:api');
    $router->post('/api/auth/login', 'AuthController@login');

    $router->group(['middleware' => 'auth:api'], function() use ($router) {

        $router->post('/api/auth/logout', 'AuthController@logout');

        $router->get('/api/categorias', 'CaterogoriasController@index');
        $router->get('/api/categorias/show/{id}', 'CaterogoriasController@show');
        $router->post('/api/categorias/create', 'CaterogoriasController@create');

        $router->get('/api/blog', 'BlogController@index');
        $router->post('/api/blog/create', 'BlogController@createBlog');
        $router->get('/api/blog/show/{id}', 'BlogController@showById');
        $router->get('/api/blog/view/{id}', 'BlogController@viewBlog');
        
        $router->get('/api/users', 'UsersController@index');
        $router->post('/api/users/create', 'UsersController@createUser');
        $router->get('/api/users/show/{id}', 'UsersController@showByIdUser');
    });
    
});