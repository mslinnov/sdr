<?php

namespace App\Http\Controllers;

use App\Models\OverallCondition;
use App\Models\OverallConditionType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OverallConditionController extends Controller
{

    public function index(){

        $total_reviews = OverallCondition::all();
        $overall_condition_types = OverallConditionType::all();

        return inertia(
            'OverallCondition/Index',[
                'total_reviews' => $total_reviews,
                'overall_condition_types' => $overall_condition_types
        ]);
    }

    public function create(){

        // Application de la policy
//        $this->authorize('create', OverallCondition::class);

        $overall_condition_types = OverallConditionType::all();
        $last_user_condition = Auth::user()->overallConditions()->get()->last();

        return inertia(
            'App/Create',[
                'overall_condition_types' => $overall_condition_types,
                'last_user_condition' => $last_user_condition
        ]);
    }

    public function store(Request $request){

        $request->user()->overallConditions()->create([
            'overall_condition_type_id' => $request->overall_condition_choice,
        ]);

        return back()
            ->with('success', 'Overall condition saved!');
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id){

        $overallToEdit = OverallCondition::all()->find($id);
        $overallToEdit->update([
            'overall_condition_type_id' => $request->overall_condition_choice,
        ]);

        return back()
            ->with('success', 'Overall condition updated!');

    }

    public function destroy($id)
    {
        //
    }
}
