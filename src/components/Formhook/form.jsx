import React from 'react'
import { useForm } from "react-hook-form";
import s from './Form.module.css'

 let FormCrud = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => props.createUserThunk(data.name, data.address, data.email, data.contact, data.gender);
    return (<div  className={s.container}>
         <form onSubmit={handleSubmit(onSubmit)}>
               firstName <input {...register("name", { required: true, maxLength: 20 })} />
               address   <input {...register("address", { pattern: /^[A-Za-z]+$/i })} />
               email <input {...register("email")} />
               contact  <input {...register("contact")} />
               gender  <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input  className={s.input }type="submit" />
        </form>
    </div>
       
    )
}

export default FormCrud

