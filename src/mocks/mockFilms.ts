import { Film, FilmFullDescription, FilmPreview } from '@/types/films';

const reservoirDog: Film = {
    id: 'R_D',
    name: 'Reservoir Dogs',
    releaseYear: 1992,
    posterUrl: 'https://res.cloudinary.com/djlynoeio/image/upload/v1649708947/vue/ReservoirDogs.png',
    posterAlt: 'reservoir_dogs',
    shortDescription: 'Oscar winning movie',
};

const jackieBrown: Film = {
    id: 'J_B',
    name: 'Jackie Brown',
    releaseYear: 1997,
    posterUrl: 'https://res.cloudinary.com/djlynoeio/image/upload/v1649937757/vue/JackieBrown.png',
    posterAlt: 'jackie_brown',
    shortDescription: 'Action & Adventure',
};

const pulpFiction: Film = {
    id: 'P_F',
    name: 'Pulp Fiction',
    releaseYear: 1994,
    posterUrl: 'https://res.cloudinary.com/djlynoeio/image/upload/v1649938198/vue/PulpFiction.png',
    posterAlt: 'pulp_fiction',
    shortDescription: 'Oscar winning movie',
};

const killBillVol1: Film = {
    id: 'K_B1',
    name: 'Kill Bill: Vol 1',
    releaseYear: 2003,
    posterUrl: 'https://res.cloudinary.com/djlynoeio/image/upload/v1649938206/vue/KillBill.png',
    posterAlt: 'kill_bill1',
    shortDescription: 'Action & Adventure',
};

const killBillVol2: Film = {
    id: 'K_B2',
    name: 'Kill Bill: Vol 2',
    releaseYear: 2004,
    posterUrl: 'https://res.cloudinary.com/djlynoeio/image/upload/v1649938205/vue/KillBill2.png',
    posterAlt: 'kill_bill2',
    shortDescription: 'Action & Adventure',
};

export const shortFilmsDescription: FilmPreview[] = [
    reservoirDog,
    jackieBrown,
    pulpFiction,
    killBillVol1,
    killBillVol2,
];

export const fullFilmsDescription: FilmFullDescription[] = [
    {
        ...reservoirDog,
        runtime: 90,
        rating: 4.7,
        fullDescription:
            ' A group of thieves assemble to pull of the perfect diamond heist. It turns into a bloody ambush when one\n' +
            "                of the men turns out to be a police informer. As the group begins to question each other's guilt, the\n" +
            '                heightening tensions threaten to explode the situation before the police step in.',
    },
    {
        ...jackieBrown,
        runtime: 115,
        rating: 4,
        fullDescription:
            'A flight attendant with a criminal past gets nabbed by the FBI for smuggling. Under pressure to become an informant against the drug dealer she works for, she must find a way to secure her future without getting killed.',
    },
    {
        ...pulpFiction,
        runtime: 180,
        rating: 5,
        fullDescription:
            'Pulp Fiction is a 1994 American black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
    },
    {
        ...killBillVol1,
        runtime: 150,
        rating: 4.2,
        fullDescription:
            'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.',
    },
    {
        ...killBillVol2,
        runtime: 160,
        rating: 4.6,
        fullDescription:
            'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.',
    },
];
