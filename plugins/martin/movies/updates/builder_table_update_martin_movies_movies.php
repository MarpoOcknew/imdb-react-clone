<?php namespace Martin\Movies\Updates;

use Schema;
use Winter\Storm\Database\Updates\Migration;

class BuilderTableUpdateMartinMoviesMovies extends Migration
{
    public function up()
    {
        Schema::table('martin_movies_movies', function($table)
        {
            $table->string('slug')->nullable()->after('title');
        });
    }
    
    public function down()
    {
        Schema::table('martin_movies_movies', function($table)
        {
            $table->dropColumn('slug');
        });
    }
}
