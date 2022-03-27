export interface UserComment {
  id: number;
  content: string;
  createdAt: String;
  score: String;
  user: User;
  username: string;
  replies: Reply[];
}

export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export type Reply = Omit<UserComment, 'replies'> & { replyingTo: string };
