import { FilterLists } from "./interfaces"

export const fetchGames = async (
  searchInput: string,
  categories: FilterLists[],
  mechanics: FilterLists[]
) => {
  const catNames = categories.map((cat) => cat.id).join(",")
  const mechNames = mechanics.map((mech) => mech.id).join(",")
  try {
    const response = await fetch(
      `https://api.boardgameatlas.com/api/search?${
        searchInput && `&name=${searchInput}`
      }${catNames && `&categories=${catNames}`}${
        mechNames && `&mechanics=${mechNames}`
      }&client_id=zuMwyCtcvF`
    )
    return response.json()
  } catch (error) {
    return error
  }
}

export const loginFetch = async (username: string, password: string) => {
  try {
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,

      })
    })
    return response.json()
  } catch (error) {
    console.log(error)
    return error
  }
}


export const registerFetch = async (username: string, password: string) => {
  try {
    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,

      })
    })
    return response.json()
  } catch (error) {
    console.log(error)
    return error
  }
}

export const fetchCategoriesLists = async () => {
  try {
    const response = await fetch("http://localhost:8000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return response.json()
  } catch (error) {
    return error
  }
}

export const fetchMechanicsLists = async () => {
  try {
    const response = await fetch("http://localhost:8000/mechanics", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return response.json()
  } catch (error) {
    return error
  }
}
