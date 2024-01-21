export interface IApiResponse<T> {
    count: number,
    next: string,
    previous: null,
    results: T[]
}

export interface IRating {
    id: number,
    title: string,
    count: number,
    percent: number
}

export interface AddedByStatus {
    yet: number,
    owned: number,
    beaten: number,
    toplay: number,
    dropped: number,
    playing: number
}

export interface IParentPlatform {
    id: number,
    name: string,
    slug: string
}

export interface IGenre {
    id: number,
    name: string,
    slug: string,
    games_count: number,
    image_background: string
}

export interface ITag {
    id: number,
    name: string,
    slug: string,
    language: string,
    games_count: number,
    image_background: string
}

export interface IEsrbRating {
    id: number,
    name: string,
    slug: string
}

export interface IScreenShot {
    id: number,
    image: string
}

export interface IPlatform {
    platform: {
        id: number,
        name: string,
        slug: string,
        image: null,
        year_end: null,
        year_start: null,
        games_count: number,
        image_background: string
    },
    released_at: string,
    requirements_en: {
        minimum: string,
        recommended: string
    } | null,
    requirements_ru: null
}

export interface IStore {
    id: number,
    store: {
        id: number,
        name: string,
        slug: string,
        domain: string,
        games_count: number,
        image_background: string
    }
}
export interface IGame {
    id: number,
    slug: string,
    name: string,
    released: string,
    tba: boolean,
    background_image: string,
    rating: number,
    rating_top: number,
    ratings: IRating[],
    ratings_count: number,
    reviews_text_count: number,
    added: number,
    added_by_status: AddedByStatus,
    metacritic: number,
    playtime: number,
    suggestions_count: number,
    updated: string,
    user_game: null,
    reviews_count: number,
    saturated_color: string,
    dominant_color: string,
    platforms: IPlatform,
    parent_platforms: {
        platform:IParentPlatform
    }[],
    genres: IGenre[],
    stores: IStore[],
    clip: null,
    tags: ITag,
    esrb_rating: IEsrbRating,
    short_screenshots: IScreenShot
}