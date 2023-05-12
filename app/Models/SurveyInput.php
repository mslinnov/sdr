<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SurveyInput extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'element_type_id', 'image', 'title', 'legend_1', 'legend_10', 'placeholder'
    ];




    // ##########################################################
    // ##########################################################
    // HAS MANY
    // ##########################################################
    // ##########################################################
    public function surveyElements(): HasMany{
        return $this->hasMany(SurveyElement::class);
    }

    // ##########################################################
    // ##########################################################
    // BELONGTO
    // ##########################################################
    // ##########################################################

    /**
     * @return BelongsTo
     */
    public function elementType(): BelongsTo{
        return $this->belongsTo(ElementType::class);
    }



}
