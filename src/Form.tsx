import { useState, useEffect } from "react"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Slider from "@mui/material/Slider"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import CheckedDropdown from "./CheckedDropdown"
import { fetchCategoriesLists, fetchMechanicsLists } from "./utilities/apiCalls"
import { SelectChangeEvent } from "@mui/material/Select"
import { FilterLists } from "./utilities/interfaces"

const Form = ({
  updateSearchedGames,
}: {
  updateSearchedGames: (searchInput: string, categories: string[], mechanics: string[]) => void
}) => {
  const [searchInput, setSearchInput] = useState<string>("")
  const [rating, setRating] = useState<number>(0)
  const [categories, setCategories] = useState<string[]>([])
  const [mechanics, setMechanics] = useState<string[]>([])
  const [categoriesList, setCategoriesList] = useState<FilterLists[]>([])
  const [mechanicsList, setMechanicsList] = useState<FilterLists[]>([])

  const handleRatingChange = (e: any) => {
    setRating(e.target.value)
  }

  const handleSearchInput = (e: any) => {
    setSearchInput(e.target.value)
  }

  const handleCategoriesChange = (event: SelectChangeEvent<typeof categories>) => {
    setCategories(typeof event.target.value === "string" ? event.target.value.split(",") : event.target.value)
  }

  const handleMechanicsChange = (event: SelectChangeEvent<typeof mechanics>) => {
    setMechanics(typeof event.target.value === "string" ? event.target.value.split(",") : event.target.value)
  }

  useEffect(() => {
    updateSearchedGames(searchInput, categories, mechanics)
  }, [searchInput, categories, mechanics])

  const getLists = async () => {
    let categories = await fetchCategoriesLists()
    let mechanics = await fetchMechanicsLists()
    setCategoriesList(categories)
    setMechanicsList(mechanics)
  }

  useEffect(() => {
    getLists()
  },[])

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        left: "0",
        top: "0",
        mt: 10,
      }}
      maxWidth={false}
    >
      <TextField
        sx={{
          input: {
            "&::placeholder": {
              color: "white",
            },
            "&:hover": {
              border: "white 1px solid",
              borderRadius: "3px",
              zIndex: 1,
            },
            "&:focus": {
              border: "white 2px solid",
              borderRadius: "3px",
              zIndex: 1,
            },
            color: "white",
            border: "white 1px solid",
            borderRadius: "3px",
          },
        }}
        placeholder="Search by name"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <Box sx={{backgroundColor: ''}}>
        <Typography sx={{ m: "0 0 .5em 0" }}>Filters</Typography>
        <Box sx={{ display: "flex", flexDirection: "space-around" }}>
          <CheckedDropdown filterState={categories} handleChange={handleCategoriesChange} list={categoriesList} name='Categories'/>
          <CheckedDropdown filterState={mechanics} handleChange={handleMechanicsChange} list={mechanicsList} name='Mechanics'/>
        </Box>
      </Box>
    </Container>
  )
}

export default Form
