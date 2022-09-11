<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TableController;
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
Route::get('delete/{delete_id}',[TableController::class,'delete']);
Route::post('insert',[TableController::class,'insert']);
Route::post('update',[TableController::class,'update']);
Route::get('table/{user_id}',[TableController::class,'edittable']);
Route::get('table',[TableController::class,'fetchtable']);
