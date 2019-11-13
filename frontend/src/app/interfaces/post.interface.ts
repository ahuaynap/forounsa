export interface Post {
    _id?: string;
    name: string;
    description: string;
    idCourse?: string;
    idUser?: string;
    views?: number;
    userName?: string;
    likes?: number;
    fileUrl?: string;
    timestamp?: Date;
    state?: string;

}
