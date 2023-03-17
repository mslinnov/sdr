<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SurveyReponse extends Model
{
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'locale', 'user_id', 'survey_id'
    ];


    // ##########################################################
    // ##########################################################
    // BELONGTO
    // ##########################################################
    // ##########################################################

    /**
     * @return BelongsTo
     */
    public function survey(): BelongsTo{
        return $this->belongsTo(Survey::class);
    }
    /**
     * @return BelongsTo
     */
    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }

    // ##########################################################
    // ##########################################################
    // HAS MANY
    // ##########################################################
    // ##########################################################
    public function reponseElements(): HasMany{
        return $this->hasMany(ReponseElement::class);
    }
}
