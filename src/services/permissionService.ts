import axios from 'axios';
import { Permission } from '../types/permissions';

const api = axios.create({
    baseURL: 'https://localhost:7071/api/Permissions',
});

export const getAllPermissions = () => api.get<Permission[]>('/');
export const getPermissionById = (id: number) => api.get<Permission>(`/${id}`);
export const createPermission = (data: Omit<Permission, 'id'>) => api.post<number>('/', data);
export const updatePermission = (id: number, data: Omit<Permission, 'id'>) => api.put<number>(`/${id}`, data);
