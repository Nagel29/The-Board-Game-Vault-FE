import { searchGames } from "./utilities/apiCalls"
import { useState } from "react"
import Form from "./Form"

const FindGames = () => {
  const [foundGames, setFoundGames] = useState()

  return (
    <div>
      <Form />
    </div>
  )
}

export default FindGames
