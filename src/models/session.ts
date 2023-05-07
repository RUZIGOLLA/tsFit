import { Course } from "./course";

export interface Session {
    id: number;
    name: string;
    description: string;
    course: Course;
    created_at: Date;
    updated_at: Date;
    start_at: Date;
    finish_at: Date;
}