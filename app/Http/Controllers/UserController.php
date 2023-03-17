<?php

namespace App\Http\Controllers;

use App\Models\LendingClub;
use App\Models\OverallCondition;
use App\Models\OverallConditionType;
use App\Models\User;
use Illuminate\Http\Request;


class UserController extends Controller
{

    /**
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index(){

        $total_reviews = OverallCondition::all();
        $overall_condition_types = OverallConditionType::all();
        $clubs = LendingClub::with('image')->get();
        $players = User::with('userImage')->where('is_admin', '=', 0)->paginate(12);

        return inertia(
            'User/Index',
            [
                'players'=> $players,
                'total_reviews'=> $total_reviews,
                'overall_condition_types'=> $overall_condition_types,
                'clubs' => $clubs,
            ]);
    }


    public function create(){

        $clubs = LendingClub::all();

        return inertia(
            'User/Create',
            [
                'clubs' => $clubs,
            ]
        );
    }

//TODO: Faire la vérification d'email ?

    public function store(Request $request)
    {

        // Validation des données reçus et création d'un nouvel utilisateur
        // Possible de faire un create directement car le mot de passe est hashé automatiquement dans
        // le model User.php
        User::create($request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'phone' => 'min:4',
            'lending_club_id' => 'integer',
            'password' => 'required|min:8|confirmed',
        ]));

        //Connexion automatique du nouvel utilisateur
        // Auth::login($user);


        return redirect()->route('user.index')
            ->with('success', 'Nouvel utilisateur créé !');
    }


    public function show(User $user)
    {
        $overall_condition_types = OverallConditionType::all();
        $clubs = LendingClub::all();

        return inertia(
            'User/Show',
            [
                'user'=> $user->load('userImage'),
                'total_reviews' => $user->overallConditions,
                'overall_condition_types'=> $overall_condition_types,
                'clubs' => $clubs,
            ]);
    }


    public function edit(User $user)
    {

        $clubs = LendingClub::all();
        $user = $user->load('userImage');

        return inertia(
            'User/Edit',
            [
                'user' => $user,
                'clubs' => $clubs,
            ]
        );
    }

    public function update(Request $request, User $user)
    {

        $user->update(
            $request->validate([
                'first_name' => 'required',
                'last_name' => 'required',
                'email' => 'required|email|unique:users,email,'.$user->id.',id',
                'phone' => 'min:4',
                'lending_club_id' => 'integer',
                'password' => 'min:8|confirmed',
            ])
        );


        return redirect()->route('user.index')
            ->with('success', 'Informations mises à jour.');
    }


    public function destroy($id)
    {
        //
    }
}
