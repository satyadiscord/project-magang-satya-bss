<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function dashboard()
    {
        return response()->json(['message' => 'Student Dashboard']);
    }
}
