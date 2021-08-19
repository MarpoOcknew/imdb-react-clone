<?php namespace Martin\Movies;

use System\Classes\PluginBase;

class Plugin extends PluginBase
{
    public function registerComponents()
    {
    }

    public function registerSettings()
    {
    }

    public function init()
    {
        // Register middleware
        Cms\Classes\CmsController::extend(function($controller) {
            $controller->middleware('Martin\Movies\Middleware\ApiMiddleware');
        });
    }
}
