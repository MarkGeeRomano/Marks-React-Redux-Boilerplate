function count(state = {}, action){
    switch(action.type){
        case 'SAMPLE_CREATOR':
            return ++state;
    };
    return state;
};

export default count;