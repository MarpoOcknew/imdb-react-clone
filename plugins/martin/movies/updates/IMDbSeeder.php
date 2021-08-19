<?php namespace Martin\Movies\Updates;

use Seeder;

class IMDbSeeder extends Seeder
{
    public function run()
    {
        $this->call('Martin\Movies\Updates\CategoriesTableSeeder');
        $this->call('Martin\Movies\Updates\MoviesTableSeeder');
    }
}
