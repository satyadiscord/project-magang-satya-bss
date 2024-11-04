<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMuridsTable extends Migration
{
    public function up()
    {
        Schema::create('murids', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('nis')->unique();
            $table->string('email')->unique();
            $table->date('tanggal_lahir');
            $table->text('alamat');
            $table->text('umur');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('murids');
    }
}