<?php

namespace App\Http\Controllers;

use App\Models\OverallCondition;
use App\Models\OverallConditionType;
use App\Models\User;
use App\Notifications\AnswerReminderNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{

    /**
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index(){
        return inertia(
            'Index/Index');
    }

    public function myAccount(){
        return inertia('Auth/MyAccount');
    }

}
