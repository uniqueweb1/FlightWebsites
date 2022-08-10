import React from "react";
import '../../App.css';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
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

// aircraft selection label//
const selectionaircraft = [
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

// status selection label//

const selectionstatus = [
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
// ACMI selection label

const selectionacmi = [
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
    
    function createData(name, itemno, ACFT, date, limit, datecw, report, TAH, TAC) {
      return { name, itemno, ACFT, date, limit, datecw, report, TAH, TAC};
    }
   // this is  table data  start//
    const rows = [
      createData('BE20', 305, 'SP-UKL','', '0','active', 'Non ACMI', '-', '-'),
      createData('FE20', 452, 'SP-UKL', '', '0', 'active', 'Non ACMI', '?', '-'),
      createData('CL30', 262, 'SP-EFGH', '','0', 'active' , 'Non ACMI', '-', '-'),
      createData('E120', 159, 'SP-EFGH', '', '0', 'active', 'Non ACMI', 'No', '-'),
      createData('CL30', 356, 'SP-EFGH', '', '0', 'active', 'Non ACMI', '-', '-'),
      createData('BE20', 408, 'SP-UKL', '', '0', 'active', 'Non ACMI', '?', '-'),
      createData('BE20', 237, 'SP-UKL', 'TEST123', '0', 'active', 'Non ACMI', '-', '-'),
      createData('CL30', 375, 'SP-IJK', '', '366780', 'active', 'Non ACMI', '?', '-'),
      createData('CL30', 518, 'SP-UKL', '', '0', 'active', 'Non ACMI', '104.45', '33'),
      createData('FE20', 392, 'SP-IJK', '', '0', 'active', 'Non ACMI', '?', '-'),
      createData('B762', 318, 'SP-IJK', '', '0', 'active', 'Non ACMI', '-', '-'),
      createData('B762', 360, 'SP-IJK', '','34567' , 'active', 'Non ACMI', '-', '33'),
      createData('B762', 437, 'SP-IJK', 'TEST123', '38850', 'active', 'Non ACMI', '-', '-'),
    ].sort((a, b) => (a.itemno < b.itemno ? -1 : 1));
        // this is  table data end //

    // export all created  table variables and function

export default function Fleet() {
  const [selection, setSelection] = React.useState('NONE');

  const handleSelection = (event) => {
    setSelection(event.target.value);
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
    const navigate = useNavigate();
    const handleRowClick = (rows) => {
      navigate('/fleetsecond');
    }  
  
    return (
       <div className="container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead sx={{background: "#1e68b6"}}>
          <TableRow>
            <TableCell style={{ color: "#fff" }}>Account Type:
            <span>
            <TextField
         sx={{ width: '15ch', backgroundColor:'#fff', borderRadius:'3px'}}
          id="outlined-select-currency"
          select
          value={selection}
          onChange={handleSelection}
          size="small"

        >
          
          {selectionaircraft.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </span>
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Serial Number:
            </TableCell>

            <TableCell style={{ color: "#fff" ,zIndex: '1' }} align="right">Registration 
          
   </TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Dafault Flight Number</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Capacity</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Status
            <span>
            <TextField
         sx={{ width: '15ch', backgroundColor:'#fff',borderRadius:'3px'}}
          id="outlined-select-currency"
          select
          value={selection}
          onChange={handleSelection}
          size="small"
        >
          
          {selectionstatus.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </span>
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="right">ACMI
            <span>
            <TextField
         sx={{ width: '15ch', backgroundColor:'#fff',borderRadius: '3PX'}}
          id="outlined-select-currency"
          select
          value={selection}
          onChange={handleSelection}
          size="small"
        >
          
          {selectionacmi.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </span>
            </TableCell>

            
           <TableCell style={{ color: "#fff" }} align="right">Flight limit
          <span className="sub-title2">(TAH)</span>
          </TableCell>
          <TableCell style={{ color: "#fff" }} align="right">
          Flight limit
          <span className="sub-title1">(TAC)</span>
          </TableCell>
          
           
            <TableCell style={{ color: "#fff"}} align="right">
            <Stack spacing={1} direction="column">
      <Button variant="contained" style={{backgroundColor:"#000"}}>clear</Button>
      <Button variant="contained"style={{backgroundColor:"#000"}}>show</Button>
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
              <TableRow key={row.name} onClick={()=> handleRowClick(rows)}>
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
                  {row.TAH}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.TAC}
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
      </div>  
    );
}