<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Murid extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'nis',
        'email',
        'tanggal_lahir',
        'alamat',
        'umur',
    ];
}