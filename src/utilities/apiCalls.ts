import { FilterLists } from './interfaces'

export const fetchGames = async (searchInput: string, categories: FilterLists[], mechanics: FilterLists[]) => {
  try {
    const response = await fetch(
      `https://api.boardgameatlas.com/api/search?name=${searchInput}&client_id=zuMwyCtcvF`
    )
    return response.json()
  } catch (error) {
    return error
  }
}

export const fetchCategoriesLists = async () => {
  try {
    const response = await fetch(
      'http://localhost:8000/categories',{
      method: 'GET',
      headers: {
        'Content-Type': 'application.json',
      },
    })
    return response.json()
  } catch (error) {
    return error
  }
}

export const fetchMechanicsLists = async () => {
  try {
    const response = await fetch(
      'http://localhost:8000/mechanics',{
        method: 'GET',
        headers: {
          'Content-Type': 'application.json',
        },
      })
    return response.json()
  } catch (error) {
    return error
  }
}