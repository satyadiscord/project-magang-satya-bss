<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMataKuliahsTable extends Migration
{
    public function up()
    {
        Schema::create('mata_kuliahs', function (Blueprint $table) {
            $table->id();
            $table->string('nama_matapelajaran');
            $table->string('hari');
            $table->string('nama_guru');
            $table->string('ruang_kelas');
            $table->time('waktu_mulai');
            $table->time('waktu_selesai');
            $table->string('metode_pembelajaran');
            $table->text('deskripsi')->nullable();
            $table->timestamps();
        });
    }

    /*
    "nama_matapelajaran": "sejarah",
    "hari": "selasa",
    "nama_guru": "ibu tania",
    "ruang_kelas": "aula",
    "metode_pembelajaran": "praktek",
    "deskripsi": "semoga hari ini saya mendapatkan nilai yang memuaskan"
    */

    public function down()
    {
        Schema::dropIfExists('mata_kuliahs');
    }
}