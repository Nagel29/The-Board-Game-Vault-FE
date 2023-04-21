import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import ListItemText from "@mui/material/ListItemText"
import Select from "@mui/material/Select"
import Checkbox from "@mui/material/Checkbox"
import { FilterLists } from "./utilities/interfaces"
import Box from "@mui/material/Box"

const CheckedDropdown = ({
  filterState,
  list,
  name,
  handleChange,
}: {
  filterState: FilterLists[]
  list: FilterLists[]
  name: string
  handleChange: (event: any) => void
}) => {
  // const ITEM_HEIGHT = 48
  // const ITEM_PADDING_TOP = 8
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250,
  //     },
  //   },
  // }

  // const [filterSelections, setFilterSelections] = useState<string[]>([])

  // const handleChange = (event: SelectChangeEvent<typeof filterSelections>) => {
  //   console.log(event.target)
  //   setFilterSelections(
  //     // On autofill we get a stringified value.
  //     typeof event.target.value === "string" ? event.target.value.split(",") : event.target.value
  //   )
  // }

  return (
    <Box sx={{ width: { xs: 200, md: 300 } }}>
      <FormControl
        sx={{ ml: 4, width: { xs: "90%", md: 275 }, m: { xs: 2, md: 0.5 } }}
      >
        <InputLabel id="demo-multiple-checkbox-label" sx={{ color: "black" }}>
          {name}
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={filterState}
          onChange={handleChange}
          input={<OutlinedInput label={name} />}
          renderValue={(selected) =>
            selected.map((filter) => filter.name).join(", ")
          }
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: "25em",
                width: 250,
              },
            },
          }}
          sx={{ color: "black", width: { xs: "auto", md: "auto" } }}
        >
          {list.map((item) => (
            <MenuItem key={item.id} value={item}>
              <Checkbox
                checked={
                  filterState.map((filter) => filter.name).indexOf(item.name) >
                  -1
                }
              />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default CheckedDropdown
