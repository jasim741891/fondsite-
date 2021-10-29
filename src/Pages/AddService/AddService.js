import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddSerivce.css";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }
            })
    }
    return (
        <div className="add-service">
            <h1>Please  add service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image uri" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;