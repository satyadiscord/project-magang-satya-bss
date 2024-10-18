<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MataKuliah extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_matapelajaran',
        'hari',
        'nama_guru',
        'ruang_kelas',
        'metode_pembelajaran',
        'deskripsi',
    ];
}
