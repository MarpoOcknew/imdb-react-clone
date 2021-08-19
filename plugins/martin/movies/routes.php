<?php

Route::group(['prefix' => 'api/v1', 'middleware' => 'Martin\Movies\Middleware\ApiMiddleware'], function () {
    Route::get('movies', array('uses' => 'Martin\Movies\Classes\MoviesController@index'));
});
