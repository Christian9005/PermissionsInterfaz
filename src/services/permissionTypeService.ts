import axios from 'axios';
import { PermissionType } from '../types/permissions';

const api = axios.create({
    baseURL: 'https://localhost:7071/api/PermissionTypes',
});

export const getAllPermissionTypes = () => {
    return api.get<PermissionType[]>('/');
};