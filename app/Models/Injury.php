<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Injury extends Model
{
    use HasFactory;

    protected $fillable = [
        'body_part_id', 'user_id', 'need_treatment', 'value'
    ];

    public function bodyPart(): BelongsTo{
        return $this->belongsTo(BodyPart::class);
    }

    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }

}
