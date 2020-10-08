import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {DessertContext} from '../dessertContext';

const Buttons = () => {
  const { send, state, can } = useContext(DessertContext);
  const isAdding = !['edit', 'update'].includes(state);
  const isEditing = ['edit', 'update'].includes(state);

  return (
    <>
      <Box marginRight="8px">
        {isAdding && <Button variant="contained" color="primary" onClick={() => { send('post') }} disabled={!can('post')}>
          Add
        </Button>}
        {isEditing && <Button variant="contained" color="primary" onClick={() => { send('save') }} disabled={!can('save')} >
          Edit
        </Button>}
      </Box>
      <Button variant="contained" color="secondary" onClick={() => { send('cancel') }} disabled={ ['create', 'update'].includes(state) }>
        Cancel
      </Button>
    </>
  );
};

export default Buttons;