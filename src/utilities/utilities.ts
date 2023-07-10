import { Game } from "./interfaces"

export const cleanGames = (games: Game[]) => {
  let cleanedGames = games.map((game) => {
    return {
      id: game.id,
      name: game.name,
      images: {
        large: game.images.large,
        small: game.images.small,
        thumb: game.images.thumb,
        medium: game.images.medium,
        original: game.images.original,
      },
    }
  })
  return cleanedGames
}
