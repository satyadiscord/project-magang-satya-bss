<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKelasTable extends Migration
{
    public function up()
    {
        Schema::create('kelas', function (Blueprint $table) {
            $table->id();
            $table->string('nama_siswa');
            $table->string('guru_pengajar');
            $table->string('matapelajaran');
            $table->string('semester');
            $table->string('pendidikan');
            $table->string('lokasi_kelas');
            $table->timestamps();
        });
    }

    /* 
        {
    "nama_siswa": "miyaaa",
    "guru_pengajar": "bapak jonson",
    "matapelajaran": "ipa",
    "semester": 1,
    "pendidikan": "smp",
    "lokasi_kelas": "aula"
}

    */

    public function down()
    {
        Schema::dropIfExists('kelas');
    }
}
