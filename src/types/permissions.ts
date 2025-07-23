export interface PermissionType {
    id: number;
    description: string;
}

export interface Permission {
    id: number;
    name: string;
    lastName: string;
    permissionTypeId: number;
    permissionDate: string;
    permissionType?: PermissionType;
}
