export const getLendingClubById =(lendingClubs, id) =>{

    const currentLendingClub = lendingClubs.filter(function(item){return (item.id == id);}).slice(-1);
    if(currentLendingClub[0]){
        const lendingClubName = currentLendingClub[0].name
        const lendingClubLogo = currentLendingClub[0].logo
        return {'name': lendingClubName,'logo': lendingClubLogo }
    }
    else{
        return {'name': null, 'logo': null}
    }

}
