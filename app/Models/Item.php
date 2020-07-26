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
            return $this->hasMany(Link::class);
        }

        public function scopeOfType($query, $type) {
            return $query->where('type', $type);
        }

        public function scopeOfTag($query, $tag) {
            return $tag->exists ?
                $query->whereHas('tags', function ($query) use ($tag) {
                    $query->where('tags.id', $tag->id);
                }) :
                $query;
        }

        public function updateRelated($tags = null, $refs = null) {
            if ($tags) {
                $this->tags()->sync($tags);
            }
            if ($refs) {
                $arr = array_map(function ($el) {
                    return array('url' => $el);
                }, $refs);
                $this->refs()->delete();
                $this->refs()->createMany($arr);
            }
        }
    }
