<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\AnswerReminderNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use function Symfony\Component\String\b;

class NotificationController extends Controller{


    /**
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index(Request $request){

        $notifications = auth()->user()->unreadNotifications()->latest()->paginate();

        if ($request->wantsJson()){
            return $notifications;
        }

        return inertia(
            'Notification/Index', [
                'notifications' => $notifications
        ]);
    }

    public function sendNotification(){
        Auth::user()->notify(new AnswerReminderNotification());
    }

    public function notifyAllPlayers(){
        dd('hey');
        $allPlayers = User::all()->where('is_admin',"=",0);

        foreach ($allPlayers as $player){
            $notif = new AnswerReminderNotification;
            Notification::send($player, $notif);
//            $player->notify($notif);
            dump($notif);
        }
        dd('end');

    }

    public function markAsRead($id){
        $notification = auth()->user()->notifications()->where('id', $id)->first();

        if ($notification){
            $notification->delete();
            return redirect()->back();
        }
    }

    public function markAllAsRead(){
        auth()->user()->unreadNotifications()->delete();
        return back();
    }

}
