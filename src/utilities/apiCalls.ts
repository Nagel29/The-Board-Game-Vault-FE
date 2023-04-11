export const searchGames = async (searchInput: string) => {
  try {
    const response = await fetch(
      `https://api.boardgameatlas.com/api/search?name=${searchInput}&client_id=zuMwyCtcvF`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    return response.json()
  } catch (error) {
    return error
  }
}
