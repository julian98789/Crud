import { useState, useEffect } from "react";
import UpdateUserForm from "../form/updateUser";
import NuevoUsuario from "../form/newUser";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showNewUserForm, setShowNewUserForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUsers(data.result);
    };

    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userId)
    }

    await fetch(`/api/user/${userId}`, options);
  };

  const handleUpdateClick = (user) => {
    setSelectedUser(user);
    setShowUpdateForm(true);
  };

  const handleNewUserClick = () => {
    setShowNewUserForm(true);
  };

  const handleFormClose = () => {
    setShowUpdateForm(false);
    setShowNewUserForm(false);
    setSelectedUser(null);
  };

  const handleFormUpdate = () => {
    setShowUpdateForm(false); // Cierra el formulario cuando se actualiza
    // Puedes agregar aquí cualquier lógica adicional después de la actualización si es necesario
  };

  return (
    <div className="flex ml-48 items-center h-screen">
      <div className={`max-w-lg ${showUpdateForm || showNewUserForm ? 'hidden' : ''}`}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contraseña
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actualizar
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nuevo Usuario
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.nombre}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.correo}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.contraseña}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleUpdateClick(user)} className="text-sm text-gray-900">Actualizar</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={handleNewUserClick} className="text-sm text-gray-900">Nuevo Usuario</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => deleteUser(user.id)} className="text-sm text-gray-900 ml-2">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showUpdateForm && (
        <UpdateUserForm user={selectedUser} onClose={handleFormClose} onUpdate={handleFormUpdate} />
      )}
      {showNewUserForm && (
        <NuevoUsuario onClose={handleFormClose} />
      )}
    </div>
  );
}

export default Table;
