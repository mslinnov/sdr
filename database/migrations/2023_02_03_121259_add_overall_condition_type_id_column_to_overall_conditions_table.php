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
        Schema::table('overall_conditions', function (Blueprint $table) {
            $table->foreignIdFor(
                \App\Models\OverallConditionType::class,
                'overall_condition_type_id'
            )->constrained('overall_condition_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('overall_conditions', function (Blueprint $table) {
            //
        });
    }
};
