<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SurveyElement extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'order', 'is_active'
    ];



    // ##########################################################
    // ##########################################################
    // HAS MANY
    // ##########################################################
    // ##########################################################
    public function reponseElements(): HasMany{
        return $this->hasMany(ReponseElement::class);
    }


    // ##########################################################
    // ##########################################################
    // BELONGTO
    // ##########################################################
    // ##########################################################


    public function surveyInput(): BelongsTo{
        return $this->belongsTo(SurveyInput::class);
    }

    public function elementType(): BelongsTo{
        return $this->belongsTo(ElementType::class);
    }

    public function survey(): BelongsTo{
        return $this->belongsTo(Survey::class);
    }
}
