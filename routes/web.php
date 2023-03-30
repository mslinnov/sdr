<?php

require_once 'channels.php';

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Broadcast;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


/*
|--------------------------------------------------------------------------
| Index Routes
|--------------------------------------------------------------------------
*/
Route::get('/',[\App\Http\Controllers\IndexController::class, 'index'])
    ->name('dashboard')->middleware('admin');
Route::resource('user.image', \App\Http\Controllers\UserImageController::class)
    ->only(['create', 'store'])->middleware('auth');
Route::resource('lendingClub.image', \App\Http\Controllers\ImageController::class)
    ->only(['create', 'store'])->middleware('auth');


/*
|--------------------------------------------------------------------------
| Notifications Routes
|--------------------------------------------------------------------------
*/
Route::get('/sendNotification', [\App\Http\Controllers\NotificationController::class, 'sendNotification'])
    ->name('sendNotification')->middleware('admin');
Route::get('/notifyAllPlayers', [\App\Http\Controllers\NotificationController::class, 'notifyAllPlayers'])
    ->name('notifyAllPlayers')->middleware('admin');
Route::get('/notifications', [\App\Http\Controllers\NotificationController::class, 'index'])
    ->name('notifications')->middleware('auth');
Route::get('/markAsRead/{id}', [\App\Http\Controllers\NotificationController::class, 'markAsRead'])
    ->name('markAsRead')->middleware('auth');
Route::get('/markAllAsRead', [\App\Http\Controllers\NotificationController::class, 'markAllAsRead'])
    ->name('markAllAsRead')->middleware('auth');

Route::get('/push/notify/{user}', [\App\Http\Controllers\NotificationController::class, 'notify']);
Route::get('/push/key', [\App\Http\Controllers\SubscriptionController::class, 'key'])
    ->middleware('auth');
Route::post('/push/subscribe', [\App\Http\Controllers\SubscriptionController::class, 'subscribe'])
    ->middleware('auth');


/*
|--------------------------------------------------------------------------
| Data export Routes
|--------------------------------------------------------------------------
*/
Route::get('/export/{startDate}/{endDate}', [\App\Http\Controllers\ExportController::class, 'export'])
    ->name('export')->middleware('admin');



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/
Route::get('/app/my-account',[\App\Http\Controllers\IndexController::class, 'myAccount'])
    ->name('my-account')->middleware('auth');
Route::get('/app',[\App\Http\Controllers\OverallConditionController::class, 'create'])
    ->name('app-index')->middleware('auth');



/*
|--------------------------------------------------------------------------
| Overall Condition Routes
|--------------------------------------------------------------------------
*/
Route::get('/overall-condition',[\App\Http\Controllers\OverallConditionController::class, 'index'])
    ->middleware('admin');
Route::post('/overall-condition/store',[\App\Http\Controllers\OverallConditionController::class, 'store'])
    ->middleware('auth');
Route::put('/overall-condition/update/{id}',[\App\Http\Controllers\OverallConditionController::class, 'update'])
    ->middleware('auth');

/*
|--------------------------------------------------------------------------
| Survey Routes
|--------------------------------------------------------------------------
*/
Route::resource('survey',\App\Http\Controllers\SurveyController::class)
    ->except(['index'])->middleware('auth');
Route::resource('survey',\App\Http\Controllers\SurveyController::class)
    ->only(['index'])->middleware('admin');

/*
|--------------------------------------------------------------------------
| Body part Routes
|--------------------------------------------------------------------------
*/
Route::get('/body',[\App\Http\Controllers\BodyPartsController::class, 'index'])
    ->middleware('auth');;
Route::get('/body/create',[\App\Http\Controllers\BodyPartsController::class, 'create'])->name('bodyParts')
    ->middleware('auth');;
Route::post('/body/store',[\App\Http\Controllers\BodyPartsController::class, 'store'])
    ->middleware('auth');


/*
|--------------------------------------------------------------------------
| Login Routes
|--------------------------------------------------------------------------
*/
Route::get('login', [AuthController::class, 'create'])->name('login');
Route::post('login', [AuthController::class, 'store'])->name('login.store');
Route::delete('logout', [AuthController::class, 'destroy'])->name('logout')
    ->middleware('auth');


/*
|--------------------------------------------------------------------------
| User Routes
|--------------------------------------------------------------------------
*/
Route::resource('user', \App\Http\Controllers\UserController::class)
    ->except(['destroy', 'index'])->middleware('auth');
Route::resource('user', \App\Http\Controllers\UserController::class)
    ->only(['index'])->middleware('admin');


/*
|--------------------------------------------------------------------------
| Lending Club Routes
|--------------------------------------------------------------------------
*/
Route::resource('lending-club', \App\Http\Controllers\LendingClubController::class)
    ->except(['destroy', 'index'])->middleware('auth');
Route::resource('lending-club', \App\Http\Controllers\LendingClubController::class)
    ->only(['index'])->middleware('admin');
