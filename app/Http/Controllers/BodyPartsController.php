<?php

namespace App\Http\Controllers;

use App\Models\BodyPart;
use App\Models\Injury;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BodyPartsController extends Controller
{
    public function index(){
        return inertia('BodyParts/Index');
    }

    /**
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function create(){

        $from = date('Y-m-d', strtotime('last wednesday'));
        $to = date('Y-m-d');

        $injuries = Injury::where('user_id', Auth::user()->id)->whereBetween('updated_at', [$from, $to])->get();
        $injuriesTab = [];
        foreach ($injuries as $injury){
            $bodyPart = BodyPart::find($injury->body_part_id);
            $injuryElement = [
                'value' => $injury->value,
                'need_treatment' => $injury->need_treatment,
                'body_part_name' => $bodyPart->name,
            ];

            $injuriesTab[] = $injuryElement;
        }

        return inertia('BodyParts/Create',
            [
                'injuries' => $injuriesTab,
            ]);
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
