import React from "react";
import '../../App.css'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TabItem from "../TabItem";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import PropTypes from 'prop-types'
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


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

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    tabValue: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function FleetDocumentSecond() {
  const [datevalue, setDateValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleNewChange = (newDateValue) => {
    setDateValue(newDateValue);
  };
  const [selection, setSelection] = React.useState('NONE');

  const handleSelectionChange = (selectionevent) => {
    setSelection(selectionevent.target.value);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <div className="form-container">
        <p>Reg No SP.IJKL</p>
 <FormControl>
 <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Documents" {...a11yProps(0)} />
            <Tab label="Cam" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

          {/*------tab1 items start----*/}
          <p className="send-notification">Send notification to
        <TextField
         sx={{ m: 1, width: '25ch' ,textAlign: 'start', margin: '0'}}
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
 {<TabItem />}

 <button className="mybtn-save">
<Stack spacing={2} direction="row">   
      <Button variant="contained">Update</Button>
    </Stack>
    </button>
           {/*------tab1 items end----*/}
</TabPanel>
{/*-----TAB 2 SECTION -----*/}
<TabPanel value={value} index={1}>
 <div className="form-containers">
  {/* Airframe start*/}
  <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="form-itemss1">
        <p className="span-head">Airframe</p>
<div>
   <span>Start Date</span>
   <MobileDatePicker
          required
          id="outlined-required"
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={datevalue}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} sx={{ m: 1, width: '8ch', borderRadius: '5px'}} />}
        />
        </div>   
        <div>
   <span>Start TAH</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div>  
        <div>
   <span>Start TAC</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div>  
        <div>
   <span>Remainder</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div>       
</div>
  {/* Airframe end*/}

  {/* Engine 1 begin*/}
<div className="form-itemss1">
    <div className="mygrid">
    <div className="gridview">
<p className="span-head">Engine 1</p>
<div className="griditems">serial number</div>
<div>
   <span>Start Date</span>
   <MobileDatePicker
          required
          id="outlined-required"
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={datevalue}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} sx={{ m: 1, width: '8ch', borderRadius: '5px'}} />}
        />
        </div> 
        <div>
   <span>Start TAH</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Start TAC</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Oil report period</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Remainder</span>
   <TextField
   sx={{ m: 1, width: '10ch' }}
    id="fullWidth" 
        />
        </div> 
    </div>
     {/* engine 1 end*/}

     {/* engine 2 begin*/}
    <div className="gridview">
<p className="span-head">Engine 2</p>
<div className="griditems">serial number</div>
<div>
   <span>Start Date</span>
   <MobileDatePicker
          required
          id="outlined-required"
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={datevalue}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} sx={{ m: 1, width: '8ch', borderRadius: '5px'}} />}
        />
        </div> 
        <div>
   <span>Start TAH</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Start TAC</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Oil report period</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Remainder</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
    </div>
         {/* engine 2 end*/}

         {/* engine 3  begin*/}  
    <div className="gridview">
<p className="span-head">Engine 3</p>
<div className="griditems">serial number</div>
<div>
   <span>Start Date</span>
   <MobileDatePicker
          required
          id="outlined-required"
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={datevalue}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} sx={{ m: 1, width: '8ch', borderRadius: '5px'}} />}
        />
        </div> 
        <div>
   <span>Start TAH</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Start TAC</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Oil report period</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Remainder</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
    </div>
      {/* engine 3 end*/}

        {/* engine 4 begin*/}
    <div className="gridview">
<p className="span-head">Engine 4</p>
<div className="griditems">serial number</div>
<div>
   <span>Start Date</span>
   <MobileDatePicker
          required
          id="outlined-required"
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={datevalue}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} sx={{ m: 1, width: '8ch', borderRadius: '5px'}} />}
        />
        </div> 
        <div>
   <span>Start TAH</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Start TAC</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Oil report period</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Remainder</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
    </div>
    </div>
    </div>
          {/* engine 4 end*/}

   {/* APU begin*/}
    <div className="form-itemss1">
     <div className="gridview">
<p className="span-head">APU?</p>
<div className="griditems">serial number</div>
<div>
   <span>Start Date</span>
   <MobileDatePicker
          required
          id="outlined-required"
          label="Date"
          inputFormat="MM/dd/yyyy"
          value={datevalue}
          onChange={handleNewChange}
          renderInput={(params) => <TextField {...params} sx={{ m: 1, width: '8ch', borderRadius: '5px'}} />}
        />
        </div> 
        <div>
   <span>Start TAH</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Start TAC</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Oil report period</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
        <div>
   <span>Remainder</span>
   <TextField
   sx={{ m: 1, width: '8ch' }}
    id="fullWidth" 
        />
        </div> 
    </div>
         {/* APU end*/}
</div>
</LocalizationProvider>

</div>
<button className="mybtn-save">
<Stack spacing={2} direction="row">   
      <Button variant="contained">Save</Button>
    </Stack>
    </button>
</TabPanel>
    </Box>
</FormControl>
        </div>
    )
}