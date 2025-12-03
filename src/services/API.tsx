async function fetchAPI(url: string) {
    const res = await fetch(url);
    return await res.json();
}

export function getPokedex(pkmnCount: number = 151) {
    const url = `https://pokebuildapi.fr/api/v1/pokemon/limit/${pkmnCount}`;
    return fetchAPI(url);
}

export function getPokemon(pkmnNameorID: number | string) {
    const url = `https://pokebuildapi.fr/api/v1/pokemon/${pkmnNameorID}`;
    return fetchAPI(url);
}