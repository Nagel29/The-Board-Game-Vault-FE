import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import ListItemText from "@mui/material/ListItemText"
import Select from "@mui/material/Select"
import Checkbox from "@mui/material/Checkbox"
import { FilterLists } from "./utilities/interfaces"

const CheckedDropdown = ({filterState, list, name, handleChange}: {filterState: FilterLists[], list: FilterLists[], name: string, handleChange: (event: any) => void}) => {
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
    <div>
      <FormControl sx={{ ml: 4, width: 300, border: '1px solid white'}}>
        <InputLabel id="demo-multiple-checkbox-label" sx={{ color: 'white'}}>{name}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={filterState}
          onChange={handleChange}
          input={<OutlinedInput label={name} />}
          renderValue={(selected) => selected.map(filter => filter.name).join(", ")}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: '25em',
                width: 250,
              },
            },
          }}
          sx={{ color: 'white'}}
        >
          {list.map((item) => (
            <MenuItem key={item.id} value={item}>
              <Checkbox checked={filterState.map(filter => filter.name).indexOf(item.name) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default CheckedDropdown