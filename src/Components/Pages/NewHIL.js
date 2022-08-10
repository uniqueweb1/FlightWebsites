import React from "react";
import '../../App.css';
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import MenuItem from '@mui/material/MenuItem';

{/* label, check box and date variables*/}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function MX() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleNewChange = (newValue) => {
    setValue(newValue);
  };
{/*return all form input */}
    return(
      <div className="form-container">
      <FormControl>
        <div className="form-container-item">
      <div className="form-itemss">
      <span>Aircraft*</span>
        <TextField
         sx={{ m: 1, width: '25ch', outline:' 1px solid #000' ,borderRadius: '5px' }}
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
</div>
  

    
    <div className="form-itemss">
     <span>HIL Item No</span>
   <TextField
   sx={{ m: 1, width: '25ch',outline:' 1px solid #000' ,borderRadius: '5px'}}
          required
          id="outlined-required"
          label="Hil Item No"
        />

</div>
</div>

<div className="form-itemss">
   <span>MEL Item No</span>
   <TextField
    sx={{ m: 1, width: '25ch',outline:' 1px solid #000' ,borderRadius: '5px' }}
          required
          id="outlined-required"
          label="Supplier"
        />

   </div>
     <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        
      <div className="form-container-item">
<div className="form-itemss">
<span>Date*</span>

  {/* date code handle */}
  <DesktopDatePicker
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} />}
        />

</div>


<div className="form-itemss">
   <span>Due date*</span>
    {/* date code handle */}
    <DesktopDatePicker
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} />}
        />
   </div>
   </div> 
  
   <div className="form-container-item">
   <div className="form-itemss">
        <span>Discrepancy description*</span>
        <TextareaAutosize
  aria-label="empty textarea"
  minRows={4}
  minColumns={5}
  placeholder="Notes" 
      sx={{ m: 1, minWidth: '300px' ,outline:' 1px solid #000' ,borderRadius: '5px'}}
          required
          id="outlined-required"
          
        />
      </div>
      <div className="form-itemss">
        <span> Flight limitation</span>
      
   <FormControlLabel
          value="yes"
          control={<Checkbox />}
          label="Yes"
          labelPlacement="end"
        />
      
   <FormControlLabel
          value="no"
          control={<Checkbox />}
          label="No"
          labelPlacement="end"
        />
         
   <FormControlLabel
          value="dont know"
          control={<Checkbox />}
          label="Dont know "
          labelPlacement="end"
        />
          
      </div>
      </div>
        
     
      <div className="form-itemss">
        <span>Limitations</span>
        <TextareaAutosize
  aria-label="empty textarea"
  minRows={4}
  minColumns={5}
  placeholder="Limitations" 
      sx={{ m: 1, minWidth: '300px' ,outline:' 1px solid #000' ,borderRadius: '5px'}}
          required
          id="outlined-required"
          
        />
      </div>
      <div className="form-container-item">
<div className="form-itemss">
<span>closed (corrected)</span>
      
      <FormControlLabel
             value="yes"
             control={<Checkbox />}
             label=""
             labelPlacement="end"
           />
 </div>

 <div className="form-itemss">
        <span>Date chr</span>
        <TextField
    sx={{ m: 1, width: '20ch',outline:' 1px solid #000' ,borderRadius: '5px' }}
          required
          id="outlined-required"
        />
        </div>
        </div>
        <div className="form-itemss">
        <span>Corrective Actions</span>
        <TextareaAutosize
  aria-label="empty textarea"
  minRows={4}
  minColumns={5}
  placeholder="corrective actions" 
      sx={{ m: 1, minWidth: '300px',outline:' 1px solid #000' ,borderRadius: '5px' }}
          required
          id="outlined-required"
          
        />
      </div>
      <div className="form-container-item">
      <div className="form-itemss">
        <span>P/N Off</span>
        <TextField
    sx={{ m: 1, width: '20ch',outline:' 1px solid #000' ,borderRadius: '5px' }}
          required
          id="pnOff"
        />
        </div>
             <div className="form-itemss">
        <span>S/N Off</span>
        <TextField
    sx={{ m: 1, width: '20ch' ,outline:' 1px solid #000' ,borderRadius: '5px'}}
          required
          id="snOff"
        />
        </div>
        </div>
        <div className="form-container-item">
        <div className="form-itemss">
        <span>P/N On</span>
        <TextField
    sx={{ m: 1, width: '20ch',outline:' 1px solid #000' ,borderRadius: '5px' }}
          required
          id="pnOn"
        />
        </div>
        <div className="form-itemss">
        <span>S/N On</span>
        <TextField
    sx={{ m: 1, width: '20ch' ,outline:' 1px solid #000' ,borderRadius: '5px'}}
          required
          id="snOn"
        />
        </div>
        </div>

        <Stack spacing={2}>
      <Button variant="contained" textAlign= "center">Save</Button>
    </Stack>
    </Stack>
 </LocalizationProvider>
   </FormControl>
   </div>
    );
}