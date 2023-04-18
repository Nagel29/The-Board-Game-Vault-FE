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
  updateSearchedGames: (
    searchInput: string,
    categories: FilterLists[],
    mechanics: FilterLists[]
  ) => void
}) => {
  const [searchInput, setSearchInput] = useState<string>("")
  const [categories, setCategories] = useState<FilterLists[]>([])
  const [mechanics, setMechanics] = useState<FilterLists[]>([])
  const [categoriesList, setCategoriesList] = useState<FilterLists[]>([])
  const [mechanicsList, setMechanicsList] = useState<FilterLists[]>([])

  const handleSearchInput = (e: any) => {
    setSearchInput(e.target.value)
  }

  const handleCategoriesChange = (
    event: SelectChangeEvent<typeof categories>
  ) => {
    if (typeof event.target.value != "string") {
      console.log(event)
      setCategories(event.target.value)
    }
  }

  const handleMechanicsChange = (
    event: SelectChangeEvent<typeof mechanics>
  ) => {
    if (typeof event.target.value != "string") {
      setMechanics(event.target.value)
    }
  }

  useEffect(() => {
    updateSearchedGames(searchInput, categories, mechanics)
  }, [searchInput, categories, mechanics])

  const getLists = async () => {
    let tempCategoriesList = await fetchCategoriesLists()
    let tempMechanicsList = await fetchMechanicsLists()
    setCategoriesList(tempCategoriesList)
    setMechanicsList(tempMechanicsList)
  }

  useEffect(() => {
    getLists()
  }, [])

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        left: "0",
        top: "0",
        mt: 8,
        pt: 2,
        pb: 1,
        backgroundColor: 'white'
      }}
      maxWidth={false}
    >
      <TextField
        sx={{
          input: {
            "&::placeholder": {
              color: "black",
            },
            "&:hover": {
              border: "black 1px solid",
              borderRadius: "3px",
              zIndex: 1,
            },
            "&:focus": {
              border: "black 2px solid",
              borderRadius: "3px",
              zIndex: 1,
            },
            color: "black",
            borderRadius: "3px",
          },
        }}
        placeholder="Search by name"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <Box sx={{ backgroundColor: "" }}>
        <Typography sx={{ m: "0 0 .5em 0" }}>Filters</Typography>
        <Box sx={{ display: "flex", flexDirection: "space-around" }}>
          <CheckedDropdown
            filterState={categories}
            handleChange={handleCategoriesChange}
            list={categoriesList}
            name="Categories"
          />
          <CheckedDropdown
            filterState={mechanics}
            handleChange={handleMechanicsChange}
            list={mechanicsList}
            name="Mechanics"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Form
