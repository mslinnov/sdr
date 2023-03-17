export const getElementTypeById =(elementTypes, id) =>{

    const currentElementType = elementTypes.filter(function(item){return (item.id == id);}).slice(-1);
    if(currentElementType[0]){
        const name = currentElementType[0].name
        const icon = currentElementType[0].icon
        return {'name': name,'icon': icon }
    }
    else{
        return {'name': null, 'icon': null}
    }

}
