import { createMachine } from 'robot3';

function wait(ms = 2000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const DESSERTS_DATA = [
  { id: 0, name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: 1, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { id: 2, name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { id: 3, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 4, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 }
];

const initialContext = {
  data: [],
  form: {
    id: null,
    name: '',
    calories: '',
    fat: '',
    carbs: '',
    protein: ''
  }
};

export default createMachine(
  {
  },
 () => initialContext
);