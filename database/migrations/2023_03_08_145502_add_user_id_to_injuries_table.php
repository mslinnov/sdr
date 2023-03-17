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
        Schema::table('injuries', function (Blueprint $table) {
            $table->foreignIdFor(
                \App\Models\User::class,
                'user_id'
            )->nullable()->constrained('users');
            $table->foreignIdFor(
                \App\Models\BodyPart::class,
                'body_part_id'
            )->nullable()->constrained('body_parts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('injuries', function (Blueprint $table) {
            //
        });
    }
};
