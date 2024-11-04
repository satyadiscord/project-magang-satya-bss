<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailKelas extends Model
{
    use HasFactory;

    protected $fillable=['nama_siswa', 'mapel', 'pendidikan', 'ruang_kelas', 'daftar_kelas_id'];
    // protected $fillable=['nama_siswa', 'mapel', 'semester', 'pendidikan', 'ruang_kelas', 'daftar_kelas_id'];

    public function daftarkelas()
    {
        return $this->belongsTo(Daftarkelas::class, 'daftar_kelas_id');
        // return $this->hasMany(Daftarkelas::class, 'daftar_kelas_id');
    }
}
