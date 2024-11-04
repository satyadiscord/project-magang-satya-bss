<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class KelasController extends Controller
{
    public function index()
    {
        Log::info('Fetching all classes');
        $allKelas = Kelas::all();
        Log::info('Classes fetched: ', ['data' => $allKelas]);
        return response()->json($allKelas);
    }

    public function store(Request $request)
    {
        try {
            $request->validate([
                'nama_siswa' => 'required|string|max:255',
                'guru_pengajar' => 'required|string',
                'matapelajaran' => 'required|string',
                'semester' => 'required|string',
                'pendidikan' => 'required|string',
                'lokasi_kelas' => 'required|string',
            ]);

            $kelas = Kelas::create($request->all());
            Log::info('Class created: ', ['data' => $kelas]);
            return response()->json($kelas, 201);
        } catch (\Exception $e) {
            Log::error('Error creating class: ', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Error creating class', 'error' => $e->getMessage()], 400);
        }
    }

    public function show($id)
{
    try {
        $kelas = Kelas::find($id);

        if (!$kelas) {
            Log::warning('Class not found', ['id' => $id]);
            return response()->json(['message' => 'Class not found'], 404);
        }

        Log::info('Class fetched: ', ['data' => $kelas]);
        return response()->json($kelas);
    } catch (\Exception $e) {
        Log::error('Error fetching class: ', ['error' => $e->getMessage()]);
        return response()->json(['message' => 'Error fetching class', 'error' => $e->getMessage()], 400);
    }
}

    public function update(Request $request, $id)
    {
        try {
            $request->validate([
                'nama_siswa' => 'required|string|max:255',
                'guru_pengajar' => 'required|string',
                'matapelajaran' => 'required|string',
                'semester' => 'required|string',
                'pendidikan' => 'required|string',
                'lokasi_kelas' => 'required|string',
            ]);

            $kelas = Kelas::find($id);

            if (!$kelas) {
                Log::warning('Class not found for update', ['id' => $id->id]);
                return response()->json(['message' => 'Class not found'], 404);
            }

            $kelas->update($request->all());

            Log::info('Class updated: ', ['data' => $kelas]);
            return response()->json($kelas, 200);
        } catch (\Exception $e) {
            Log::error('Error updating class: ', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Error updating class', 'error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
{
    try {
        $kelas = Kelas::find($id);

        if (!$kelas) {
            Log::warning('Class not found for deletion', ['id' => $id]);
            return response()->json(['message' => 'Class not found'], 404);
        }

        $kelas->delete();
        Log::info('Class deleted: ', ['id' => $id]);
        return response()->json(null, 204);
    } catch (\Exception $e) {
        Log::error('Error deleting class: ', ['error' => $e->getMessage()]);
        return response()->json(['message' => 'Error deleting class', 'error' => $e->getMessage()], 400);
    }
}
}