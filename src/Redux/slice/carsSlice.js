import { createSlice } from "@reduxjs/toolkit";
import { 
    AddNewCar,
    getAllCars,
    getCarById,
} from "../action/carsAction";

const initialState = {
    showMessage: false,
    status:'',
    message:'',
    cars:'',
    car:'',
    response:'',
    search:'',
    showSearch: false
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setOffShowMessage(state){
            state.showMessage = false
        },
        setSearch(state, action){
            state.search = action.payload
        },
        setShowSearch(state, action){
            state.showSearch = true
        }
    },
    extraReducers(builder) {
        // getAllCar
        builder.addCase(getAllCars.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(getAllCars.fulfilled, (state, action) => {
            state.showMessage = true
            state.message = "Get Data Success"
            state.status = 'success'
            state.cars = action.payload
        })
        builder.addCase(getAllCars.rejected, (state, action) => {
            state.status = 'reject'
            state.showMessage = true
            state.message = "Get Data Failed"
        })
        // getCarById
        builder.addCase(getCarById.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(getCarById.fulfilled, (state, action) => {
            state.showMessage = true
            state.message = "Get Data Success"
            state.status = 'success'
            state.car = action.payload
        })
        builder.addCase(getCarById.rejected, (state, action) => {
            state.status = 'reject'
            state.showMessage = true
            state.message = "Get Data Failed"
        })
        // AddNewCars
        builder.addCase(AddNewCar.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(AddNewCar.fulfilled, (state, action) => {
            state.showMessage = true
            state.message = "Add Data Success"
            state.status = 'success'
            state.response = action.payload
        })
        builder.addCase(AddNewCar.rejected, (state, action) => {
            state.status = 'reject'
            state.showMessage = true
            state.message = "Add Failed"
        })
    }
})

// export const selectAuth = (state) => state.auth.isLoggedIn;
// export const selectRegister = (state) => state.auth.register;
export const selectShowSearch = (state) => state.cars.showSearch;
export const selectSearch = (state) => state.cars.search;
export const selectMessage = (state) => state.cars.message;
export const selectRes = (state) => state.cars.response;
export const selectStatus = (state) => state.cars.status;
export const selectCarId = (state) => state.cars.car;
export const selectCars = (state) => state.cars.cars;
export const carsActions = carsSlice.actions;

export default carsSlice.reducer