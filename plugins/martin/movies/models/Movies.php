<?php namespace Martin\Movies\Models;

use Model;

/**
 * Model
 */
class Movies extends Model
{
    use \Winter\Storm\Database\Traits\Validation;
    use \Winter\Storm\Database\Traits\SoftDelete;
    use \Winter\Storm\Database\Traits\Sluggable;

    protected $slugs = ['slug' => 'title'];

    protected $dates = ['deleted_at'];


    /**
     * @var string The database table used by the model.
     */
    public $table = 'martin_movies_movies';

    /**
     * @var array Validation rules
     */
    public $rules = [
    ];

    public $belongsToMany = [
        'categories' => ['\Martin\Movies\Models\Categories', 'table' => 'martin_movies_categories_movies']
    ];
}
