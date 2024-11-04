<?php

namespace App\Http\Controllers;

use App\Models\Siswasekolah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class SiswasekolahController extends Controller
{
    public function index()
    {
        return response()->json(Siswasekolah::all(), 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama_student' => 'required|string|max:255',
            'nis' => 'required|string|max:255|unique:siswasekolah',
            'email' => 'required|string|email|max:255|unique:siswasekolah',
            'tanggal_lahir' => 'required|date',
            'alamat' => 'required|string',
            'jurusan' => 'required|string',
            'jenis_kelamin' => 'required|string',
            'nomber_telpon' => 'required|string',
            'tingkat_pendidikan' => 'required|string',
            'matapelajaran' => 'required|string',
            'orangtua' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $siswasekolah = Siswasekolah::create($request->all());
        return response()->json($siswasekolah, 201);
    }

    public function show(Siswasekolah $siswasekolah)
    {
        return response()->json($siswasekolah, 200);
    }

    public function update(Request $request, Siswasekolah $siswasekolah)
    {
        $validator = Validator::make($request->all(), [
            'nama_student' => 'required|string|max:255',
            'nis' => 'required|string|max:255|unique:siswasekolah,nis,'.$siswasekolah->id,
            'email' => 'required|string|email|max:255|unique:siswasekolah,email,'.$siswasekolah->id,
            'tanggal_lahir' => 'required|date',
            'alamat' => 'required|string',
            'jurusan' => 'required|string',
            'jenis_kelamin' => 'required|string',
            'nomber_telpon' => 'required|string',
            'tingkat_pendidikan' => 'required|string',
            'matapelajaran' => 'required|string',
            'orangtua' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $siswasekolah->update($request->all());
        return response()->json($siswasekolah, 200);
    }

    public function destroy(Siswasekolah $siswasekolah)
    {
        $siswasekolah->delete();
        return response()->json(null, 204);
    }
}
