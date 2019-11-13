export interface Comment {
    id?: number;
    description: string;
    idPost?: string;
    idUser?: string;
    userName?: string;
    likes?: number;
    fileUrl?: string;
    timestamp?: Date;
    state?: string;
}
