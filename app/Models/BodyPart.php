<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BodyPart extends Model
{
    use HasFactory;


    // ##########################################################
    // ##########################################################
    // HAS MANY
    // ##########################################################
    // ##########################################################

    public function injuries(): HasMany{
        return $this->hasMany(Injury::class);
    }
}
