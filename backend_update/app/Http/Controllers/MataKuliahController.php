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
                'nama_matapelajaran' => 'required|string',
                'hari' => 'required|string',
                'nama_guru' => 'required|string',
                'ruang_kelas' => 'required|string',
                'metode_pembelajaran' => 'required|string',
                'waktu_mulai' => 'required|date_format:H:i',
                'waktu_selesai' => 'required|date_format:H:i',
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
            'nama_matapelajaran' => 'required|string',
            'hari' => 'required|string',
            'nama_guru' => 'required|string',
            'ruang_kelas' => 'required|string',
            'metode_pembelajaran' => 'required|string',
            'waktu_mulai' => 'required|date_format:H:i',
            'waktu_selesai' => 'required|date_format:H:i',
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