export interface Comment {
    description: string;
    idPost: string;
    idUser: string;
    likes: number;
    fileUrl: string;
    timestamp: Date;
    state: string;
}
