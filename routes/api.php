<?php

use App\Http\Controllers\AppraisalHistoryController;
use App\Http\Controllers\AppraisalRequestController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::apiResource('appraisal-requests', AppraisalRequestController::class)
    ->except(['update', 'destroy']);

Route::apiResource('appraisal-history', AppraisalHistoryController::class)
    ->except(['update', 'destroy']);
