
export interface Course {
    id?: number;
    name: string;
    description: string;
    idCareer: string;
    prerequisites: string[];
    views: number;
    likes: number;
    state: string;

}
