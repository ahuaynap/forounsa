export interface Comment {
    _id?: string;
    description?: string;
    idPost?: string;
    idUser?: string;
    userName?: string;
    likes?: number;
    fileUrl?: string;
    timestamp?: Date;
    state?: string;
}
