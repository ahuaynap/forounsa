
export interface Course {
    id?: number;
    name: string;
    credit: number,
    semester: number,
    description: string;
    idCareer: string;
    idCourse: string,
    idPrerequisite: string[];
    views: number;
    likes: number;
    state: string;

}
