<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class LendingClub extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];


    // ##########################################################
    // ##########################################################
    // HAS MANY
    // ##########################################################
    // ##########################################################

    public function users(): HasMany{
        return $this->hasMany(User::class);
    }

    // ##########################################################
    // ##########################################################
    // BELONGTO
    // ##########################################################
    // ##########################################################
    /**
     * @return BelongsTo
     */
    public function image(): BelongsTo{
        return $this->belongsTo(Image::class);
    }

}
