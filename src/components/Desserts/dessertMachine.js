import { createMachine, state, transition, invoke, reduce, immediate, guard } from 'robot3';


const DESSERTS_DATA = [
  { id: 0, name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: 1, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { id: 2, name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { id: 3, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 4, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 }
];

const DEFAULT_FORM = {
  id: null,
  name: '',
  calories: '',
  fat: '',
  carbs: '',
  protein: ''
};

function wait(ms = 2000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const loadData = async () => {
  await wait();
  return DESSERTS_DATA;
}

const postDessert = async () => {
  await wait();
  return Math.floor(Math.random() * 1000)
}

const input = (ctx, { inputName, value }) => ({
  ...ctx,
  form: {
    ...ctx.form,
    [inputName]: value
  }
})

const checkForm = (ctx) => ctx.form.calories && ctx.form.carbs && ctx.form.fat && ctx.form.protein && ctx.form.name

const machine = createMachine({
  preview: state(
    transition('fetchData', 'load'),
    transition('input', 'preview', reduce(input)),
    transition('cancel', 'reset'),
    transition('post', 'create', guard(checkForm)),
    transition('startEdit', 'edit', reduce(
      (ctx, { form }) => ({
        ...ctx,
        form
      })
    ))
  ),
  load: invoke(loadData, 
    transition('done', 'preview', reduce(
      (ctx, ev) => ({
        ...ctx,
        data: ev.data
      })
    ))  
  ),
  edit: state(
    transition('input', 'edit', reduce(input)),
    transition('cancel', 'reset'),
    transition('save', 'update', guard(checkForm)),
  ),
  reset: state(
    immediate('preview', reduce(
      (ctx) => ({
        ...ctx,
        form: DEFAULT_FORM
      })
    ))
  ),
  create: invoke(postDessert,
    transition('done', 'preview', reduce(
      (ctx, ev) => ({
        ...ctx,
        form: DEFAULT_FORM,
        data: [
          ...ctx.data,
          { ...ctx.form, id : ev.data}
        ]
      })
    ))
  ),
  update: invoke(postDessert,
    transition('done', 'preview', reduce(
      ctx => ({
        ...ctx,
        form: DEFAULT_FORM,
        data: ctx.data.map((d) => d.id === ctx.form.id ? ctx.form : d)
      })
    ))
    ),
}, () => ({ data: [], form: DEFAULT_FORM }));

export default machine;
