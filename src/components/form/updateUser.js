import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const UpdateUserForm = ({ user }) => {
    const [formData, setFormData] = useState({
        nombre: user.nombre,
        correo: user.correo,
        contraseña: user.contraseña,
    });

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const enviarDatos = async (dataUser) => {
        const options = {
            method: 'PUT', // Cambiar a PUT para actualizar
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUser)
        };

        // Aquí puedes realizar la lógica de envío de datos, como hacer una solicitud fetch al servidor

        // Ejemplo:
        await fetch(`/api/user/${user.id}`, options)
            .then(res => res.json())
            .then(data => console.log(data)); // Maneja la respuesta del servidor según tu lógica
    };

    return (
        <div className="max-w-md mx-auto mt-10 flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit(enviarDatos)} className="space-y-6">
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">
                        Nombre
                    </label>
                    <input
                        {...register("nombre", { required: "Este espacio es requerido" })}
                        autoComplete="off"
                        id="nombre"
                        name="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
                    />
                    {errors.nombre && <span className="text-[#ff0000] text-xs">{errors.nombre.message}</span>}
                </div>
                <div>
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-300">
                        Correo
                    </label>
                    <input
                        {...register("correo", { required: "Este espacio es requerido" })}
                        autoComplete="off"
                        id="correo"
                        name="correo"
                        type="email"
                        value={formData.correo}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
                    />
                    {errors.correo && <span className="text-[#ff0000] text-xs">{errors.correo.message}</span>}
                </div>
                <div>
                    <label htmlFor="contraseña" className="block text-sm font-medium text-gray-300">
                        Contraseña
                    </label>
                    <input
                        {...register("contraseña", { required: "Este espacio es requerido" })}
                        autoComplete="off"
                        id="contraseña"
                        name="contraseña"
                        type="password"
                        value={formData.contraseña}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md text-black"
                    />
                    {errors.contraseña && <span className="text-[#ff0000] text-xs">{errors.contraseña.message}</span>}
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Actualizar
                    </button>
                    <button className="w-full flex justify-center py-2  px-4 mt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                       <a href='/'>Volver</a>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUserForm;
