<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Model;
    use App\Models\Tag;

    class Item extends Model {

        public static $NOTES = 'NOTES';
        public static $MEMO = 'MEMO';

        public $timestamps = false;
        protected $fillable = ['user_id', 'type', 'text', 'details'];

        public static function availableValues() {
            return [static::$MEMO, static::$NOTES];
        }

        public static function boot() {
            parent::boot();
            self::creating(function ($model) {
                $model->user_id = auth()->id();
            });
        }

        public function tags() {
            return $this->belongsToMany(Tag::class);
        }

        public function refs() {
            return $this->belongsToMany(Link::class);
        }

        public function scopeOfType($query, $type) {
            return $query->where('type', $type);
        }

    }
