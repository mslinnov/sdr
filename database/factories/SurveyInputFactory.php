<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SurveyInput>
 */
class SurveyInputFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'element_type_id' => fake()->numberBetween(1, 2),
            'image' => fake()->userName(),
            'title' => fake()->userName(),
        ];
    }
}
