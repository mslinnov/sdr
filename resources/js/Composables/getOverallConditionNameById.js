export const getOverallConditionNameById =(overallConditionTypes, id) =>{

    const currentOverallConditionType = overallConditionTypes.filter(function(item){return (item.id == id);}).slice(-1);
    if(currentOverallConditionType[0]){
        const overallConditionImage = currentOverallConditionType[0].name
        return overallConditionImage
    }
    else{
        return 'none'
    }

}
