<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Image extends Model
{
    use HasFactory;


    protected $fillable = ['filename'];
    protected $appends = ['src'];


    // ##########################################################
    // ##########################################################
    // HAS MANY
    // ##########################################################
    // ##########################################################
    public function lendingClubs(): HasMany{
        return $this->hasMany(LendingClub::class);
    }

    public function getSrcAttribute(){
        return asset("{$this->filename}");
    }

}
