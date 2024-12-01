<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AppraisalStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('appraisal_statuses')->insert([
            [
                'name' => 'Solicitado',
                'code' => 'requested',
                'description' => 'La solicitud de tasación ha sido creada.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'En proceso',
                'code' => 'in_process',
                'description' => 'La tasación está siendo procesada.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Tasación completada',
                'code' => 'completed',
                'description' => 'La tasación ha sido completada.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Rechazado',
                'code' => 'rejected',
                'description' => 'La tasación ha sido rechazada.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
