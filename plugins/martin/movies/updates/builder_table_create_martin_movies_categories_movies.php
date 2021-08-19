<?php namespace Martin\Movies\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableCreateMartinMoviesCategoriesMovies extends Migration
{
    public function up()
    {
        Schema::create('martin_movies_categories_movies', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('category_id')->nullable()->unsigned();
            $table->integer('movie_id')->nullable()->unsigned();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('martin_movies_categories_movies');
    }
}
