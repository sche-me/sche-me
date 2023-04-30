const couriers = (state = [], action: { type: any; couriers: any; error: any; }) => {
    switch(action.type){
        case "LOAD_COURIER_SUCCESS":
            return [...state, ...action.couriers];
        case "LOAD_COURIER_FAIL":
            return [...state, action.error];
        default:
            return state;
    }
};

export default couriers;