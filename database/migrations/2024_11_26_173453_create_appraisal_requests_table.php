<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('appraisal_requests', function (Blueprint $table) {
            $table->id();
            $table->string('customer_name');
            $table->string('customer_telephone');
            $table->string('customer_email');
            $table->string('property_address');
            $table->decimal('property_base_price', 10, 2)->nullable();
            $table->unsignedBigInteger('user_id');
            $table->text('comments')->nullable();
            $table->timestamps();
            // Foreign keys
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('appraisal_requests');
    }
};
