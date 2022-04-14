import { Film, FilmShortDescription } from '@/types/films';

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
    releaseYear: 2006,
    posterUrl: 'https://res.cloudinary.com/djlynoeio/image/upload/v1649938205/vue/KillBill2.png',
    posterAlt: 'kill_bill2',
    shortDescription: 'Action & Adventure',
};

export const shortFilmsDescription: FilmShortDescription[] = [
    reservoirDog,
    jackieBrown,
    pulpFiction,
    killBillVol1,
    killBillVol2,
];
