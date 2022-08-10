import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
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
    
    function createData(name, itemno, ACFT, date, limit, datecw, report, TAH, TAC) {
      return { name, itemno, ACFT, date, limit, datecw, report, TAH, TAC};
    }
   // this is  table data  start//
    const rows = [
      createData('Noise Certificate', 305, 'SP-UKL','', '0','(max 13mb)',),
      createData('Insurance', 452, 'SP-UKL', '', '0', '(max 13mb',),
      createData('Certificate of Registeration', 262, 'SP-EFGH', '','0', '(max 13mb)' ,),
      createData('Radio Certificate', 159, 'SP-EFGH', '', '0', '(max 13mb)',),
      createData('RSVM', 356, 'SP-EFGH', '', '0', '(max 13mb)',),
      createData('Radio Certificate', 408, 'SP-UKL', '', '0'),
      createData('RSVM', 237, 'SP-UKL', 'TEST123', '0', '(max 13mb)'),
      createData('CL30', 375, 'SP-IJK', '', '366780', '(max 13mb)'),
      createData('CL30', 518, 'SP-UKL', '', '0', '(max 13mb)'),
      createData('FE20', 392, 'SP-IJK', '', '0', '(max 13mb)'),
      createData('B762', 318, 'SP-IJK', '', '0', '(max 13mb)'),
      createData('B762', 360, 'SP-IJK', '','34567' , '(max 13mb)'),
      createData('B762', 437, 'SP-IJK', 'TEST123', '38850', '(max 13mb)'),
    ].sort((a, b) => (a.itemno < b.itemno ? -1 : 1));
        // this is  table data end //

    // export all created  table variables and function

export default function FleetTabItem() {
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
       <div className="container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead sx={{background: "#0a4b90"}}>
          <TableRow>
            <TableCell style={{ color: "#fff" }}>Document Name:
            </TableCell>
            <TableCell style={{ color: "#fff" }} align="right"> Number:
            </TableCell>

            <TableCell style={{ color: "#fff" ,zIndex: '1' }} align="right">Date of Issue
          
   </TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Expiry Date</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Notes</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Scan
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