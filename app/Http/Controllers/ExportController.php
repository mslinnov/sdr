<?php

namespace App\Http\Controllers;

use App\Models\BodyPart;
use App\Models\Injury;
use App\Models\OverallCondition;
use App\Models\OverallConditionType;
use App\Models\ReponseElement;
use App\Models\Survey;
use App\Models\SurveyElement;
use App\Models\SurveyInput;
use App\Models\SurveyReponse;
use App\Models\User;
use League\Csv\Writer;
use function Symfony\Component\String\u;


class ExportController extends Controller{

    public function export($startDate, $endDate)
    {
        $from = date('Y-m-d', strtotime($startDate));
        $to = date('Y-m-d', strtotime($endDate));

        $overallConditions = OverallCondition::whereBetween('created_at', [$from, $to])
            ->select('user_id', 'overall_condition_type_id', 'updated_at')
            ->get();

        $reponseElements = ReponseElement::whereBetween('created_at', [$from, $to])
            ->select('survey_element_id' , 'survey_reponse_id', 'value', 'updated_at')
            ->get();

        $injuries = Injury::whereBetween('created_at', [$from, $to])
            ->select('body_part_id', 'user_id', 'need_treatment', 'value', 'updated_at' )
            ->get();

        // Création du fichier CSV
        $csv = Writer::createFromFileObject(new \SplTempFileObject());

        // Ajouter les en-têtes du fichier CSV
        $csv->insertOne(['Player id','Player Name',
            'Questionnaire', 'Question/Partie du corps', 'Reponse','Réa', 'Date']);

        // Ajouter de l'Overall Condition au fichier CSV
        foreach ($overallConditions as $overallCondition) {
            $userName ="" .User::find($overallCondition->user_id)->first_name ." ".User::find($overallCondition->user_id)->last_name ;
            $overallConditionName = "" .OverallConditionType::find($overallCondition->overall_condition_type_id)->name;
            $csv->insertOne([$overallCondition->user_id, $userName ,'Forme Générale', 'Comment vas-tu ?' ,$overallConditionName,'Nan', $overallCondition->updated_at]);
        }

        // Ajouter des réponses au questionnaire au fichier CSV
        foreach ($reponseElements as $reponseElement){
            $surveyResponse = SurveyReponse::find($reponseElement->survey_reponse_id);
            $userName = "" .User::find($surveyResponse->user_id)->first_name ." " .User::find($surveyResponse->user_id)->last_name;
            $questionnaireName = "" .Survey::find($surveyResponse->survey_id)->name;
            $surveyElement = SurveyElement::find($reponseElement->survey_element_id);
            $surveyInputName = SurveyInput::find($surveyElement->survey_input_id)->title;
            $csv->insertOne([$surveyResponse->user_id, $userName ,$questionnaireName ,$surveyInputName , $reponseElement->value ,'Nan',  $reponseElement->updated_at]);
        }

        // Ajout des blessure au fichier csv
        foreach ($injuries as $injury){
            $userName = "" .User::find($injury->user_id)->first_name ." ".User::find($injury->user_id)->last_name ;
            $bodyPartName = BodyPart::find($injury->body_part_id)->name;
            $needTreatment = "NON";
            if ($injury->need_treatment === 1) $needTreatment = "OUI";
            $csv->insertOne([$injury->user_id, $userName ,'Blessure', $bodyPartName ,$injury->value, $needTreatment, $injury->updated_at]);
        }


        // Générer un nom de fichier dynamique
        $filename = 'export_' . date('Y-m-d', strtotime($startDate)) . '_' . date('Y-m-d', strtotime($endDate)) . '.csv';

        // Télécharger le fichier CSV
        $csvData = $csv->getContent();
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="'. $filename . '"',
        ];

        return response($csvData, 200, $headers);
    }

}
