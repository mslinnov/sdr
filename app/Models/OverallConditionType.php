<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class OverallConditionType extends Model
{
    use HasFactory;

    public function overallConditions(): HasMany{
        return $this->hasMany(OverallCondition::class);
    }
}
