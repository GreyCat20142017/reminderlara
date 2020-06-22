<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{

    public static $PROBLEM = 'VIDEO';
    public static $MEMO = 'MEMO';

    public $timestamps = false;
    protected $fillable = ['user_id', 'type', 'text', 'details'];

    public static function availableValues() {
        return [static::$MEMO, static::$PROBLEM];
    }

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->user_id = auth()->id();
        });
    }
}
