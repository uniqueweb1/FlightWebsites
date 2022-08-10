import React from "react";
import '../../App.css';
import { styled } from '@mui/material/styles';
import FilterPlanning from '../FilterPlanning';
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
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import Paper from '@mui/material/Paper';

function TablePaginationActions(props) {
   
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
      '&:nth-of-type(3n+1)': {
        backgroundColor: theme.palette.common.green,
        color: theme.palette.common.white,
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
  
  function createData(date,bloff,route,blon,blk,fc,noel,dleon,gleon,hleon,barti,abcde,ccar,atest, radio,conflict) {
    return { date,bloff,route,blon,blk,fc,noel,dleon,gleon,hleon,barti,abcde,ccar,atest, radio,conflict};
  }
 // this is  table data  start//
  const rows = [
    createData( 'SP-UKL' ,'Noise Certificate',305,'', '0','2',<FormControlLabel value="female" control={<Radio />} label="OEL" />,<FormControlLabel value="female" control={<Radio />} label="EON" />,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />} />,<FormControlLabel value="female" control={<Radio />} />),
    createData('SP-UKL','Insurance', 452, '', '0', 'active',<FormControlLabel value="female" control={<Radio />} label="OEL" />,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />} label="EON" />, <FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio label="EON"/>} /> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
    createData( 'SP-EFGH','Certificate of Registeration', 262, '','0', '2',<FormControlLabel value="female" control={<Radio />} label="OEL"/>,<FormControlLabel value="female" control={<Radio />} label="EON" />,<FormControlLabel value="female" control={<Radio />}label="EON" />,<FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
    createData('SP-EFGH','Radio Certificate', 159, '', '0', '2',<FormControlLabel value="female" control={<Radio />} label="OEL"/>,<FormControlLabel value="female" control={<Radio />}label="EON" />,<FormControlLabel value="female" control={<Radio />}label="EON" />,<FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio />}label="EON" /> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
    createData('SP-EFGH','RSVM', 356, '', '0', 'active',<FormControlLabel value="female" control={<Radio />}label="OEL" />,<FormControlLabel value="female" control={<Radio />}label="EON" />,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio />}label="EON" /> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
    createData('SP-UKL','Radio Certificate', 408, '', '0',<FormControlLabel value="female" control={<Radio />} label="OEL"/>,<FormControlLabel value="female" control={<Radio />}label="EON" />,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />}label="EON" /> ,<FormControlLabel value="female" control={<Radio />}label="EON" /> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
    createData( 'SP-UKL','RSVM', 237, 'TEST123', '0', 'active',<FormControlLabel value="female" control={<Radio />}label="OEL" />,<FormControlLabel value="female" control={<Radio />}label="EON" />,<FormControlLabel value="female" control={<Radio />}label="EON" />,<FormControlLabel value="female" control={<Radio />}label="EON" /> ,<FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
    createData('SP-IJK', 'Air Operator certificate', 375, '', '366780', '2',<FormControlLabel value="female" control={<Radio />}label="oel" />,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio />}label="EON" /> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
    createData('SP-UKL','CL30', 518,  '', '0', '2',<FormControlLabel value="female" control={<Radio />} label="OEL"/>,<FormControlLabel value="female" control={<Radio />}label="EON" />,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
    createData('SP-IJK','FE20', 392, '', '0', '2',<FormControlLabel value="female" control={<Radio />} label="OEL"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />}label="EON" /> ,<FormControlLabel value="female" control={<Radio />}label="EON" /> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
    createData('SP-IJK','certificate of fitness of flight', 318,  '', '0', '2',<FormControlLabel value="female" control={<Radio />} label="OEL"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />}label="EON" /> ,<FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
    createData('SP-IJK','B762', 360,  '','34567' , '2',<FormControlLabel value="female" control={<Radio />} label="OEL"/>,<FormControlLabel value="female" control={<Radio />}label="EON" />,<FormControlLabel value="female" control={<Radio />}label="EON" />,<FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio />} label="EON"/> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
    createData('SP-IJK','insurance', 437,  'TEST123', '38850', '2',<FormControlLabel value="female" control={<Radio />} label="OEL"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />} label="EON"/>,<FormControlLabel value="female" control={<Radio />}label="EON" /> ,<FormControlLabel value="female" control={<Radio />}label="EON" /> ,<FormControlLabel value="female" control={<Radio />} /> ,<FormControlLabel value="female" control={<Radio />} />),
  ].sort((a, b) => (a.itemno < b.itemno ? -1 : 1));
      // this is  table data end //

  // export all created  table variables and function

export default function FleetPlanning() {
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
{<FilterPlanning />}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
      <TableHead sx={{background: "#1e68b6"}}>
        <TableRow>
          <TableCell style={{ color: "#fff" }}>Date:
          </TableCell>
          <TableCell style={{ color: "#fff" }} align="right"> BLOFF:
          </TableCell>

          <TableCell style={{ color: "#fff" ,zIndex: '1' }} align="right">Route
        
 </TableCell>
          <TableCell style={{ color: "#fff" }} align="right">BLON</TableCell>
          <TableCell style={{ color: "#fff" }} align="right">BLK</TableCell>
          <TableCell style={{ color: "#fff" }} align="right">FC
          </TableCell>
          <TableCell style={{ color: "#fff" }} align="right">M-NOEL </TableCell>
          <TableCell style={{ color: "#fff" }} align="right">D-NOEL</TableCell>
          <TableCell style={{ color: "#fff" }} align="right">G-LEON</TableCell>
          <TableCell style={{ color: "#fff" }} align="right">H-LEON</TableCell>
          <TableCell style={{ color: "#fff" }} align="right">B-ARTI</TableCell>
          <TableCell style={{ color: "#fff" }} align="right">A-BCDE</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">C-CAR</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">A-Test</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">C-CAR</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">C-CAR</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ color: "#fff" }}>
          </TableCell>
          <TableCell style={{ color: "#fff" }} align="right">
          </TableCell>

          <TableCell style={{ color: "#fff" ,zIndex: '1' }} align="right">
        
 </TableCell>
          <TableCell style={{ color: "#fff" }} align="right"></TableCell>
          <TableCell style={{ color: "#fff" }} align="right"></TableCell>
          <TableCell style={{ color: "#fff" }} align="right"> Check all  </TableCell>
          <TableCell style={{ color: "#fff" }} align="right"> </TableCell>
          <TableCell style={{ color: "#fff" }} align="right">D-NOEL</TableCell>
          <TableCell style={{ color: "#fff" }} align="right">G-LEON</TableCell>
          <TableCell style={{ color: "#fff" }} align="right">H-LEON</TableCell>
          <TableCell style={{ color: "#fff" }} align="right">B-ARTI</TableCell>
          <TableCell style={{ color: "#fff" }} align="right">A-BCDE</TableCell>
            <TableCell style={{ color: "#fff" }} align="right">C-CAR</TableCell>
            <TableCell style={{ color: "#fff" }} align="right"></TableCell>
            <TableCell style={{ color: "#fff" }} align="right"></TableCell>
            <TableCell style={{ color: "#fff" }} align="right">Conflict</TableCell>
        </TableRow>
      </TableHead>
      {/*return the table body items, table row & columns */}
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.aircraft}>
              <TableCell component="th" scope="row" width= "180">
                {row.date}
              </TableCell>
              <TableCell style={{ width: 180}} align="right">
                {row.bloff}
              </TableCell>
              <TableCell style={{ width: 180}} align="right">
                {row.route}
              </TableCell>
              <TableCell style={{ width: 180}} align="right">
                {row.blon}
              </TableCell>
              <TableCell style={{ width: 180}} align="right">
                {row.blk}
              </TableCell>
              <TableCell style={{ width: 180}} align="right">
                {row.fc}
              </TableCell>
              <TableCell style={{ width: 180}} align="right">
                {row.noel}
              </TableCell>
              <TableCell style={{ width: 180}} align="right">
                {row.dleon}
              </TableCell>
              <TableCell style={{ width: 180}} align="right">
                {row.gleon}
              </TableCell>
              <TableCell style={{ width: 180}} align="right">
                {row.hleon}
              </TableCell>
              <TableCell style={{ width: 180}} align="right">
                {row.barti}
              </TableCell>
              <TableCell style={{ width: 180}} align="right">
                {row.abcde}
              </TableCell>
              <TableCell style={{ width: 180 }} align="right">
                {row.ccar}
              </TableCell>
              <TableCell style={{ width: 180 }} align="right">
                {row.atest}
              </TableCell>
              <TableCell style={{ width: 180 }} align="right">
                {row.radio}
              </TableCell>
              <TableCell style={{ width: 180 }} align="right">
                {row.conflict}
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