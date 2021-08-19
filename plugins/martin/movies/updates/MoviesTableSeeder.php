<?php namespace Martin\Movies\Updates;

use Schema;
use Seeder;
use Faker;
use Martin\Movies\Models\Movies;
use Martin\Movies\Models\Categories;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;


class MoviesTableSeeder extends Seeder
{
    public function run(){
        $faker = Faker\Factory::create();
        Storage::makeDirectory('media/movies');

        for ($i=0; $i < 50; $i++) {
            $name = $faker->sentence($nbWords = 3, $variableNbWords = true);

            $image = file_get_contents($faker->imageURL($width = 480, $height = 640, 'abstract', true, true, $name));
            File::put(storage_path('app/media/movies/'.str_slug($name).'.png'), $image);

            $movie = Movies::create([
                'title' => $name,
                'description' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
                'image' => 'movies/'.str_slug($name).'.png'
            ]);

            $movie->categories()->attach(Categories::inRandomOrder()->take(random_int(1, 3))->pluck('id'));
        }
    }
}
