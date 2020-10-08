import React, { memo, useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import {DessertContext} from '../dessertContext';

const table = memo(() => {
  const { context: { data }, send, state } = useContext(DessertContext);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {data.map((row) => (
                  <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell component="th" scope="row">
                          {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      <TableCell align="right">
                          <IconButton aria-label="delete" size="small" onClick={() => { send('startEdit', { form: row }) }}>
                              <EditIcon fontSize="inherit" color="primary"/>
                          </IconButton>
                      </TableCell>
                  </TableRow>
              ))}
              {
                ['load', 'create', 'update'].includes(state) && 
                (<TableRow key="LoadingRow">
                  <TableCell colSpan={7}>Loading</TableCell>
                </TableRow>)
              }
          </TableBody>
      </Table>
    </TableContainer>
  )
});

export default table;