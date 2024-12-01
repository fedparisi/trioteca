<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('appraisal_histories', function (Blueprint $table) {
            $table->id(); 
            $table->unsignedBigInteger('appraisal_request_id'); 
            $table->unsignedBigInteger('previous_status_id')->nullable(); 
            $table->unsignedBigInteger('new_status_id'); 
            $table->unsignedBigInteger('user_id'); 
            $table->timestamps();
            // Foreign keys
            $table->foreign('appraisal_request_id')->references('id')->on('appraisal_requests');
            $table->foreign('previous_status_id')->references('id')->on('appraisal_statuses');
            $table->foreign('new_status_id')->references('id')->on('appraisal_statuses');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('appraisal_histories');
    }
};
