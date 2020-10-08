import React, { memo, useEffect, useMemo } from 'react';
import Box from '@material-ui/core/Box';
import { useMachine } from '../../hooks/useMachine';
import dessertMachine from './dessertMachine';
import {DessertContext} from './dessertContext';
import Table from './components/table';
import Form from './components/form';

const Desserts = memo(() => {
  const [state, send, context, can] = useMachine(dessertMachine);
  const dessertValue = useMemo(() => ({ state, send, can, context}), [state, send, context, can]);

  useEffect(() => {
    send('fetchData');
  }, [])

  return (
    <DessertContext.Provider value={dessertValue}>
      <Box p="10px">
        <Form />
        <Table/>
      </Box>
    </DessertContext.Provider>
  )
});

export default Desserts;
