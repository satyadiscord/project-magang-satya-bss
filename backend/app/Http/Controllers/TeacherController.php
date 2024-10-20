<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    public function dashboard()
    {
        return response()->json(['message' => 'Teacher Dashboard']);
    }
    public function index()
    {
        // Mengambil semua user dengan role teacher
        $teachers = User::where('role', 'teacher')->get();
        return response()->json($teachers);
    }
}
