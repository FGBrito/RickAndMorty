export interface RootObject {
    info: Info;
    results: Result[];
}

export interface CharacterFilter {
    name?: string
    type?: string
    species?: string
    /**
     * 'Dead' | 'Alive' | 'unknown'
     */
    status?: string
    /**
     * 'Female' | 'Male' | 'Genderless' | 'unknown'
     */
    gender?: string
    page?: number
}

export interface Result {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Origin;
    image: string;
    episode: string[];
    url: string;
    created: string;
    isFavorite?: boolean;
}
interface Origin {
    name: string;
    url: string;
}
interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
}