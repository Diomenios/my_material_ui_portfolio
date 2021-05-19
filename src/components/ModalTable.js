import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import infinity from '../images/infinity-symbol.png';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  body: {
    fontSize: 14,
    fontWeight: 'bold',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f0f0f0',
    },
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.common.white,
    },
  },
}))(TableRow);

const INDEX_COLUMN = {
  name: '#', 
  key:'index',
};
const SUBJECT_COLUMN = {
  name: 'Subject',
  key:'subject',
};
const TYPE_COLUMN = {
  name: 'Type',
  key:'type',
};
const SPENT_COLUMN = {
  name: 'Hours spent',
  key:'spent',
};
const COUNT_COLUMN =   {
  name: 'Hours counted',
  key:'count',
};
const COLUMNS= [
  INDEX_COLUMN,
  SUBJECT_COLUMN,
  TYPE_COLUMN,
  SPENT_COLUMN,
  COUNT_COLUMN,
];
const TABLE_DATA = [
  {
    index: 1,
    subject: 'React.js',
    type: 'Online learning',
    spent: '22',
    count: '10',
  },
  {
    index: 2,
    subject: 'Symfony',
    type: 'Online learning',
    spent: '12',
    count: '10',
  },
  {
    index: 3,
    subject: 'Louvain-li-Nux workshop',
    type: 'Presentation',
    spent: '&#8734;',
    count: '10',
  },
  {
    index: 4,
    subject: 'Louvain-li-Nux repair activity',
    type: 'IT maintenance',
    spent: '&#8734;',
    count: '10',
  },
  {
    index: 5,
    subject: 'Louvain-li-Nux organization of activities',
    type: 'Organization/planning',
    spent: '&#8734;',
    count: '10',
  },
  {
    index: 6,
    subject: 'GameJam',
    type: 'GameJam',
    spent: '24',
    count: '10',
  },
  {
    index: 'Total',
    subject: '',
    type: '',
    spent: '300+',
    count: '60',
  },
];

const ModalTable = (props) => {

  const renderTableBody = (data, columns) => {
    const tableBody = data.map((dataUnit, index) => {
      const row = columns.map(column => {

        return ( 
          <StyledTableCell key={column.key} align='center'> 
            {dataUnit[column.key] === '&#8734;' ? 
              <img style={{maxHeight: '14px'}}src={infinity} alt="Infinity" /> : 
              dataUnit[column.key]
            } 
          </StyledTableCell>
        );
      });

      return (
        <StyledTableRow key={index}>
          {row}
        </StyledTableRow>
      );
    });

    return (
      <TableBody>
        {tableBody}
      </TableBody>
    );
  };

  const renderTableHead = (columns) => {
    const tableHead = columns.map(column => {

      return (
        <StyledTableCell key={column.name} align='center'> {column.name} </StyledTableCell>
      );
    });

    return (
      <TableHead>
        <TableRow>
          {tableHead}
        </TableRow>
      </TableHead>
    );
  };

  return (
    <TableContainer>
      <Table>
        {renderTableHead(COLUMNS)}
        {renderTableBody(TABLE_DATA, COLUMNS)}

      </Table>
    </TableContainer>
  );
};


export default ModalTable;
