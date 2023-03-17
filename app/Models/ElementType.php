<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ElementType extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name','type_name','order', 'icon', 'response_column'
    ];


    // ##########################################################
    // ##########################################################
    // HAS MANY
    // ##########################################################
    // ##########################################################
    public function surveyInputs(): HasMany{
        return $this->hasMany(SurveyInput::class);
    }
    public function surveyElements(): HasMany{
        return $this->hasMany(SurveyElement::class);
    }
}
