import React from "react";
import '../../App.css';
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

export default function NewscheduledMaintenance() {
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
      <div className="form-items">
        <div className="form-itemss">
   <span>Name</span>
   <TextField
   sx={{ m: 1, width: '35ch' }}
   fullWidth label="Name"
    id="fullWidth"
    defaultValue="Enter necessary details"
        />
  </div>

  <div className="form-itemss">
   <FormGroup aria-label="position" row>
   <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Confirmed (cannot add flights)"
          labelPlacement="start"
        />
          </FormGroup>
     </div>

     <div className="form-itemss">
   <FormGroup aria-label="position" row>
   <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="AOG (?)"
          labelPlacement="start"
        />
          </FormGroup>
          </div>
    </div>
    <div className="form-container-item">
    <div className="form-container-items">
     <span>Work Order</span>
   <TextField
   sx={{ m: 1, width: '25ch' }}
          required
          id="outlined-required"
          label="Work Order"
        />

</div>
   <div className="form-container-items">
   <span>Supplier</span>
   <TextField
    sx={{ m: 1, width: '25ch' }}
          required
          id="outlined-required"
          label="Supplier"
        />

   </div>
   </div>
   <div>

 <div className="Aircraft">Aircraft</div>
   <div className="form-container-item">
   <div className="form-container-items">
    <span>Aircraft Type*</span>
        <TextField
         sx={{ m: 1, width: '25ch' }}
          id="outlined-select-currency"
          select
          label="Aircraft Type"
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
        <div className="form-container-items">
        <span>Aircraft*</span>
        <TextField
         sx={{ m: 1, width: '25ch' }}
          id="outlined-select-currency"
          select
          label="Aircraft"
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
        </div>
        <div>
   <span>Airport*</span>
   <TextField
    sx={{ m: 1, width: '35ch' }}
          required
          id="outlined-required"
          label="Airport"
        />

   </div>
   </div>

     <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
      <div className="Aircraft">Time Period</div>
        <div className="form-container-item1">
   <div className="time-period">
   <span>Start</span>
    {/* date code handle */}
   <DesktopDatePicker
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} />}
        />

<TimePicker
          label="Time"
          id="time"
          value={value}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </div>
        <div className="time-period">
   <span>End</span>
    {/* date code handle */}
   <DesktopDatePicker
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} />}
        />

<TimePicker
          label="Time"
          id="time"
          value={value}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </div>
        </div>
        <div className="cam-limit">
          <li className="li1">CAM limit</li>
          <li className="libtn"><button className="mybtn">check</button></li>
          </div>
      <div className="formcontainer-item">


      <div>
        <span>TAH</span>
      <TextField
      sx={{ m: 1, width: '15ch' }}
          required
          id="outlined-required"

        />
          <span>TAC</span>
      <TextField
      sx={{ m: 1, width: '15ch' }}
          required
          id="outlined-required"

        />
          <span>Date</span>
      <TextField
      sx={{ m: 1, width: '15ch' }}
          required
          id="outlined-required"

        />
      </div>
      </div>

 <div className="Aircraft">Notes</div>
      <div  className="formcontainer-item">
        <TextareaAutosize
  aria-label="empty textarea"
  minRows={3}
  placeholder="Notes"
      sx={{ m: 1, width: '15ch' }}
          required
          id="outlined-required"

        />

<div className=" pre-content">
  <p>(max. 4MB)</p>
 <Link to='/new-scheduled-maintenance' className='mylink'> Add new files </Link>
 </div>
 </div>
 <div className="Aircraft">Schedule Maintenance option</div>
  <div className="formcontainer-item">
    <div className="delete-conflit">
      <FormGroup>
   <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Delete aircraft from conflicting flights"
          labelPlacement="start"
        />
          </FormGroup>
          </div>
          <div>
            <p>Add reposition</p>
          </div>

        <Stack spacing={2} direction="row">
        <div className="delete-conflit">
      <Button variant="contained" align="center" backgroundColor="red">Update Scheduled Maintenance</Button>  <Button variant="contained" align="center">Delete</Button>
      </div>
    </Stack>
    </div>
    </Stack>
 </LocalizationProvider>

   </FormControl>
   </div>
    );
}