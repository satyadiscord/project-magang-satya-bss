<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TeacherController extends Controller
{
    public function dashboard()
    {
        return response()->json(['message' => 'Teacher Dashboard']);
    }
}
