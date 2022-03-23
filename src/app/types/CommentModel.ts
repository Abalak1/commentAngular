export interface UserComment {
  id: Number;
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

type Reply = Omit<UserComment, 'replies'> & { replyingTo: string };
