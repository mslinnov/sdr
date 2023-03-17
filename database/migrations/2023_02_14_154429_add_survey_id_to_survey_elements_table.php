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
        Schema::table('survey_elements', function (Blueprint $table) {
            $table->foreignIdFor(
                \App\Models\Survey::class,
                'survey_id'
            )->nullable()->constrained('surveys');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('survey_elements', function (Blueprint $table) {
            //
        });
    }
};
