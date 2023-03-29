<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\AnswerReminderNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use Minishlink\WebPush\Subscription;
use Minishlink\WebPush\WebPush;
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


    public function notify(User $user){

        $user->notify(new AnswerReminderNotification());
        dd($user);
//        $auth = [
//            'VAPID' => [
//                'subject' => 'Stade de reims',
//                'publicKey' => env('VAPID_PUBLIC_KEY'),
//                'privateKey' => env('VAPID_PRIVATE_KEY'),
//                ],
//        ];
//
//        $webPush = new WebPush($auth);
//        foreach ($user->pushSubscriptions as $subscription){
//            $webPush->queueNotification(
//                Subscription::create([
//                    'endpoint' => $subscription->endpoint,
//                    'publicKey' => $subscription->public_key,
//                    'authToken' => $subscription->auth_token,
//                ]),
//                json_encode([
//                    'message' => 'Pense à répondre aux questionnaires avant mardi !',
//                    'title' => 'Stade de Reims'
//                ])
//            );
//        }
//        foreach ($webPush->flush() as $report){
//            $endpoint = $report->getRequest()->getUri()->__toString();
//
//            if($report->isSuccess()) {
//                dump("[v] Message sent successfully for subscription {$endpoint}.");
//            } else {
//                dump("[x] Message failed to sent for subscription {$endpoint} : {$report->getReason()}.");
//            }
//        }
//        dd('Debug');

        return redirect(route('dashboard'));

    }

    public function notifyAllPlayers(){
        $allPlayers = User::where('is_admin', 0)->get();;

        foreach ($allPlayers as $player){
            $notif = new AnswerReminderNotification;
//            Notification::send($player, $notif);
            $player->notify($notif);
        }

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
