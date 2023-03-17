<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OverallCondition extends Model
{
    use HasFactory;

    protected $fillable = [
        'overall_condition_type_id', 'user_id'
    ];

    public function overallConditionType(): BelongsTo{
        return $this->belongsTo(OverallConditionType::class);
    }

    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }

}
