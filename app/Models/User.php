<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;
use NotificationChannels\WebPush\HasPushSubscriptions;


class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasPushSubscriptions;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'profil_picture', 'first_name', 'last_name', 'email', 'phone', 'lending_club_id', 'password'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected function password(): Attribute{

        return Attribute::make(
            get: fn ($value) => $value,
            set: fn ($value) => Hash::make($value),
        );
    }


     // ##########################################################
     // ##########################################################
     // HAS MANY
     // ##########################################################
     // ##########################################################

    /**
     * @return HasMany
     */
    public function overallConditions(): HasMany{
        return $this->hasMany(OverallCondition::class);
    }

    public function surveyResponses(): HasMany{
        return $this->hasMany(SurveyReponse::class);
    }
    public function injuries(): HasMany{
        return $this->hasMany(Injury::class);
    }


    // ##########################################################
    // ##########################################################
    // BELONGTO
    // ##########################################################
    // ##########################################################

    /**
     * @return BelongsTo
     */
    public function lendingClub(): BelongsTo
    {
        return $this->belongsTo(LendingClub::class);
    }

    public function userImage(): BelongsTo{
        return $this->belongsTo(UserImage::class);
    }

}
