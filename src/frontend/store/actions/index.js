import { DUMMY_ACTION } from '../../constants';

// We structure the action like this so we can make async calls thanks to ReactThunk
export const callAPI = () => (dispatch) => {
    console.log("Dispatching DUMMY_ACTION instead of calling the real API");
    dispatch({
        type: DUMMY_ACTION
    });
}