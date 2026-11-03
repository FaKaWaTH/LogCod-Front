export interface Thread {
    title: string;
    href?: string;
    category: string;
    time: string;
    comments: number;
    excerpt: string;
}

export interface User {
    username: string;
    firstName: string;
    name: string;
    initials: string;
    bio: string;
    highlight: string;
    bioEnd: string;
    website: { label: string; url: string };
    location: string;
    joined: string;
    threadCount: number;
    isFriend: boolean;
    publicThreads: Thread[];
    privateThreads: Thread[];
    publicCount: number;
    privateCount: number;
}
