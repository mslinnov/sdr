<?php

namespace App\Http\Controllers;

use App\Models\LendingClub;
use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function create(LendingClub $lendingClub){

        $lendingClub->load('image');

        return inertia(
            'LendingClub/Image/Create', [
            'lendingClub' => $lendingClub,
        ]);
    }

    public function store(LendingClub $lendingClub, Request $request){

        if ($request->hasFile('images')){
            foreach ($request->file('images') as $file) {
                $path = $file->store('clubs', 'public_direct');
                // Creation of a new UserImage with the $path of the uploaded image
                $newImage = new Image([
                    'filename' =>$path
                ]);
                $newImage->save();
                // Association of the new uploaded image and the user
                $lendingClub->image_id = $newImage->id;
                $lendingClub->save();
            }
        }

        return redirect()->back()->with('success', 'Image uploaded');
    }
}
