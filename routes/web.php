<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [UserController::class, 'index']);
Route::get('/employee', [UserController::class, 'index']);
Route::get('/digital-clock', [UserController::class, 'digitalClock']);