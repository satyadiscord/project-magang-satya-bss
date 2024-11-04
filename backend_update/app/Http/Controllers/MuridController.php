<?php

namespace App\Http\Controllers;

use App\Models\Murid;
use Illuminate\Http\Request;

class MuridController extends Controller
{
    public function index()
    {
        return Murid::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'nis' => 'required|string|max:255|unique:murids',
            'email' => 'required|string|email|max:255|unique:murids',
            'tanggal_lahir' => 'required|date',
            'alamat' => 'required|string',
            'umur' => 'required|string|max:5'
        ]);

        $murid = Murid::create($request->all());
        return response()->json($murid, 201);
    }

    public function show(Murid $murid)
    {
        return $murid;
    }

    public function update(Request $request, Murid $murid)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'nis' => 'required|string|max:255|unique:murids,nis,'.$murid->id,
            'email' => 'required|string|email|max:255|unique:murids,email,'.$murid->id,
            'tanggal_lahir' => 'required|date',
            'alamat' => 'required|string',
        ]);

        $murid->update($request->all());
        return response()->json($murid, 200);
    }

    public function destroy(Murid $murid)
    {
        $murid->delete();
        return response()->json(null, 204);
    }
}