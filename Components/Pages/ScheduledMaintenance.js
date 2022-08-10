import React from "react";
import '../../App.css';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import Filter from "../Filter";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.blue,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

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


  function createData(name, Start, End, AircraftReg, AircraftTAH, AircraftTAC, CAMLimitsTAH, CAMLimitsTAC, CAMLimitsDate, EstimatedTAH, EstimatedTAC, Files, Notes,Status) {
    return { name, Start, End, AircraftReg, AircraftTAH, AircraftTAC, CAMLimitsTAH, CAMLimitsTAC, CAMLimitsDate, EstimatedTAH, EstimatedTAC, Files, Notes, Status };
  }
  
  const rows = [
    createData('Maintenance Option', '22-07-2000', '23-07-2000', 24, 4.0, 159, 6.0, 24, 4.0, 0, '-', '-', '-','completed'),
    createData('Aircraft on Ground(AOG)', '23-07-2000', '22-07-2000', 37, 4.3, 159, 6.0, 24, 4.0, 0, '-', '-', '-','completed'),
    createData('Eclair', '24-07-2000', '24-07-2000', 24, 6.0, 159, 6.0, 24, 4.0, 0, '-', '-', '-', 'open'),
  ];
  

export default function ScheduledMaintenance() {
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
    return(
        <>
        <div className="pre-content"> <Link to='/add-new-scheduled-maintenance' className='mylink'> Add new scheduled maintenance </Link>| PDF Version | Export to excel {<Filter />}</div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead sx={{background: "#1e68b6"}}>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Start</StyledTableCell>
            <StyledTableCell align="right">End</StyledTableCell>
            <StyledTableCell align="right">Aircraft<p className="sub-title">(Reg)</p></StyledTableCell>
            <StyledTableCell align="right">Aircraft<p className="sub-title1">(TAH)</p></StyledTableCell>
            <StyledTableCell align="right">Aircraft<p className="sub-title2">(TAC)</p></StyledTableCell>
            <StyledTableCell align="right">CAM Limits<p className="sub-title1">(TAH)</p></StyledTableCell>
            <StyledTableCell align="right">CAM Limits<p className="sub-title2">(TAC)</p></StyledTableCell>
            <StyledTableCell align="right">CAM Limits<p className="sub-title">(Date)</p></StyledTableCell>
            <StyledTableCell align="right">Estimated<p className="sub-title1">(TAH)</p></StyledTableCell>
            <StyledTableCell align="right">Estimated<p className="sub-title2">(TAC)</p></StyledTableCell>
            <StyledTableCell align="right">Files</StyledTableCell>
            <StyledTableCell align="right">Notes</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Start}</StyledTableCell>
              <StyledTableCell align="right">{row.End}</StyledTableCell>
              <StyledTableCell align="right">{row.AircraftReg}</StyledTableCell>
              <StyledTableCell align="right">{row.AircraftTAH}</StyledTableCell>
              <StyledTableCell align="right">{row.AircraftTAC}</StyledTableCell>
              <StyledTableCell align="right">{row.CAMLimitsTAH}</StyledTableCell>
              <StyledTableCell align="right">{row.CAMLimitsTAC}</StyledTableCell>
              <StyledTableCell align="right">{row.CAMLimitsDate}</StyledTableCell>
              <StyledTableCell align="right">{row.EstimatedTAH}</StyledTableCell>
              <StyledTableCell align="right">{row.EstimatedTAC}</StyledTableCell>
              <StyledTableCell align="right">{row.Files}</StyledTableCell>
              <StyledTableCell align="right">{row.Notes}</StyledTableCell>
              <StyledTableCell align="right">{row.Status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
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