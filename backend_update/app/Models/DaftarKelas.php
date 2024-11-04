<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DaftarKelas extends Model
{
    use HasFactory;

    protected $fillable = ['nama_kelas', 'guru_pengajar', 'jumlah_siswa', 'semester'];

    public function detailkelas()
    {
        return $this->hasMany(DetailKelas::class, 'daftar_kelas_id');
        // return $this->hasMany(DetailKelas::class);
    }
}
