import { useState, useEffect } from "react"
import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Slider from "@mui/material/Slider"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import CheckedDropdown from "./CheckedDropdown"
import { mechanics, categories } from './utilities/data'

const Form = ({
  updateSearchedGames,
}: {
  updateSearchedGames: (searchInput: string) => void
}) => {
  const [searchInput, setSearchInput] = useState<string>("")
  const [rating, setRating] = useState<number>(0)

  const handleRatingChange = (e: any) => {
    setRating(e.target.value)
  }

  const handleSearchInput = (e: any) => {
    setSearchInput(e.target.value)
  }

  useEffect(() => {
    updateSearchedGames(searchInput)
  }, [searchInput])

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
          <Box sx={{ width: 200 }}>
            <Typography sx={{ m: "0 0 2em 0" }}>User Rating</Typography>
            <Slider
              aria-label="Always visible"
              value={rating}
              valueLabelFormat={`${rating} or higher`}
              step={0.5}
              valueLabelDisplay="on"
              min={0}
              max={5}
              onChange={handleRatingChange}
            />
          </Box>
          <CheckedDropdown list={categories} name='Categories'/>
          <CheckedDropdown list={mechanics} name='Mechanics'/>
        </Box>
      </Box>
    </Container>
  )
}

export default Form
