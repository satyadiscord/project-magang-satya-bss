<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSiswasekolahTable extends Migration
{
    public function up()
    {
        Schema::create('siswasekolah', function (Blueprint $table) {
            $table->id();
            $table->string('nama_student');
            $table->integer('nis');
            $table->string('email');
            $table->date('tanggal_lahir');
            $table->string('alamat');
            $table->string('jurusan');
            $table->string('jenis_kelamin');
            $table->string('nomber_telpon');
            $table->string('tingkat_pendidikan');
            $table->string('matapelajaran');
            $table->string('orangtua');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('siswasekolah');
    }
}
