import React, { useEffect, useState } from 'react';
import { createPermission } from '../../../services/permissionService';
import { Permission, PermissionType } from '../../../types/permissions';
import './CreatePermissionPage.scss';
import {getAllPermissionTypes} from "../../../services/permissionTypeService";

const CreatePermissionPage = () => {
    const [permissionTypes, setPermissionTypes] = useState<PermissionType[]>([]);
    const [formData, setFormData] = useState<Omit<Permission, 'id'>>({
        name: '',
        lastName: '',
        permissionTypeId: 0,
        permissionDate: new Date().toISOString().split('T')[0]  // yyyy-mm-dd
    });

    useEffect(() => {
        getAllPermissionTypes().then((res: { data: PermissionType[] }) => {
            setPermissionTypes(res.data);
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await createPermission(formData);
        alert(`Permiso creado con ID: ${response.data}`);
    };

    return (
        <div className="create-permission-page">
            <h2>Crear Permiso</h2>
            <form onSubmit={handleSubmit} className="form">
                <label>
                    Nombre:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>

                <label>
                    Apellido:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </label>

                <label>
                    Tipo de Permiso:
                    <select name="permissionTypeId" value={formData.permissionTypeId} onChange={handleChange} required>
                        <option value="">Seleccione uno</option>
                        {permissionTypes.map(type => (
                            <option key={type.id} value={type.id}>{type.description}</option>
                        ))}
                    </select>
                </label>

                <label>
                    Fecha:
                    <input type="date" name="permissionDate" value={formData.permissionDate} onChange={handleChange} required />
                </label>

                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default CreatePermissionPage;
