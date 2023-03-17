<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ReponseElement extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'value', 'survey_reponse_id', 'survey_element_id'
    ];

    // ##########################################################
    // ##########################################################
    // BELONGTO
    // ##########################################################
    // ##########################################################

    /**
     * @return BelongsTo
     */
    public function surveyElement(): BelongsTo{
        return $this->belongsTo(SurveyElement::class);
    }
    /**
     * @return BelongsTo
     */
    public function surveyReponse(): BelongsTo{
        return $this->belongsTo(SurveyReponse::class);
    }
}
