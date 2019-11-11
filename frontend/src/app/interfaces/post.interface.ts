export interface Post {
    id?: number;
    name: string;
    description: string;
    idCourse: string;
    idUser: string;
    views: number;
    likes: number;
    fileUrl?: string;
    timestamp: Date;
    state: string;

}
