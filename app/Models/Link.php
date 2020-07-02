<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;

    class Link extends Model {
        public $timestamps = false;

        public $fillable = ['url'];

        public function item() {
            return $this->belongsTo(Item::class);
        }
    }
