<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Survey extends Model
{
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name', 'order', 'is_active'
    ];


    // ##########################################################
    // ##########################################################
    // HAS MANY
    // ##########################################################
    // ##########################################################
    public function surveyElements(): HasMany
    {
        return $this->hasMany(SurveyElement::class);
    }
    public function surveyReponses(): HasMany{
        return $this->hasMany(SurveyReponse::class);
    }

}
