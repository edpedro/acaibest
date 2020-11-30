import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";

import Cards from "../Card";

const AcaiCheckbox = withStyles({
  root: {
    color: "#5E35B1",
    "&$checked": {
      color: "#5E35B1",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Checkboxes({ onChange, data, flavor, buckets, priceFlavor }) {
  const [price, setPrice] = useState([]);

  const handleChangePeronalize = (props) => (event) => {
    let newPerson = [...data.personalize, event.target.value];
    if (data.personalize.includes(event.target.value)) {
      newPerson = newPerson.filter((person) => person !== event.target.value);
    }

    let newPrice = [...price, props];
    let pricePerson = 0;
    if (price.includes(props)) {
      newPrice = newPrice.filter((pric) => pric.id !== props.id);
    }
    pricePerson = Object.values(newPrice).reduce(
      (accumulator, valueCurrent) => accumulator + valueCurrent.price,
      0
    );

    setPrice(newPrice);
    onChange({
      ...data,
      personalize: newPerson,
      price_person: pricePerson,      
    });
  };

  return (
    <>
      {flavor && (
        <div>
          <Cards title="Personalize seu pedido" required="Não obrigatório" />
          <FormControl component="fieldset">
            <FormGroup aria-label="position" column>
              {buckets?.map((bucket) =>
                bucket.personalizes
                  .filter(
                    (personalize) =>
                      personalize.flavors_personalizes.flavor_id === flavor
                  )
                  .map((person) => (
                    <FormControlLabel
                      value={person.name}
                      control={<AcaiCheckbox />}
                      label={person.name}
                      labelPlacement={person.name}
                      onChange={handleChangePeronalize(person)}
                      key={person.id}
                    />
                  ))
              )}
            </FormGroup>
          </FormControl>
        </div>
      )}
    </>
  );
}
export default Checkboxes;
