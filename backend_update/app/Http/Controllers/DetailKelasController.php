<?php

namespace App\Http\Controllers;

use App\Models\DetailKelas;
use App\Models\DaftarKelas;
use Illuminate\Http\Request;

class DetailKelasController extends Controller
{
    public function index()
    {
        return DetailKelas::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_siswa' => 'required',
            'mapel' => 'required',
            // 'semester' => 'required',
            'pendidikan' => 'required',
            'ruang_kelas' => 'required',
            'daftar_kelas_id' => 'required|exists:daftar_kelas,nama_kelas',
        ]);

        // Cek jumlah siswa yang sudah terdaftar di kelas
        $kelas = DaftarKelas::where('nama_kelas', $request->daftar_kelas_id)->first();

        if (!$kelas) {
            return response()->json(['error' => 'Kelas dengan nama tersebut tidak ditemukan'], 404);
        }
    

        if ($kelas->jumlah_siswa >= 20) {
            return response()->json(['message' => 'Kelas sudah penuh, tidak bisa menambah siswa lagi.'], 400);
        }

        $detailKelas = DetailKelas::create([
            'nama_siswa' => $request->nama_siswa,
            'mapel' => $request->mapel,
            // 'semester' => $request->semester,
            'pendidikan' => $request->pendidikan,
            'ruang_kelas' => $request->ruang_kelas,
            'daftar_kelas_id' => $kelas->id, // Menggunakan ID dari kelas yang ditemukan
        ]);
    
        // Perbarui jumlah siswa di DaftarKelas
        $kelas->jumlah_siswa = $kelas->detailKelas()->count();
        $kelas->save();
        // $kelas->increment('jumlah_siswa');
    
        return response()->json($detailKelas, 201);


        // $kelas = DaftarKelas::find($request->daftar_kelas_id);
        // $jumlahSiswa = $kelas->detailKelas()->count();

        // if ($jumlahSiswa >= 20) {
        //     return response()->json(['message' => 'Kelas sudah penuh, tidak bisa menambah siswa lagi.'], 400);
        // }

        // $detailKelas = DetailKelas::create($request->all());

        // // Update jumlah siswa di DaftarKelas
        // $kelas = DaftarKelas::find($request->daftar_kelas_id);
        // $kelas->jumlah_siswa = $kelas->detailKelas()->count();
        // $kelas->save();

        // return response()->json($detailKelas, 201);
    }

    public function update(Request $request, $id)
    {
        $detailKelas = DetailKelas::findOrFail($id);
        $detailKelas->update($request->all());
        return response()->json($detailKelas);
    }

    public function destroy($id)
    {
        $detailKelas = DetailKelas::findOrFail($id);
        $kelas = DaftarKelas::find($detailKelas->daftar_kelas_id);
        // $kelas = DaftarKelas::where('nama_kelas', $detailKelas->daftar_kelas_id)->first();
        // $kelas = $detailKelas->daftarKelas;
        $detailKelas->delete();

        if ($kelas) {
            $kelas->decrement('jumlah_siswa');
            $kelas->save();
        }

        // Update jumlah siswa di DaftarKelas
        // $kelas->jumlah_siswa = $kelas->detailKelas()->count();
        // $kelas->save();

        return response()->json(['message' => 'Siswa berhasil dihapus']);
    }
}
