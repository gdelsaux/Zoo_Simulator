
const time = (state = 0, action) => {
    switch(action.type){
        case 'TIME' :
            if( state !== 24){
                return state + 1
            }
            return state = 0
        default :
            return state
    }
};

export default time