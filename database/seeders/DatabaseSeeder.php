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
            'name' => 'Bad',
        ]);
        OverallConditionType::factory()->create([
            'image' => 'normal.png',
            'name' => 'Normal',
        ]);
        OverallConditionType::factory()->create([
            'image' => 'good.png',
            'name' => 'Good',
        ]);
        OverallConditionType::factory()->create([
            'image' => 'great.png',
            'name' => 'Great',
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
            'name' => 'Physique',
        ]);
        SurveyInput::factory()->create([
            'element_type_id' => 1,
            'image' => 'sleeping_emoji.png',
            'title' => 'Comment juges-tu la qualité de ton sommeil sur les 7 derniers jours ?',
            'legend_1' => 'Très mal dormis',
            'legend_10' => 'Très bien dormis',
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
            'title' => 'Comment juges-tu ta fatigue sur les 7 derniers jours ?',
            'legend_1' => 'Très fatigué',
            'legend_10' => 'Pas du tout fatigué',
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
            'title' => 'Comment juges-tu ton humeur sur les 7 derniers jours ?',
            'legend_1' => 'Mauvaise humeur',
            'legend_10' => 'Très bonne humeur',
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
            'title' => 'Ressens-tu des douleurs (courbatures, jambes lourdes) sur ces 7 derniers jours ?',
            'placeholder' => 'Non'
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
            'title' => 'Comment juges-tu l\'intensité des séances sur ces 7 derniers jours ?',
            'legend_1' => 'Facile',
            'legend_10' => 'Très difficile',
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
            'title' => 'Donne-toi une note sur le dernier match',
            'legend_1' => 'Mauvais match',
            'legend_10' => 'Excellent match',
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
            'title' => 'Évalue ta compréhension des consignes de ton coach',
            'legend_1' => 'Mauvaise compréhension',
            'legend_10' => 'Très bonne compréhension',
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
            'title' => 'Évalue la relation avec tes cohéquipiers sur le terrain',
            'legend_1' => 'Mauvaise relation',
            'legend_10' => 'Très bonne relation',
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
            'title' => 'Évalue la relation avec tes cohéquipiers en dehors du terrain',
            'placeholder' => ''
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
            'title' => 'Note ton cadre de vie',
            'legend_1' => 'Mauvais',
            'legend_10' => 'Idéale',
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
            'title' => 'Comment se sentent tes proches ?',
            'legend_1' => 'Pas bien',
            'legend_10' => 'Très bien',
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
            'title' => 'Note ton niveau de stress',
            'legend_1' => 'Très stressé',
            'legend_10' => 'Pas du tout stressé',
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
            'title' => 'Note ton niveau d\'appétit',
            'legend_1' => 'Pas faim',
            'legend_10' => 'Très faim',
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
            'title' => 'Une remarque à nous faire part ou un évènement important à mentionner ?',
            'placeholder' => 'Rien à signaler'
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
         BodyPart::factory()->create(['name'=>'Arrière_Tete_Gauche',]);
         BodyPart::factory()->create(['name'=>'Cervicale_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arrière_Epaule_Gauche',]);
         BodyPart::factory()->create(['name'=>'Dos_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arrière_Biceps_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arrière_Coude_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arrière_Avant',]);
         BodyPart::factory()->create(['name'=>'Arrière_Poignet_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arrière_Main_Gauche',]);
         BodyPart::factory()->create(['name'=>'Lombaire_Gauche',]);
         BodyPart::factory()->create(['name'=>'Fessier_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arrière_Adducteur_Gauche',]);
         BodyPart::factory()->create(['name'=>'Ischios_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arrière_Genou_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arrière_Mollet_Gauche',]);
         BodyPart::factory()->create(['name'=>'Talon_Gauche',]);
         BodyPart::factory()->create(['name'=>'Arrière_Tete_Droit',]);
         BodyPart::factory()->create(['name'=>'Cervicale_Droit',]);
         BodyPart::factory()->create(['name'=>'Arrière_Epaule_Droit',]);
         BodyPart::factory()->create(['name'=>'Dos_Droit',]);
         BodyPart::factory()->create(['name'=>'Arrière_Biceps_Droit',]);
         BodyPart::factory()->create(['name'=>'Arrière_Coude_Droit',]);
         BodyPart::factory()->create(['name'=>'Arrière_Avant',]);
         BodyPart::factory()->create(['name'=>'Arrière_Poignet_Droit',]);
         BodyPart::factory()->create(['name'=>'Arrière_Main_Droit',]);
         BodyPart::factory()->create(['name'=>'Lombaire_Droit',]);
         BodyPart::factory()->create(['name'=>'Fessier_Droit',]);
         BodyPart::factory()->create(['name'=>'Arrière_Adducteur_Droit',]);
         BodyPart::factory()->create(['name'=>'Ischios_Droit',]);
         BodyPart::factory()->create(['name'=>'Arrière_Genou_Droit',]);
         BodyPart::factory()->create(['name'=>'Arrière_Mollet_Droit',]);
         BodyPart::factory()->create(['name'=>'Talon_Droit',]);

    }
}
