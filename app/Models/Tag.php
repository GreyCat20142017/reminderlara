<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public $timestamps = false;

    public $fillable = ['name'];

    public function items() {
        return $this->belongsToMany(Item::class);
    }
}
