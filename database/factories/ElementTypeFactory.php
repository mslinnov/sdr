<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ElementType>
 */
class ElementTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'type_name' => fake()->userName(),
            'order' => fake()->numberBetween(1, 3),
            'icon' => fake()->shuffleString(),
            'name' => fake()->userName(),
            'response_column' => fake()->shuffleString(),
        ];
    }
}
