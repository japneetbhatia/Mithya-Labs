export const appReducer = (state, action) => {
    let studentData = [];

    switch (action.type) {
        case "add": studentData.push(action.operate);
                    return (studentData, state.act=0, state.index);
        
        case "edit": state.studentData[state.index] = action.operate;
                    return (studentData, state.act= 1, state.index= -1);
                    
        case "Delete": studentData.slice(action.operate, 1);
                    return (studentData, state.index);
        
        default: return state;
    }
}