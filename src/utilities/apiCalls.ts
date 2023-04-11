export const fetchGames = async (searchInput: string) => {
  try {
    const response = await fetch(
      `https://api.boardgameatlas.com/api/search?name=${searchInput}&client_id=zuMwyCtcvF`
    )
    return await response.json()
  } catch (error) {
    return error
  }
}
