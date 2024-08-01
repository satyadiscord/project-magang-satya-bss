<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'jumlah_siswa',
        'guru_pengajar',
        'mapel_kelas',
    ];
}
