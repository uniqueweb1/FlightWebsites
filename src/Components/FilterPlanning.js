import React, { useState } from 'react'
import './Filter.css'
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import MenuItem from '@mui/material/MenuItem';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import TextField from '@mui/material/TextField';


const selections = [
  {
    value: 'NONE',
    label: 'none',
  },
  {
    value: 'NONE',
    label: 'none',
  },
  {
    value: 'NONE',
    label: 'none',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
// month selection
const months = [
  {
    value: 'JANUARY',
    label: 'January',
  },
  {
    value: 'FEBRUARY',
    label: 'February',
  },
  {
    value: 'MARCH',
    label: 'march',
  },
  {
    value: 'APRIL',
    label: 'April',
  },
  {
    value: 'MAY',
    label: 'May',
  },
  {
    value: 'JUNE',
    label: 'June',
  },
  {
    value: 'JULY',
    label: 'July',
  },
  {
    value: 'AUGUST',
    label: 'August',
  },
  {
    value: 'SEPTEMBER',
    label: 'September',
  },
  {
    value: 'OCTOBER',
    label: 'October',
  },
  {
    value: 'NOVEMBER',
    label: 'November',
  },
  {
    value: 'DECEMBER',
    label: 'December',
  },
];

// month selection

function FilterPlanning () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleNewChange = (newValue) => {
      setValue(newValue);
    };

    const [selection, setSelection] = React.useState('NONE');

    const handleSelectionChange = (selectionevent) => {
      setSelection(selectionevent.target.value);
    };
    const [month, setMonth] = React.useState('JANUARY');

    const handleMonthChange = (monthevent) => {
      setMonth(monthevent.target.value);
    };
    return(
        <>
  <p className='filter-sec-items' onClick={handleClick}>
            <i className={click? 'fas fa-times' : 'show-filter'}></i>
              show filter
          </p>
    
          <div className={click? 'filter-content active' : 'filter-item'}>
             <div className='mytable'>
              <div className='table-tab'>
                <h3>Earlier</h3>
                <h3>Now</h3>
                <h3>Later</h3>
                </div>
              <div className='table-tab-content'>
       
                  <p>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={2}>
    {/* date code handle */}

    <MobileDatePicker
          label="From"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleNewChange}
          renderInput={(params) => <TextField  sx={{ m: 1, width: '15ch' }} {...params} />}
          size="small"
        />
    </Stack>
 </LocalizationProvider>
                  </p>
                  <p>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={2}>
    {/* date code handle */}
 
    <MobileDatePicker
          label="To"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleNewChange}
          renderInput={(params) => <TextField  sx={{ m: 1, width: '15ch'}} {...params} />}
          size="small"
        />
    </Stack>
 </LocalizationProvider>
                  </p>
                  
                  <p>
                <FormControlLabel value="female" control={<Radio />} />
                </p>

                { /*column two begin*/}
             
              
                <p>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={2}>
    {/* date code handle */}
 
    <MobileDatePicker
          label="From"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleNewChange}
          renderInput={(params) => <TextField   sx={{ m: 1, width: '15ch'}} {...params} />}
          size="small"
        />
    </Stack>
 </LocalizationProvider>
                </p>
                  <p>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={2}>
    {/* date code handle */}

    <MobileDatePicker
          label="Days"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleNewChange}
          renderInput={(params) => <TextField  sx={{ m: 1, width: '15ch'}} {...params} />}
          size="small"
        />
    </Stack>
 </LocalizationProvider>
                  </p>
                  <p>
                <FormControlLabel value="female" control={<Radio />} />
                </p>
                {/* column 2 end */}

{/* column 3 start */}

          <p>
          <TextField
         sx={{ m: 1, width: '15ch'}}
          id="outlined-select-currency"
          label="Month"
          select
          value={month}
          onChange={handleMonthChange}
        >
          {months.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                  </p>

                  <p>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={2}>
    {/* date code handle */}
 
    <MobileDatePicker
          label="Year"
          inputFormat="yyyy"
          value={value}
          onChange={handleNewChange}
          renderInput={(params) => <TextField  sx={{ m: 1, width: '15ch'}} {...params} />}
          size="small"
        />
    </Stack>
 </LocalizationProvider>
                  </p>

                  <p>
                  <FormControlLabel value="female" control={<Radio />} />
                  </p>

{/* column 3 end */}
              </div>
              
              <div className='table-tab'>
                <h3>Aircraft</h3>
                </div>
                <div className='table-tab-content2'>
               
                  <p>Airport</p>
                <p>
                <TextField
         sx={{ m: 1, width: '15ch',textAlign: 'start'}}
          id="outlined-select-currency"
        size="small"
        >
          {selections.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField></p>
        <p>flight code</p>
                <p>
                <TextField
         sx={{ m: 1, width: '25ch',textAlign: 'start'}}
          id="outlined-select-currency"
          size="small"
        >
          {selections.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField></p>
        <p>Items per page</p>
                <p>
                <TextField
         sx={{ m: 1, width: '15ch',textAlign: 'start', margin: '0'}}
          id="outlined-select-currency"
          select
          value={selection}
          onChange={handleSelectionChange}
        size="small"
        >
          {selections.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField></p>
        <p style={{marginTop: '15px', float: 'right', color:'purple'}}>Toggle mode</p>
                  <Stack spacing={2} direction="row">
      <Button variant="contained" sx={{marginTop: '35px'}}>Show</Button>
    </Stack>
                  </div>
             </div>
          </div>

        </>
    );
}

export default FilterPlanning;