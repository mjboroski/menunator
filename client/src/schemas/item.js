import { schema, arrayOf } from 'normalizr';


const ingredientSchema = new schema.Entity('ingredients');
const itemSchema = new schema.Entity('items');

const Schema = {
  ingredients: [ ingredientSchema ]
};

export default Schema;
