export interface FilterLists {
  id: string,
  name: string,
  url: string
}

export interface Game {
  id: string,
  name: string,
  images: {
    large: string,
    small: string,
    thumb: string,
    medium: string,
    original: string,
  }
}