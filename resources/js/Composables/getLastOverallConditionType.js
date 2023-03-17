export const getLastOverallConditionType = (total_reviews, user) => {

    const user_id = user.id
    const last_user_review = total_reviews.filter(function(item){return (item.user_id == user_id);}).slice(-1);
    if (last_user_review[0]){
        const last_user_overall_condition_id = last_user_review[0].overall_condition_type_id
        return last_user_overall_condition_id
    }
    else{
        return 0
    }

}
