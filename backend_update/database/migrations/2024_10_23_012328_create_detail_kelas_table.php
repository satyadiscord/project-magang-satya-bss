<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('detail_kelas', function (Blueprint $table) {
            $table->id();
            $table->string('nama_siswa');
            $table->string('mapel');
            // $table->integer('semester');
            $table->string('pendidikan');
            $table->string('ruang_kelas');
            $table->string('daftar_kelas_id');
            // $table->foreignId('daftar_kelas_id')->constrained('daftar_kelas')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_kelas');
    }
};
