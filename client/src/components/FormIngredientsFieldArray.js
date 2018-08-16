import React from 'react';
import { List, Button, Grid } from 'semantic-ui-react';
import { Field } from 'redux-form';

import IngredientSelect from './IngredientSelect';
import DestroyButton from './DestroyButton';

const ingredients = {
  bun : "Bun",
  beef_patty : "Beef Patty",
  lettuce : "Lettuce",
  tomato : "Tomato",
  onion : "Onion",
  cheese : "Cheese",
  frankfurter : "Frankfurter",
  chicken : "Chicken",
  breading : "Breading",
  bread : "Bread",
  bacon : "Bacon",
  potatoes : "Potatoes",
  cucumber : "Cucumber",
  nachos : "Nachos",
  macaroni : "Macaroni",
  noodles : "Noodles",
  broth : "Broth",
  broccoli : "Broccoli",
  flour : "Flour",
  carrots : "Carrots",
  clams : "Clams",
  cream : "Cream",
  peppers : "Peppers",
  beans : "Beans",
  garlic : "Garlic",
  hot_sauce : "Hot Sauce"
}

const FormIngredientsFieldArray = ({ fields }) => (
  <List>
    {fields.map((ingredient, index) => (
      <List.Item key={index}>
        <Grid columns="3">
          <Grid.Column>
            <Field
              name={`${ingredient}._destroy`}
              component={DestroyButton}
              label={'Remove Ingredient'}
            />
          </Grid.Column>
          <Grid.Column>
            <Field
              name={`${ingredient}.name`}
              component={IngredientSelect}
              options={ingredients}
            />
          </Grid.Column>
          <Grid.Column>
            <Field
              name={`${ingredient}.removable`}
              component="input"
              type="checkbox"
            />
            <label> Removable?</label>
          </Grid.Column>
        </Grid>
      </List.Item>
    ))}
      <List.Item>
        <Button type="button" onClick={() => fields.push()}>
          Add Ingredient
        </Button>
      </List.Item>
  </List>
);

export default FormIngredientsFieldArray;
