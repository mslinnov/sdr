<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserImage;
use Illuminate\Http\Request;

class UserImageController extends Controller
{
    public function create(User $user){

        $user->load('userImage');
        return inertia(
            'User/UserImage/Create', [
                'user' => $user,
            ]);
    }

    public function store(User $user, Request $request){

        if ($request->hasFile('images')){
            foreach ($request->file('images') as $file) {
                $path = $file->store('app/public/players', 'public');
                // Creation of a new UserImage with the $path of the uploaded image
                $newImage = new UserImage([
                    'filename' =>$path
                ]);
                $newImage->save();
                // Association of the new uploaded image and the user
                $user->user_image_id = $newImage->id;
                $user->save();
            }
        }

        return redirect()->back()->with('success', 'Image uploaded');
    }
}
