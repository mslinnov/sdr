<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    //Affichage du formulaire de création d'un utilisateur
    public function create(){
        return inertia('Auth/Login');
    }

    // Gestion de la connexion
    public function store(Request $request){

        // If the authentification fail
        if(!Auth::attempt($request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]), true)){
            // Send an error message
            throw ValidationException::withMessages([
                'email' => 'Authentification failed'
            ]);
        }

        //Regeneration of the session to avoid the session fixation attaque
        $request->session()->regenerate();

        return redirect()->intended('/');

    }

    // Fonction de logout
    public function destroy( Request $request){

        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }
}
