export const getSurveyInputById =(surveyInputs, id) =>{

    const currentSurveyInput = surveyInputs.filter(function(item){return (item.id == id);}).slice(-1);
    if(currentSurveyInput[0]){
        const title = currentSurveyInput[0].title
        const image = currentSurveyInput[0].image
        return {'title': title,'image': image }
    }
    else{
        return {'title': null, 'image': null}
    }

}
