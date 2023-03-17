<?php

namespace App\Http\Middleware;

use App\Models\OverallCondition;
use App\Models\OverallConditionType;
use Closure;
use Illuminate\Http\Request;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next)
    {
        if (auth()->check() && auth()->user()->is_admin) {
            return $next($request);
        }
        elseif (auth()->check()){
            return inertia(
                'App/Create',[
                'total_reviews' => OverallCondition::all(),
                'overall_condition_types' => OverallConditionType::all()
            ]);
        }
        else{
            return inertia('Auth/Login');
        }

//        abort(403, 'Unauthorized');
    }
}
