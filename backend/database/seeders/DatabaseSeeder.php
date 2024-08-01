<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Menambahkan pengguna dengan role
        User::create([
            'name' => 'Teacher User',
            'email' => 'teacher@example.com',
            'password' => bcrypt('password123'), // Jangan lupa untuk meng-hash password
            'role' => 'teacher' // Kolom role yang baru ditambahkan
        ]);

        User::create([
            'name' => 'Student User',
            'email' => 'student@example.com',
            'password' => bcrypt('password123'),
            'role' => 'student' // Kolom role yang baru ditambahkan
        ]);
    }
}
