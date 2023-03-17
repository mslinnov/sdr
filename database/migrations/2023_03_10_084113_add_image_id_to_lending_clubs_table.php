<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('lending_clubs', function (Blueprint $table) {
            $table->foreignIdFor(
                \App\Models\Image::class,
                'image_id'
            )->nullable()->constrained('images');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('lending_clubs', function (Blueprint $table) {
            //
        });
    }
};
