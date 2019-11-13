
export interface Course {
    _id?: string;
    name: string;
    description: string;
    idCareer: string;
    prerequisites: string[];
    views: number;
    likes: number;
    state: string;

}
