// import all our reducers
import time from "./time";
import elephant from "./elephant";
import monkey from "./monkey";
import giraffe from "./giraffe";

//helps us combining all reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    time : time,
    elephants:  elephant,
    monkeys : monkey,
    giraffes : giraffe
});

export default allReducers;