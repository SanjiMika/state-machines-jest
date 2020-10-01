import React, { memo } from 'react';
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import Buttons from "./buttons";

const FormAdd = memo(() => {
    return (
      <Box display="flex" m="20px 0px" flexDirection="column">
        <Box display="flex">
          <Box marginRight="8px"><TextField id="1" label="Titre" onChange={(e) => {}}/></Box>
          <Box marginRight="8px"><TextField id="2" label="Calories" onChange={(e) => {}}/></Box>
          <Box marginRight="8px"><TextField id="3" label="Fat" onChange={(e) => {}}/></Box>
          <Box marginRight="8px"><TextField id="4" label="Carbs" onChange={(e) => {}}/></Box>
          <Box marginRight="8px"> <TextField id="5" label="Protein" onChange={(e) => {}}/></Box>
        </Box>
        <Box display="flex" m="8px 0px" >
          <Buttons />
        </Box>
      </Box>
    );
});

export default FormAdd;