<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('insert',[App\Http\Controllers\TableController::class,'insert']);
Route::post('update',[App\Http\Controllers\TableController::class,'update']);
Route::get('table/{user_id}',[App\Http\Controllers\TableController::class,'edittable']);
Route::get('table',[App\Http\Controllers\TableController::class,'fetchtable']);