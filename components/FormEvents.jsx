import clsx from "clsx";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createEvent } from "../services/events";
import { useRouter } from "next/router";


const schema = yup.object().shape({
  name: yup.string().trim().required("campo requerido"),
  topic: yup.string().trim().required("campo requerido"),
  dateStart: yup.date().required("campo requerido"),
  dateEnd: yup.date().required("campo requerido"),
  haveCost: yup.boolean().required("campo requerido").default(true),
  cost: yup.number().required("campo requerido"),
  capacity: yup.number().required("campo requerido"),
  description: yup
    .string()
    .trim()
    .required("campo requerido")
    .min(10, "requerido minimo 10 caracteres")
    .max(300, "requerido maximo 300 caracteres"),
  // images: yup.string().trim().required("campo requerido"),
});

export default function EventsModalBiz() {
  const [messageError, setMessageError] = useState("");
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => submitRegister(data)

  const submitRegister = async (data) => {
    try {
      setMessageError("");

      const id = "639be1d1289c2e72639b9538"
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWJlMWQxMjg5YzJlNzI2MzliOTUzOCIsInJvbGUiOiJjb21wYW55IiwiaWF0IjoxNjcxMjYwMDA3LCJleHAiOjE2NzEzNDY0MDd9.DcWfFIPUU5vyyrhSQ6AQLTYmrm8PNlgETTtmzQOExBU"


      
      console.log(data);
/*       const { name, topic, timeStart, timeEnd, cost, capacity, description } = data */
      const response = await createEvent( data, token )
      const dataJson = await response.json()
      console.log(response)
      console.log(dataJson)

      if (response.status === 200) {
        router.push(`/company/events?id=${response.user}&token=${response.token}`)
        return
    }
    setMessageError("Ya existe un usuario con este correo")

    } catch (error) {
      console.log('Error: ', error)
      setMessageError("Ops ocurrió un error")
    }
  } 





  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        "w-[680px] rounded-[16px] border-2 border-blue-sky-50 shadow-xl p-5 flex flex-col")}>
      <article>
        <h1 className={clsx(
            "mt-[13px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px] font-medium")}>
            Datos del evento
        </h1>
      </article>
      <article>
        <article className="inline-block">
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block mt-1")}>
              NOMBRE DE TU EVENTO
          </label>
          <input
            id="username"
            placeholder="Ingresar dato*"
            {...register("name")}
            className={clsx(
              "mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline")}/>
          <p className="text-red-400 text-[10px] ml-1">{errors.name?.message}</p>
        </article>
        <article className="inline-block m-4">
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-2")}>
              TIPO DE EVENTO / TEMÁTICA
          </label>
          <input
            id="username"
            placeholder="Elige una temática*"
            {...register("topic")}
            className={clsx(
              "mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline")}/>
          <p className="text-red-400 text-[10px] ml-1">{errors.topic?.message}</p>
        </article>
        
 
        <div className="inline-flex">
          <div>
            <article className="w-[300px] h-[100px]">
              <label
                className={clsx(
                  "text-[10px] font-montserrat font-medium text-blue-gray-500",
                  "block ml-1 mt-2")}>
                  DESCRIPCIÓN DE TU EVENTO
              </label>
              <input
                id="username"
                placeholder="Ingresa una descripción*"
                {...register("description")}
                className={clsx(
                  "mt-[8px] appearance-none border w-[300px] h-[100px]",
                  "rounded-lg py-2 px-3 text-gray-700",
                  "bg-[#F6F9FF] hover:border-violet-700 border-2",
                  "focus:outline-none focus:shadow-outline")}/>
              <p className="text-red-400 text-[10px] ml-1">{errors.description?.message}</p>
            </article>
          </div>
        </div>

        <div className="inline-flex ml-4">
          <div>
            <article className="w-[300px] h-[100px]">
              <label
                className={clsx(
                  "text-[10px] font-montserrat font-medium text-blue-gray-500",
                  "block ml-1 mt-2")}>
                  IMAGEN DEL EVENTO
              </label>
              <div className="mt-[8px] appearance-none border w-[300px] h-[100px] ounded-lg  text-gray-700 bg-[#F6F9FF] hover:border-violet-700 rounded-lg focus:outline-none focus:shadow-outline">
                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-blue-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className="w-8 h-10  text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Haga Click para cargar</span> o arrastrar y soltar</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input 
                    id="dropzone-file" 
                    type="file" 
                    className="hidden"/>
                </label>
              </div> 
{/*               <p className="text-red-400 text-[10px] ml-1">{errors.description?.message}</p> */}
            </article>
          </div>
        </div>

        <article>
          <h2
            className={clsx(
              "mt-[50px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px] font-medium")}>
              Horario del evento
          </h2>
        </article>
        <div className="inline-block">
          <article>
            <label
              className={clsx(
                "text-[10px] font-montserrat font-medium text-blue-gray-500",
                "block ml-1 mt-1")}>
                FECHA DE INICIO
            </label>
            <input
              id="username"
              type="datetime-local"
              placeholder="dd/mm/aaaa*"
              {...register("dateStart")}
              className={clsx(
                "mt-[8px] appearance-none border w-[300px] h-[40px]",
                "rounded-lg py-2 px-3 text-gray-700",
                "bg-[#F6F9FF] hover:border-violet-700 border-2",
                "focus:outline-none focus:shadow-outline")}/>
            <p className="text-red-400 text-[10px] ml-1">{errors.dateStart?.message}</p>
          </article>
        </div>
        <article className="m-4 inline-block">
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-1")}>
              FECHA DE FIN
          </label>
          <input
            id="username"
            placeholder="dd/mm/aaaa*"
            type="datetime-local"
            {...register("dateEnd")}
            className={clsx(
              "mt-[8px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline")}/>
          <p className="text-red-400 text-[10px] ml-1">{errors.dateEnd?.message}</p>
        </article>


        <article>
          <h2 className={clsx(
              "mt-[20px] text-[20px] font-montserrat text-blue-gray-900 max-lg:ml-[3px] font-medium mb-5")}>
              Costo del evento
          </h2>
        </article>

        <section className="inline-flex">
          <article className="flex w-[300px] justify-between items-center">
          <input 
            name="costo" 
            type="radio" 
            value="true"             
            {...register("haveCost")} />
          <label> Sin costo </label>
          <input className="mr-2" 
            name="costo" 
            type="radio" 
            value="false" 
            {...register("haveCost")} />
          <label className="mr-8">Con costo </label>

{/*             <p  className="text-red-400 text-[10px] ml-1">{errors.timeEnd?.message}</p> */}
          </article>
          <article className="flex items-center">
            <label
              className={clsx(
                "block ml-5")}>
                Precio:
            </label>
            <input
              type="number"
              placeholder="$ 00.00 MXN*"
              {...register("cost")}
              className={clsx(
                "appearance-none border w-[226px] h-[40px]",
                "rounded-lg py-2 px-3 text-gray-700 ml-4",
                "bg-[#F6F9FF] hover:border-violet-700 border-2",
                "focus:outline-none focus:shadow-outline")}/>
          </article>
        </section>

        <article>
          <label
            className={clsx(
              "text-[10px] font-montserrat font-medium text-blue-gray-500",
              "block ml-1 mt-2")}>
              AFORO
          </label>
          <input
            id="username"
            type="number"
            placeholder="000 asistentes*"
            {...register("capacity")}
            className={clsx(
              "shadow mt-[12px] appearance-none border w-[300px] h-[40px]",
              "rounded-lg py-2 px-3 text-gray-700",
              "bg-[#F6F9FF] hover:border-violet-700 border-2",
              "focus:outline-none focus:shadow-outline")}/>
          <p className="text-red-400 text-[10px] ml-1">{errors.capacity?.message}</p>
        </article>
      </article>
      <article className={clsx("mt-3 flex justify-between")}>
       <button
          type="submit"
          className={clsx(" w-[250px] h-[45px] lgbtiq-grad-bg rounded-lg  max-lg:mt-[10px] text-white font-montserrat m-auto")}>
          PUBLICAR EVENTO
        </button>
      </article>
    </form>
  )
}


