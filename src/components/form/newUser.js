import { useForm } from "react-hook-form";

const NuevoUsuario = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset // Método para limpiar el formulario
    } = useForm();

    const enviarDatos = async (dataUser) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUser)
        };

        await fetch("/api/user", options)
            .then(res => res.json())
    };

    const handleVolver = () => {
        window.location.href = "/";
    };

    return (
        <div className="max-w-md mx-auto mt-10 flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit(enviarDatos)} className="space-y-6">
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">
                        Nombre
                    </label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        {...register("nombre", { required: true })}
                        className={`mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ${errors.nombre ? 'border-red-500' : 'text-black'}`}
                    />
                    {errors.nombre && <p className="text-red-500 text-xs mt-1">Este campo es requerido</p>}
                </div>
                <div>
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-300">
                        Correo
                    </label>
                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        {...register("correo", { required: true })}
                        className={`mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ${errors.correo ? 'border-red-500' : 'text-black'}`}
                    />
                    {errors.correo && <p className="text-red-500 text-xs mt-1">Este campo es requerido</p>}
                </div>
                <div>
                    <label htmlFor="contraseña" className="block text-sm font-medium text-gray-300">
                        Contraseña
                    </label>
                    <input
                        id="contraseña"
                        name="contraseña"
                        type="password"
                        {...register("contraseña", { required: true })}
                        className={`mt-1 p-2 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ${errors.contraseña ? 'border-red-500' : 'text-black'}`}
                    />
                    {errors.contraseña && <p className="text-red-500 text-xs mt-1">Este campo es requerido</p>}
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Registrar
                    </button>
                </div>
                <div>
                    <button onClick={handleVolver} className="w-full flex justify-center py-2  px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Volver
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NuevoUsuario;
