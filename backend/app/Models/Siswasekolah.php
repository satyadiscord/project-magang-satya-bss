<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswasekolah extends Model
{
    use HasFactory;

    protected $table = 'siswasekolah'; // Tambahkan ini untuk menyesuaikan dengan nama tabel yang benar

    protected $fillable = [
        'nama',
        'nis',
        'email',
        'tanggal_lahir',
        'alamat',
    ];
}
