<?php

namespace App\Http\Controllers;

use App\Models\BodyPart;
use Illuminate\Http\Request;

class BodyPartsController extends Controller
{
    public function index(){
        return inertia('BodyParts/Index');
    }

    public function create(){
        return inertia('BodyParts/Create');
    }

    public function store(Request $request){

        $bodyPart = BodyPart::where('name', $request->body_part)->first();

        $request->user()->injuries()->create([
            'body_part_id' => $bodyPart->getKey(),
            'need_treatment' => $request->need_treatment,
            'value' => $request->value,
        ]);

        return back()
            ->with('success', 'Injury saved!');
    }

}
