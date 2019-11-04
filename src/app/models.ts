export class Movie {
  name: string;
  director: string;
  poster: string;

  constructor(params: any) {
    Object.assign(this, params);
  }

}

export class MovieFromJson {
  name: string;
  director: string;
  poster: string;

  constructor(params: any) {
    Object.assign(this, params);
  }
}
