import moment from "moment";

export const getHadRespondThisWeek = (lastAnswerTime) => {
    const today = moment();
    const lastAnswerDate = moment(lastAnswerTime);
    let lastTuesday;

    if (today.day() <= 2) {
        // Si nous sommes dimanche, lundi ou mardi, le dernier mardi est de la semaine dernière
        lastTuesday = today.clone().subtract(1, 'week').startOf('week').add(2, 'days');
    } else {
        // Sinon, le dernier mardi est de la même semaine
        lastTuesday = today.clone().startOf('week').add(2, 'days');
    }

    return lastAnswerDate.isAfter(lastTuesday, 'day');
}
