<?php

namespace App\Http\Controllers;

use App\Models\LendingClub;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LendingClubController extends Controller
{

    public function index(){

//        $clubs = DB::table('lending_clubs')->orderByDesc('created_at')->paginate(12);

        $clubs = LendingClub::with('users', 'image')->orderByDesc('created_at')->paginate(12);

        return inertia(
            'LendingClub/Index',
            [
                'clubs' => $clubs,
            ]
        );
    }


    public function create(){
        return inertia('LendingClub/Create');
    }

    public function store(Request $request){


        LendingClub::create($request->validate([
            'name' => 'required'
        ]));

        return redirect()->route('lending-club.index')
            ->with('success', 'Nouveau club créé !');
    }


    public function show($id)
    {

        $club = LendingClub::find($id);

        return inertia(
            'LendingClub/Show',
            [
                'club'=> $club,
            ]);
    }



    public function edit($id)
    {

        $club = LendingClub::find($id)->load('image');

        return inertia(
            'LendingClub/Edit',
            [
                'club' => $club
            ]
        );
    }



    public function update(Request $request, $id)
    {
        $clubToEdit = LendingClub::all()->find($id);

        $clubToEdit->update(
            $request->validate([
                'name' => 'required|string',
            ])
        );

        return redirect()->route('lending-club.index')
            ->with('success', 'Club updated!');
    }



    public function destroy($id)
    {
        //
    }
}
