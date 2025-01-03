export class Streamings {
    constructor(
        public adult?: boolean,
        public backdrop_path?: string,
        public id?: number,
        public name?: string,
        public title?: string,
        public overview?: string,
        public poster_path?: string,
        public media_type?: string,
        public genres?: Genre[],
        public vote_average?: number,
        public runtime?: number,
        public number_of_episodes?: number,
        public number_of_seasons?: number,
        public videos?: Videos,
        public profile_path?: string
    ) { }
}

class Videos {
    constructor(
        public results: [
            {
                key?: string,
                type?: string,
                official?: boolean,
            }
        ]
    ) { }
}

class Genre {
    constructor(
        public id?: number,
        public name?: string
    ) { }
}