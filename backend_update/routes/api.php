<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// controller role teacher and student
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\StudentController;

// controller CRUD API
use App\Http\Controllers\MataKuliahController;
use App\Http\Controllers\KelasController;
// use App\Http\Controllers\MuridController;
use App\Http\Controllers\SiswasekolahController;

// controller untuk daftarkelas dan detail kelas
use App\Http\Controllers\DaftarKelasController;
use App\Http\Controllers\DetailKelasController;

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
//route daftarkelas
Route::get('daftar-kelas', [DaftarKelasController::class, 'index']);
Route::post('daftar-kelas', [DaftarKelasController::class, 'store']);
Route::put('daftar-kelas/{id}', [DaftarKelasController::class, 'update']);
Route::delete('daftar-kelas/{id}', [DaftarKelasController::class, 'destroy']);
//route detailkelas
Route::get('detail-kelas', [DetailKelasController::class, 'index']);
Route::post('detail-kelas', [DetailKelasController::class, 'store']);
Route::put('detail-kelas/{id}', [DetailKelasController::class, 'update']);
Route::delete('detail-kelas/{id}', [DetailKelasController::class, 'destroy']);


Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::apiResource('mata-kuliahs', MataKuliahController::class);
Route::apiResource('kelas', KelasController::class);
// Route::apiResource('murids', MuridController::class);
Route::apiResource('siswasekolah', SiswasekolahController::class);
// Route::post('siswasekolah', SiswasekolahController::class);

Route::middleware(['auth:sanctum', 'role:teacher'])->group(function () {
    Route::get('/teacher/dashboard', [TeacherController::class, 'dashboard']);
    Route::get('/teachers', [TeacherController::class, 'index']);
});

Route::middleware(['auth:sanctum', 'role:student'])->group(function () {
    Route::get('/student/dashboard', [StudentController::class, 'dashboard']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
