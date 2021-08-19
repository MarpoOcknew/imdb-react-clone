<?php namespace Martin\Movies\Updates;

use Seeder;
use Martin\Movies\Models\Categories;


class CategoriesTableSeeder extends Seeder
{
    public function run() {
        $cats = ['Action', 'Comedy', 'Drama'];

        foreach ($cats as $cat) {
            Categories::create([
                'title' => $cat,
            ]);
        };
    }
}
