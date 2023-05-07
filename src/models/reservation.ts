import { Course } from "./course";
import { User } from "./user";

export interface Reservation {
    id: number;
    user: User;
    course: Course;
}