<?php

namespace App\Http\Controllers;

use App\Models\MataKuliah;
use Carbon\Exceptions\Exception;
use Illuminate\Http\Request;

class MataKuliahController extends Controller
{
    public function index()
    {
        return MataKuliah::all();
    }

    public function store(Request $request)
    {
        try {
            //code...
            $request->validate([
                'nama' => 'required|string|max:255',
                'jadwal_kelas' => 'required|string|max:255',
                'guru_pengajar' => 'required|string|max:255',
                'deskripsi' => 'nullable|string',
            ]);
        } catch (Exception $e) {
            //throw $th;
            return response()->json("papa", 201);
        }
        

        $mataKuliah = MataKuliah::create($request->all());
        return response()->json($mataKuliah, 201);
    }

    public function show(MataKuliah $mataKuliah)
    {
        return $mataKuliah;
    }

    public function update(Request $request, MataKuliah $mataKuliah)
    {
        $request->validate([
            'nama' => 'required|string|max:255',
            'jadwal_kelas' => 'required|string|max:255',
            'guru_pengajar' => 'required|string|max:255',
            'deskripsi' => 'nullable|string',
        ]);

        $mataKuliah->update($request->all());
        return response()->json($mataKuliah, 200);
    }

    public function destroy(MataKuliah $mataKuliah)
    {
        $mataKuliah->delete();
        return response()->json(null, 204);
    }
}