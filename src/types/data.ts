interface Origin {
    name: string;
    url: string;
}

interface CharacterLocation {
    name: string;
    url: string;
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}
