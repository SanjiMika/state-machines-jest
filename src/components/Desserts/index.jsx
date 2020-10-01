import React, { memo, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Table from './components/table';
import Form from './components/form';

const Desserts = memo(() => {
  useEffect(() => {
  }, [])

  return (
    <Box p="10px">
      <Form />
      <Table/>
    </Box>
  )
});

export default Desserts;
