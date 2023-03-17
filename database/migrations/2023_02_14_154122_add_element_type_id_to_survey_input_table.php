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
        Schema::table('survey_inputs', function (Blueprint $table) {
            $table->foreignIdFor(
                \App\Models\ElementType::class,
                'element_type_id'
            )->nullable()->constrained('element_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('survey_input', function (Blueprint $table) {
            //
        });
    }
};
