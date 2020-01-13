export default function(state, action){ 
    switch(action.type){
        case "setUserLocation": { 
            return { 
                center: action.data.coords,
                zoom: 18
            }
        }
        default: { 
            return state; 
        } 
    }
}