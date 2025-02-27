import clsx from "clsx";
import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Button from "./Button";
import * as yup from 'yup';
import { data } from "browserslist";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { createDiscount } from "../services/discount";

const SchemaDiscounts = yup.object().shape({
  name: yup.string().required("Campo requerido").trim(),
  // mealsDiscounts: yup.number(),
  // beverageDiscounts: yup.number(),
  // mealsDiscountsPorcentage: yup.number(),
  // beverageDiscountsPorcentage: yup.number(),
  // twoOnePromos: yup.string(),
  // threeTwoPromos: yup.string(),
  // customsDiscounts: yup.string(),
  initialDate: yup.date().required("Campo requerido"),
  endDate: yup.date().required("Campo requerido"),
  // company: yup.mongoose.Schema.Types.ObjectId.required("Campo requerido"),

})


export default function UpdateDiscount (){
  const [messageError, setMessageError] = useState("");
  const router = useRouter();
  const {register, handleSubmit, formState: { error },} = useForm ({
    resolver: yupResolver(SchemaDiscounts),
  })

  const onSubmit = (data) => submitRegister(data);
    
    const submitRegister = async (data) => {
    console.log(data);
    try {
      setMessageError("");

      const id = "639be1d1289c2e72639b9538"
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWJlMWQxMjg5YzJlNzI2MzliOTUzOCIsInJvbGUiOiJjb21wYW55IiwiaWF0IjoxNjcxMzQwODQ1LCJleHAiOjE2NzE0MjcyNDV9.AOT64xgxAzaK7gViNuep2egRHUIIzfpAtIJGTDvzYfg"
      
      console.log(data)
      
      const response = await createDiscount( data, token );
      const dataJson = await response.Json()
      console.log(response);
      console.log(dataJson);

      if (response.status === 200){
        router.push(`/company/modal-discounts?id=${response.user}&token=${response.token}`);
        return 
      }
      setErrorMessage ("Ya existe un descuento con el mismo nombre")

    } catch (error) {
      console.log("Error: ", error);
      setMessageError ("Ups! Ocurrió un error");
    }
  }

  return(
    <form 
      onSubmit={handleSubmit(onSubmit)}
    >
      <section className={clsx("bg-white w-[680px] rounded-[16px] border-2 border-blue-sky-50 shadow-xl p-5 mr-10 absolute flex flex-col ")}>
        <div>
          <article>
            <h1 className={clsx("mt-[13px] text-[20px] font-montserrat text-blue-gray-600 max-lg:ml-[3px]")}>Crea un descuento</h1>
          </article>
          <article className=" ">
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1')}>
            EJEMPLO
            </label>
            <div
            className={clsx(
            "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
            "rounded-lg py-2 px-2 text-blue-gray-700",
            "bg-blue-gray-50 hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline")}>
              <p>10% de descuento en todas las bebidas</p>
            </div>
          </article>
        </div>
        {/* <div className="flex inline-flex rounded-lg py-2 px-3 text-gray-700 border shadow w-[616px] h-[132px] mt-5">
          <article className="">
            <div class="flex items-center">
              <input 
              id="green-radio" 
              type="radio" value="" class="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="green-checkbox" class="ml-2 rounded-lg py-2 px-3 text-gray-400">Rápido</label>
            </div>
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mb')}>
            PORCENTAJE DE DESCUENTO
            </label>
            <input
            type='number'
            placeholder='00'
            message='error'
            {...register("name")}
            className={clsx(
            "shadow mt-[8px] appearance-none border w-[176px] h-[40px] pl-16",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline")}>
            </input>
          </article>
          <p className="rounded-lg py-2 px-3 text-gray-400 mt-16">% de descuento en</p>
          <article className=" ">
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-11')}>
            DESCRIPCIÓN DEL DESCUENTO/PROMOCIÓN
            </label>
            <input
            htmlFor='name' 
            id='username'
            type='string'
            placeholder='Escribe una breve descripción'
            message='error'
            className={clsx(
            "shadow mt-[8px] appearance-none border w-[250px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline")}>
            </input>
          </article>
        </div> */}
        <div className="flex inline-flex rounded-lg py-2 px-3 text-gray-700 border shadow w-[616px] h-[132px] mt-5">
          <article className=" ">
            {/* <div class="flex items-center">
              <p className=" rounded-lg py-2 px-3 text-gray-400">Ingresa la siguiente información</p>
            </div> */}
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1')}>
            DESCRIPCIÓN DEL DESCUENTO/PROMOCIÓN
            </label>
            <input
            type='string'
            placeholder='Escribe una breve descripción'
            { ...register("name")}
            className={clsx(
            "shadow mt-[8px] appearance-none border w-[584px] h-[80px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline")}>
            </input>
          </article>
        </div>
        <div>
        <article>
          <h2 className={clsx("mt-[30px] text-[20px] font-montserrat text-blue-gray-600 max-lg:ml-[3px]")}>Vigencia del descuento</h2>
        </article>
        <div className="inline-block"> 
          <article >
            <label className={clsx(
            'text-[10px] font-montserrat font-medium text-blue-gray-500',
            'block ml-1 mt-1')}>
            FECHA Y HORA DE INICIO
            </label>
            <input
            type='datetime-local'
            placeholder='17/01/2023'
            message='error'
            {...register("initialDate")}
            className={clsx(
              "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline")}>
            </input>
          </article>
        </div>
        <article className="m-4 inline-block">
          <label className={clsx(
          'text-[10px] font-montserrat font-medium text-blue-gray-500',
          'block ml-1 mt-1')}>
          FECHA Y HORA DE TERMINO
          </label>
          <input
          type='datetime-local'
          placeholder='18/01/2023'
          message='error'
          {...register("endDate")}
          className={clsx(
            "shadow mt-[8px] appearance-none border w-[300px] h-[40px]",
            "rounded-lg py-2 px-3 text-gray-700",
            "bg-[#F6F9FF] hover:border-violet-700 border-2",
            "focus:outline-none focus:shadow-outline")}>
          </input>
        </article>
      </div>
    
      <div className={clsx("mt-3 flex justify-between")}>
        <button className="lgbtiq-grad-color font-bold mt-5 ml-7">
          CANCELAR
        </button>
        <Button
          label='PUBLICAR DESCUENTO'
          isSubmit
          style={clsx(
            "lgbtiq-grad-bg rounded-lg max-lg:mt-[10px] ")}>
        </Button>
      </div>
    </section>
  </form>
)
}