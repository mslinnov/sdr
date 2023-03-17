import {computed} from "vue";

export const useCalculatePercent = (total_reviews, id, decimals) =>{
    const current_reviews = computed(
        () => (total_reviews.filter((item) => {
            return (item.overall_condition_type_id === id)
        }).length)
    )
    const percent = computed(
        () => ((current_reviews.value / total_reviews.length)*100).toFixed(decimals)
    )
    const percent_string = percent.value+'%'

    return {percent, percent_string}
}
