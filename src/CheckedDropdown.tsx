import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import ListItemText from "@mui/material/ListItemText"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Checkbox from "@mui/material/Checkbox"
import { useState } from "react"

const CheckedDropdown = ({list, name}: {list:{id: string, name: string, url: string}[], name: string}) => {
  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }

  const [filter, setFilter] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof filter>) => {
    const {
      target: { value },
    } = event
    setFilter(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    )
  }

  return (
    <div>
      <FormControl sx={{ ml: 4, width: 300, border: '1px solid white'}}>
        <InputLabel id="demo-multiple-checkbox-label" sx={{ color: 'white'}}>{name}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={filter}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {list.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              <Checkbox checked={filter.indexOf(item.name) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default CheckedDropdown