import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//URL Cars
const getAllCars_admin_URL = process.env.REACT_APP_BASE_URL+'/admin/car'
const getCarById_admin_URL = process.env.REACT_APP_BASE_URL+'/admin/car/'
const AddNewCar_admin_URL = process.env.REACT_APP_BASE_URL+'/admin/car'

//Cars
const getAllCars = createAsyncThunk('cars/getAllCars', async () => {
    try {
        const response = await axios.get(getAllCars_admin_URL);
        return response.data;
    } catch (error) {
        return error.message;
    }
})

const getCarById = createAsyncThunk('cars/getCarById', async (initialPost) => {
    try {
        const response = await axios.get(getCarById_admin_URL+initialPost);
        return response.data;
    } catch (error) {
        return error.message;
    }
})

const AddNewCar = createAsyncThunk('cars/AddNewCar', async (initialPost) => {
    try {
        var FormData = require('form-data');
        var data = new FormData();
        data.append('name', initialPost?.name);
        data.append('category', initialPost?.category);
        data.append('price', initialPost?.price);
        data.append('status', initialPost?.status);
        data.append('image', initialPost?.image);
        const response = await axios.post(AddNewCar_admin_URL, data);
        return response.status;
    } catch (error) {
        return error.message;
    }
})

export { 
    getAllCars,getCarById, AddNewCar
};