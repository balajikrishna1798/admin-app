import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";

export const login = createAsyncThunk(
    'auth/admin-login',
    async (user,thunkApi) => {
       try {
         return await authService.login(user)
       } catch (error) {
        return thunkApi.rejectWithValue(error)
       }
    }
);

const defaultUserState = {
    _id:null,
    firstname:null,
    lastname:null,
    email:null,
    mobile:null,
    token:null,
}

const initialState = {
    "user": defaultUserState,
    "isError": false,
    "isLoading": false,
    "isSuccess": false,
    "message": ""
}


const accountSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials:(state,action)=>{
            console.log(action);
            const {user,access_token} = action.payload
            state.user = user
            state.token = access_token
        },
        resetReducer: () => {
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
               state.isLoading = false
               state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
               state.isSuccess = false
                state.user = null
            });
    },
});
export default accountSlice.reducer;
export const { resetReducer,setCredentials } = accountSlice.actions
