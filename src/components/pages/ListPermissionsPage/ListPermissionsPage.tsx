import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPermissions } from '../../../services/permissionService';
import { Permission } from '../../../types/permissions';
import './ListPermissionsPage.scss';

const ListPermissionsPage: React.FC = () => {
    const [permissions, setPermissions] = useState<Permission[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllPermissions()
            .then(res => setPermissions(res.data))
            .catch(err => console.error('Error al obtener permisos', err));
    }, []);

    return (
        <div className="list-permissions-page">
            <h2>Permisos registrados</h2>
            <table className="permissions-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Tipo</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {permissions.map(permission => (
                    <tr key={permission.id}>
                        <td>{permission.id}</td>
                        <td>{permission.name}</td>
                        <td>{permission.lastName}</td>
                        <td>{permission.permissionType?.description ?? permission.permissionTypeId}</td>
                        <td>{new Date(permission.permissionDate).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => navigate(`/permissions/edit/${permission.id}`)}>Editar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListPermissionsPage;
