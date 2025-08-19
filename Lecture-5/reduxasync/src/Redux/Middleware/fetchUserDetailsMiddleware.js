import { userActions } from "../slice/UserSlice";

const fetchUserDetailsMiddleware = (params) =>{
    return async (dispatch)=>{
        try{
            dispatch(userActions.onPending());
            const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${params}`);
            const userData = await userResponse.json();

            dispatch(userActions.onFulfiled(userData));
        }catch(error){
            dispatch(userActions.onRejected(error.message));
        }
    }
}

export default fetchUserDetailsMiddleware;