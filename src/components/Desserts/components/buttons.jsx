import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const Buttons = () => {
  return (
    <>
      <Box marginRight="8px">
        <Button variant="contained" color="primary" onClick={() => {}}>
          Add
        </Button>
      </Box>
      <Button variant="contained" color="secondary" onClick={() => {}}>
        Cancel
      </Button>
    </>
  );
};

export default Buttons;