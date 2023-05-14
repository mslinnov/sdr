<?php

namespace App\Http\Controllers;

use App\Models\ReponseElement;
use App\Models\Survey;
use App\Models\SurveyReponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function index()
    {
        return inertia(
            'Survey/Index',
            [
                'surveys' => Survey::all(),
            ]
        );
    }


    /**
     * Show the form for creating a new resource
     *
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function create()
    {
        $surveyResponses = SurveyReponse::with('survey', 'reponseElements')->where('user_id','=', Auth::user()->id)->get();

        return inertia(
            'Survey/Create',
            [
                'surveys' => Survey::with('surveyElements.surveyInput')->get(),
                'surveyResponses' => $surveyResponses,
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $surveyId = null;
        foreach ($request->input() as $name => $input){
            if (str_contains($name, 'surveyId')){
                $surveyId = $input;
            }
        }

        $surveyResponse = SurveyReponse::create([
            'survey_id' => $surveyId,
            'user_id' => $request->user()->id,
            'locale' => 'fr',
        ]);


        foreach ($request->input() as $name => $input){

            if (str_contains($name, 'responseSurveyElement')){

                $surveyElmtId = explode('_', $name)[1];

                ReponseElement::create([
                    'survey_reponse_id' => $surveyResponse->id,
                    'survey_element_id' => $surveyElmtId,
                    'value' => $input,
                ]);
            }
        }

        return back()
            ->with('success', 'Survey saved!');
    }


    /**
     * Display the specified survey.
     *
     * @param Survey $survey
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function show(Survey $survey)
    {

        $currentSurvey = Survey::with('surveyElements.surveyInput')->where('id', "=", $survey->id)->orderBy('order')->get();
        $surveyResponses = SurveyReponse::with('reponseElements.surveyElement')->where('survey_id', "=", $survey->id)->get();


        return inertia(
            'Survey/Show',
            [
                'survey' => $currentSurvey,
                'surveyResponses' => $surveyResponses,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

}
