<?php

namespace App\Http\Controllers;

use App\Models\DaftarKelas;
use Faker\Provider\DateTime;
use Illuminate\Http\Request;

class DaftarKelasController extends Controller
{
  
    public function index()
    {
        return DaftarKelas::with('detailkelas')->get();
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'nama_kelas'=>'required',
            'guru_pengajar'=>'required',
            'jumlah_siswa'=> 'required',
            'semester'=> 'required',

        ]);

        $kelas = DaftarKelas::create($request->all());
        return response()->json($kelas, 201);
    }
    public function update (Request $request, $id)
    {
        $kelas=DaftarKelas::findOrfail($id);
        $kelas->update($request->all());
        return response()->json($kelas);
    }
    public function destroy($id)
    {
        DaftarKelas::destroy($id);
        return response()->json(['message' => 'Kelas berhasil dihapus']);
    }
}
