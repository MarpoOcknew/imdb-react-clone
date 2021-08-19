<?php namespace Martin\Movies\Middleware;

use Closure;
use Illuminate\Foundation\Application;
use Illuminate\Http\Response;
use October\Rain\Exception\AjaxException;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

class ApiMiddleware
{
    /**
     * The Laravel Application
     *
     * @var Application
     */
    protected $app;

    /**
     * Create a new middleware instance.
     *
     * @param  Application $app
     * @return void
     */
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Check Auth token
        $token = $request->bearerToken();
        if ($token !== 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFydGluIFBvbGxvY2siLCJyZWFzb24iOiJUbyBsb29rIGJldHRlciB0aGFuIGEgcmFuZG9tIHN0cmluZyJ9.7egTr-n_f2JnYU87_Jv_miyfVfAyjQT41BzC0Fq22Vo') {
            return response("Invalid token: ".$token, 403);
        }
        
        // Check for errors thrown in the other controllers
        $response = $next($request);
        $errors = $request->get('errors');

        // No errors - return the response
        if (empty($errors))
            return $response;

        // Return the error
        $message = $errors->getBag('default')->first();
        return response()->json(['code' => '400', 'message' => $message]);
    }
}
