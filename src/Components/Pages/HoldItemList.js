import React from "react";
import '../../App.css';
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Paper from '@mui/material/Paper';

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

function TablePaginationActions(props) {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      const theme = useTheme();
      const { count, page, rowsPerPage, onPageChange } = props;
    
     // label select variables//





 
      // handle first page button click
      const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
      };
    // handle goback button click
      const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
      };
    // handle next button click
      const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
      };
    // handle the last page button click
      const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
      };
   

      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
          <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="first page"
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton
            onClick={handleBackButtonClick}
            disabled={page === 0}
            aria-label="previous page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page"
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </Box>
      );
      
     
    }
    TablePaginationActions.propTypes = {
      count: PropTypes.number.isRequired,
      onPageChange: PropTypes.func.isRequired,
      page: PropTypes.number.isRequired,
      rowsPerPage: PropTypes.number.isRequired,
    };
    
    function createData(name, itemno, ACFT, date, limit, datecw, report, flightlimit, status) {
      return { name, itemno, ACFT, date, limit, datecw, report, flightlimit, status};
    }
   // this is  table data  start//
    const rows = [
      createData('2', 305, 'SP-UKL','20-06-2000', '24-07-2000','', 'Faulty engine', 'yes', 'open'),
      createData('1', 452, 'SP-UKL', '24-06-2000', '24-07-2000', '', 'Faulty engine', '?', 'closed'),
      createData('3', 262, 'SP-EFGH', '30-06-2000','30-07-2000', '' , 'Seatbelt 1BA missing', 'No', 'open'),
      createData('1', 159, 'SP-EFGH', '22-07-2000', '21-08-2000', '', 'Door Handle broken', 'No'),
      createData('2', 356, 'SP-EFGH', '21-06-2000', '22-07-2000', '', 'Seatbelt 1BA missing', 'Yes', 'closed'),
      createData('3', 408, 'SP-UKL', '22-07-2000', '21-08-2000', '', 'Door Handle broken', '?', 'open'),
      createData('3', 237, 'SP-UKL', '22-07-2000', '22-07-2000', '', 'Door Handle broken', 'No', 'closed'),
      createData('3', 375, 'SP-IJK', '30-06-2000', '30-07-2000', '', 'Faulty engine', '?', 'open'),
      createData('3', 518, 'SP-UKL', '30-06-2000', '30-07-2000', '', 'Faulty engine', 'No', 'closed'),
      createData('2', 392, 'SP-IJK', '30-06-2000', '21-08-2000', '', 'Seatbelt 1BA missing', '?', 'open'),
      createData('1', 318, 'SP-IJK', '22-07-2000', '21-08-2000', '', 'Seatbelt 1BA missing', 'Yes', 'closed'),
      createData('1', 360, 'SP-IJK', '24-06-2000','30-07-2000' , '', 'Door Handle broken', 'Yes', 'open'),
      createData('2', 437, 'SP-IJK', '24-06-2000', '30-07-2000', '', 'Door Handle broken', 'No', 'closed'),
    ].sort((a, b) => (a.itemno < b.itemno ? -1 : 1));
        // this is  table data end //

    // export all created  table variables and function

export default function HoldItemList() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    return (
       <>
       <div className="pre-content"> <Link to='/new-hil' className='mylink'> Add new HIL</Link> </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 ,wrap: 'wrap' }} aria-label="customized table">
        <TableHead sx={{background: "#1e68b6"}}>
          <TableRow>
            <TableCell style={{ color: "#fff" }}>HIL Item No:
            <span>
            <TextField
   sx={{ width: '18ch', backgroundColor: '#fff',borderRadius: '3px'}}
   required
   id="outlined-required"
   size="small"
     />
     </span>
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="right">MEL Item No:
            <span>
            <TextField
   sx={{ width: '18ch', backgroundColor: '#fff', borderRadius: '3px'}}
   required
   id="outlined-required"
   size="small"
     />
     </span>
            </TableCell>

            <TableCell style={{ color: "#fff" }} align="right">ACFT? 
            <span>
            <TextField
         sx={{ width: '13ch', backgroundColor:'#fff',borderRadius: '3px'}}
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          size="small"
        >
          
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </span>
   </TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Date</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Limit</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Date c/w</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Report
            </TableCell>

            <TableCell style={{ color: "#fff" }} align="right">Flight limit
            <span>
            <TextField
         sx={{ width: '13ch', backgroundColor:'#fff',borderRadius: '3px' }}
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          size="small"
        >
          
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </span>
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Status
            <span>
            <TextField
         sx={{ width: '15ch', backgroundColor:'#fff', borderRadius: '3px'}}
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          size="small"
        >
          
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </span>
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="right">
            <Stack spacing={1} direction="column">
      <Button variant="contained" style={{ backgroundColor: "#000" }}>clear</Button>
      <Button variant="contained" style={{ backgroundColor: "#000" }}>show</Button>
    </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        {/*return the table body items, table row & columns */}
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.itemno}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.ACFT}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.date}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.limit}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.datecw}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.report}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.flightlimit}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.status}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.buttons}
                </TableCell>
              </TableRow>
            ))}
  
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
              {/*return the table body items, table row & columns */}
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      </>  
    );
}