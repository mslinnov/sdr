<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\BodyPart;
use App\Models\ElementType;
use App\Models\LendingClub;
use App\Models\OverallCondition;
use App\Models\OverallConditionType;
use App\Models\Survey;
use App\Models\SurveyElement;
use App\Models\SurveyInput;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        LendingClub::factory()->create([
            'logo' => 'pacos_de_ferreira.png',
            'name' => 'Pacos de Ferreira',
        ]);


         \App\Models\User::factory()->create([
             'first_name' => 'Admin',
             'last_name' => 'SDR',
             'email' => 'admin@sdr.com',
             'password' => 'StadeDeReims2k23!',
             'is_admin' => true,
         ]);


//        User::factory(3)->create();

        /*
         * Création des element de overall condition
         * */
        OverallConditionType::factory()->create([
            'image' => 'bad.png',
            'name' => 'OverallConditionType.Bad',
        ]);
        OverallConditionType::factory()->create([
            'image' => 'normal.png',
            'name' => 'OverallConditionType.Normal',
        ]);
        OverallConditionType::factory()->create([
            'image' => 'good.png',
            'name' => 'OverallConditionType.Good',
        ]);
        OverallConditionType::factory()->create([
            'image' => 'great.png',
            'name' => 'OverallConditionType.Great',
        ]);

//        OverallCondition::factory(42)->create();


        ElementType::factory()->create([
            'type_name' => 'opinion scale',
            'order' => 1,
            'icon' => 'opinion_scale',
            'name' => 'Opinion Scale',
        ]);
        ElementType::factory()->create([
            'type_name' => 'free question',
            'order' => 1,
            'icon' => 'free_question',
            'name' => 'Free Question',
        ]);


        /**
         *
         * Création du formulaire physique
         *
         */
        Survey::factory()->create([
            'order' => 1,
            'name' => 'SurveyPhysique.SurveyName',
        ]);
        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'sleeping_emoji.png',
            'title' => 'SurveyPhysique.sleeping_title',
            'legend_1' => 'SurveyPhysique.sleeping_legend_1',
            'legend_10' => 'SurveyPhysique.sleeping_legend_10',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 1,
            'survey_input_id' => 1,
            'element_type_id' => 1,
            'order' => 1,
            'is_active' => true,
        ]);

        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'tired_emoji.png',
            'title' => 'SurveyPhysique.tired_title',
            'legend_1' => 'SurveyPhysique.tired_legend_1',
            'legend_10' => 'SurveyPhysique.tired_legend_10',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 1,
            'survey_input_id' => 2,
            'element_type_id' => 1,
            'order' => 2,
            'is_active' => true,
        ]);

        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'smile_emoji.png',
            'title' => 'SurveyPhysique.smile_title',
            'legend_1' => 'SurveyPhysique.smile_legend_1',
            'legend_10' => 'SurveyPhysique.smile_legend_10',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 1,
            'survey_input_id' => 3,
            'element_type_id' => 1,
            'order' => 3,
            'is_active' => true,
        ]);

        SurveyInput::factory()->create([
            'element_type_id' => 2,
            'image' => 'injured_emoji.png',
            'title' => 'SurveyPhysique.injured_title',
            'placeholder' => 'SurveyPhysique.injured_placeholder',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 1,
            'survey_input_id' => 4,
            'element_type_id' => 2,
            'order' => 4,
            'is_active' => true,
        ]);

        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'arm_emoji.png',
            'title' => 'SurveyPhysique.arm_title',
            'legend_1' => 'SurveyPhysique.arm_legend_1',
            'legend_10' => 'SurveyPhysique.arm_legend_10',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 1,
            'survey_input_id' => 5,
            'element_type_id' => 1,
            'order' => 5,
            'is_active' => true,
        ]);

        /**
         *
         * Création du formulaire sportif
         *
         */
        Survey::factory()->create([
            'order' => 2,
            'name' => 'Sportif',
        ]);
        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'soccer_ball_emoji.png',
            'title' => 'SurveySportif.soccer_ball_title',
            'legend_1' => 'SurveySportif.soccer_ball_legend_1',
            'legend_10' => 'SurveySportif.soccer_ball_legend_10',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 2,
            'survey_input_id' => 6,
            'element_type_id' => 1,
            'order' => 1,
            'is_active' => true,
        ]);
        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'monocle_emoji.png',
            'title' => 'SurveySportif.monocle_title',
            'legend_1' => 'SurveySportif.monocle_legend_1',
            'legend_10' => 'SurveySportif.monocle_legend_10',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 2,
            'survey_input_id' => 7,
            'element_type_id' => 1,
            'order' => 2,
            'is_active' => true,
        ]);
        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'stadium_emoji.png',
            'title' => 'SurveySportif.stadium_title',
            'legend_1' => 'SurveySportif.stadium_legend_1',
            'legend_10' => 'SurveySportif.stadium_legend_10',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 2,
            'survey_input_id' => 8,
            'element_type_id' => 1,
            'order' => 3,
            'is_active' => true,
        ]);
        SurveyInput::factory()->create([
            'element_type_id' => 2,
            'image' => 'star_eyes_emoji.png',
            'title' => 'SurveySportif.star_eyes_title',
            'placeholder' => 'SurveySportif.star_eyes_placeholder',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 2,
            'survey_input_id' => 9,
            'element_type_id' => 2,
            'order' => 4,
            'is_active' => true,
        ]);


        /**
         *
         * Création du formulaire vie quotidienne
         *
         */
        Survey::factory()->create([
            'order' => 3,
            'name' => 'Vie quotidienne',
        ]);
        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'house_emoji.png',
            'title' => 'SurveyQuotidien.house_title',
            'legend_1' => 'SurveyQuotidien.house_legend_1',
            'legend_10' => 'SurveyQuotidien.house_legend_10',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 3,
            'survey_input_id' => 10,
            'element_type_id' => 1,
            'order' => 1,
            'is_active' => true,
        ]);
        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'love_emoji.png',
            'title' => 'SurveyQuotidien.love_title',
            'legend_1' => 'SurveyQuotidien.love_legend_1',
            'legend_10' => 'SurveyQuotidien.love_legend_10',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 3,
            'survey_input_id' => 11,
            'element_type_id' => 1,
            'order' => 2,
            'is_active' => true,
        ]);
        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'stress_emoji.png',
            'title' => 'SurveyQuotidien.stress_title',
            'legend_1' => 'SurveyQuotidien.stress_legend_1',
            'legend_10' => 'SurveyQuotidien.stress_legend_10',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 3,
            'survey_input_id' => 12,
            'element_type_id' => 1,
            'order' => 3,
            'is_active' => true,
        ]);
        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'tongue_emoji.png',
            'title' => 'SurveyQuotidien.tongue_title',
            'legend_1' => 'SurveyQuotidien.tongue_legend_1',
            'legend_10' => 'SurveyQuotidien.tongue_legend_10',
        ]);
        surveyElement::factory()->create([
            'survey_id' => 3,
            'survey_input_id' => 13,
            'element_type_id' => 1,
            'order' => 4,
            'is_active' => true,
        ]);
        SurveyInput::factory()->create([
            'element_type_id' => 2,
            'image' => 'chat_bubble_emoji.png',
            'title' => 'SurveyQuotidien.chat_bubble_title',
            'placeholder' => 'SurveyQuotidien.chat_bubble_placeholder',
        ]);
        SurveyElement::factory()->create([
            'survey_id' => 3,
            'survey_input_id' => 14,
            'element_type_id' => 2,
            'order' => 5,
            'is_active' => true,
        ]);


        /**
         *
         *  Création des body parts
         *
        **/
         BodyPart::factory()->create(['name'=>'Avant_Tete_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Cou_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Epaule_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Pectoraux_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Biceps_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Coude_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Bras_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Poignet_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Main_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Pectoraux_Gauche_2',]);
         BodyPart::factory()->create(['name'=>'Psoas_Gauche',]);
         BodyPart::factory()->create(['name'=>'Aine_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Adducteur_Gauche',]);
         BodyPart::factory()->create(['name'=>'Quadriceps_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Genou_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Mollet_Gauche',]);
         BodyPart::factory()->create(['name'=>'Cheville_Gauche',]);
         BodyPart::factory()->create(['name'=>'Pied_Gauche',]);
         BodyPart::factory()->create(['name'=>'Avant_Tete_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Cou_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Epaule_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Pectoraux_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Biceps_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Coude_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Bras_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Poignet_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Main_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Pectoraux_Droit_2',]);
         BodyPart::factory()->create(['name'=>'Psoas_Droit',]);
         BodyPart::factory()->create(['name'=>'Aine_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Adducteur_Droit',]);
         BodyPart::factory()->create(['name'=>'Quadriceps_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Genou_Droit',]);
         BodyPart::factory()->create(['name'=>'Avant_Mollet_Droit',]);
         BodyPart::factory()->create(['name'=>'Cheville_Droit',]);
         BodyPart::factory()->create(['name'=>'Pied_Droit',]);
         BodyPart::factory()->create(['name'=>'Arriere_Tete_Gauche',]);
         BodyPart::factory()->create(['name'=>'Cervicale_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arriere_Epaule_Gauche',]);
         BodyPart::factory()->create(['name'=>'Dos_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arriere_Biceps_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arriere_Coude_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arriere_Avant',]);
         BodyPart::factory()->create(['name'=>'Arriere_Poignet_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arriere_Main_Gauche',]);
         BodyPart::factory()->create(['name'=>'Lombaire_Gauche',]);
         BodyPart::factory()->create(['name'=>'Fessier_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arriere_Adducteur_Gauche',]);
         BodyPart::factory()->create(['name'=>'Ischios_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arriere_Genou_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arriere_Mollet_Gauche',]);
         BodyPart::factory()->create(['name'=>'Talon_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arriere_Tete_Droit',]);
         BodyPart::factory()->create(['name'=>'Cervicale_Droit',]);
         BodyPart::factory()->create(['name'=>'Arriere_Epaule_Droit',]);
         BodyPart::factory()->create(['name'=>'Dos_Droit',]);
         BodyPart::factory()->create(['name'=>'Arriere_Biceps_Droit',]);
         BodyPart::factory()->create(['name'=>'Arriere_Coude_Droit',]);
         BodyPart::factory()->create(['name'=>'Arriere_Avant',]);
         BodyPart::factory()->create(['name'=>'Arriere_Poignet_Droit',]);
         BodyPart::factory()->create(['name'=>'Arriere_Main_Droit',]);
         BodyPart::factory()->create(['name'=>'Lombaire_Droit',]);
         BodyPart::factory()->create(['name'=>'Fessier_Droit',]);
         BodyPart::factory()->create(['name'=>'Arriere_Adducteur_Droit',]);
         BodyPart::factory()->create(['name'=>'Ischios_Droit',]);
         BodyPart::factory()->create(['name'=>'Arriere_Genou_Droit',]);
         BodyPart::factory()->create(['name'=>'Arriere_Mollet_Droit',]);
         BodyPart::factory()->create(['name'=>'Talon_Droit',]);

    }
}
