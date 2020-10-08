import React, { memo, useContext } from 'react';
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import Buttons from "./buttons";
import {DessertContext} from '../dessertContext';

const FormAdd = memo(() => {
  const { context: { form }, send } = useContext(DessertContext);

    return (
      <Box display="flex" m="20px 0px" flexDirection="column">
        <Box display="flex">
          <Box marginRight="8px"><TextField id="1" label="Titre" value={form.name} onChange={(e) => { send('input', { inputName: 'name', value: e.target.value })}}/></Box>
          <Box marginRight="8px"><TextField id="2" label="Calories" value={form.calories} onChange={(e) => { send('input', { inputName: 'calories', value: e.target.value })}}/></Box>
          <Box marginRight="8px"><TextField id="3" label="Fat" value={form.fat} onChange={(e) => { send('input', { inputName: 'fat', value: e.target.value })}}/></Box>
          <Box marginRight="8px"><TextField id="4" label="Carbs" value={form.carbs} onChange={(e) => { send('input', { inputName: 'carbs', value: e.target.value })}}/></Box>
          <Box marginRight="8px"> <TextField id="5" label="Protein" value={form.protein} onChange={(e) => { send('input', { inputName: 'protein', value: e.target.value })}}/></Box>
        </Box>
        <Box display="flex" m="8px 0px" >
          <Buttons />
        </Box>
      </Box>
    );
});

export default FormAdd;