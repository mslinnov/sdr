<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SurveyElement>
 */
class SurveyElementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'survey_id' => fake()->numberBetween(1, 3),
            'element_type_id' => fake()->numberBetween(1, 2),
            'survey_input_id' => fake()->numberBetween(1, 6),
            'order' => fake()->numberBetween(1, 20),
            'is_active' => true,
        ];
    }
}
