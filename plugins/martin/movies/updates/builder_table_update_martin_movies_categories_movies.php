<?php namespace Martin\Movies\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableUpdateMartinMoviesCategoriesMovies extends Migration
{
    public function up()
    {
        Schema::table('martin_movies_categories_movies', function($table)
        {
            $table->integer('categories_id')->nullable()->unsigned();
            $table->integer('movies_id')->nullable()->unsigned();
            $table->dropColumn('category_id');
            $table->dropColumn('movie_id');
        });
    }
    
    public function down()
    {
        Schema::table('martin_movies_categories_movies', function($table)
        {
            $table->dropColumn('categories_id');
            $table->dropColumn('movies_id');
            $table->integer('category_id')->nullable()->unsigned();
            $table->integer('movie_id')->nullable()->unsigned();
        });
    }
}
