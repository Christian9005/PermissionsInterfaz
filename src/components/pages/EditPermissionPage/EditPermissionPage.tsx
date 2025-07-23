import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPermissionById, updatePermission } from '../../../services/permissionService';
import { Permission, PermissionType } from '../../../types/permissions';
import './EditPermissionPage.scss';
import {getAllPermissionTypes} from "../../../services/permissionTypeService";

const EditPermissionPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Permission | null>(null);
    const [permissionTypes, setPermissionTypes] = useState<PermissionType[]>([]);

    useEffect(() => {
        if (!id) return;

        getPermissionById(Number(id)).then(res => setFormData(res.data));
        getAllPermissionTypes().then(res => setPermissionTypes(res.data));
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => prev ? { ...prev, [name]: value } : prev);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData) return;

        await updatePermission(formData.id, formData);
        alert('Permiso actualizado');
        navigate('/permissions');
    };

    if (!formData) return <p>Cargando datos...</p>;

    return (
        <div className="edit-permission-page">
            <h2>Editar Permiso</h2>
            <form onSubmit={handleSubmit} className="form">
                <label className="form__label">
                    Nombre:
                    <input className="form__input" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>

                <label className="form__label">
                    Apellido:
                    <input className="form__input" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </label>

                <label className="form__label">
                    Tipo de Permiso:
                    <select className="form__select" name="permissionTypeId" value={formData.permissionTypeId} onChange={handleChange} required>
                        <option value="">Seleccione uno</option>
                        {permissionTypes.map(type => (
                            <option key={type.id} value={type.id}>{type.description}</option>
                        ))}
                    </select>
                </label>

                <label className="form__label">
                    Fecha:
                    <input className="form__input" type="date" name="permissionDate" value={formData.permissionDate.slice(0, 10)} onChange={handleChange} required />
                </label>

                <button className="form__button" type="submit">Actualizar</button>
            </form>
        </div>
    );
};

export default EditPermissionPage;
