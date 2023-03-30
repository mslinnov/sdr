<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\Guard;

class SubscriptionController extends Controller
{

    /**
     * @param Guard $guard
     * @param Request $request
     * @return \NotificationChannels\WebPush\PushSubscription
     */
    public function subscribe(Guard $guard, Request $request){

        $user = Auth::user();

        return $user->updatePushSubscription(
            $request->get('endpoint'),
            ($request->get('keys') ?: [])['p256dh'] ?? null,
            ($request->get('keys') ?: [])['auth'] ?? null,
        );
    }


    /**
     * @return array
     */
    public function key(){
        return[
            'key' => env('VAPID_PUBLIC_KEY')
        ];
    }
}
