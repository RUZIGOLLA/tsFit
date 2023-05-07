import { Role } from "./role";

export interface User { 
    id: number;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    role: Role;
    birthdate: Date;
    sexe: string;
    subscribed: boolean;

    // cart: Session | ;
}