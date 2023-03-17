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
        Schema::table('reponse_elements', function (Blueprint $table) {
            $table->foreignIdFor(
                \App\Models\Survey::class,
                'survey_element_id'
            )->nullable()->constrained('survey_elements');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('reponse_elements', function (Blueprint $table) {
            //
        });
    }
};
