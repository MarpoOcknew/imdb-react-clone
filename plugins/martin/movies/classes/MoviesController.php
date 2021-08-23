<?php namespace Martin\Movies\Classes;

use Input;
use Validator;
use Redirect;
use Flash;
use Auth;
use Session;
use Carbon\Carbon;
use Martin\Movies\Models\Movies;

class MoviesController extends \Cms\Classes\Controller
{
    public function index()
    {
        $movies = Movies::with('categories')
                        ->orderBy('created_at', 'desc')
                        ->paginate(8);

        return response()->json(['data' => $movies, 'success' => 'success'], 200);
    }
}
