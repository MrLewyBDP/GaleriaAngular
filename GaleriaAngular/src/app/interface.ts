export interface Obiekt {
    Podzial: string[],
    zdjeciaPodzial: string[],
    podPodzial:PodObiekt[]
}

export interface PodObiekt {
    podzial: number,
    nazwa: string,
    zdjecie: string,
    opis: string
}