<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OverallCondition>
 */
class OverallConditionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'overall_condition_type_id' => fake()->numberBetween(1, 4),
            'user_id' => fake()->numberBetween(1, 4),
        ];
    }
}
