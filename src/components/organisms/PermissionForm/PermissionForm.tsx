import React, { useState } from 'react';
import { Permission, PermissionType } from '../../../types/permissions';
import Button from '../../atoms/Button/Button';
import './PermissionForm.scss';

interface Props {
    initialData?: Permission;
    permissionTypes: PermissionType[];
    onSubmit: (data: Omit<Permission, 'id'>) => void;
    submitText?: string;
}

const PermissionForm: React.FC<Props> = ({ initialData, permissionTypes, onSubmit, submitText = 'Guardar' }) => {
    const [name, setName] = useState(initialData?.name || '');
    const [lastName, setLastName] = useState(initialData?.lastName || '');
    const [permissionTypeId, setPermissionTypeId] = useState(initialData?.permissionTypeId || 0);
    const [permissionDate, setPermissionDate] = useState(initialData?.permissionDate?.slice(0, 10) || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, lastName, permissionTypeId, permissionDate });
    };

    return (
        <form className="permission-form" onSubmit={handleSubmit}>
            <label className="permission-form__label">
                Nombre
                <input
                    className="permission-form__input"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>

            <label className="permission-form__label">
                Apellido
                <input
                    className="permission-form__input"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                />
            </label>

            <label className="permission-form__label">
                Tipo de Permiso
                <select
                    className="permission-form__select"
                    value={permissionTypeId}
                    onChange={e => setPermissionTypeId(Number(e.target.value))}
                    required
                >
                    <option value="" disabled>
                        Seleccione un tipo
                    </option>
                    {permissionTypes.map(pt => (
                        <option key={pt.id} value={pt.id}>
                            {pt.description}
                        </option>
                    ))}
                </select>
            </label>

            <label className="permission-form__label">
                Fecha
                <input
                    className="permission-form__input"
                    type="date"
                    value={permissionDate}
                    onChange={e => setPermissionDate(e.target.value)}
                    required
                />
            </label>

            <Button type="submit">{submitText}</Button>
        </form>
    );
};

export default PermissionForm;
