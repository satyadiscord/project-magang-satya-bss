<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswasekolah extends Model
{
    use HasFactory;

    protected $table = 'siswasekolah';

    protected $fillable = [
        'nama_student',
        'nis',
        'email',
        'tanggal_lahir',
        'alamat',
        'jurusan',
        'jenis_kelamin',
        'nomber_telpon',
        'tingkat_pendidikan',
        'matapelajaran',
        'orangtua',
    ];
}
