import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Grid,
} from "@material-ui/core";
import { FlightTakeoff, FormatPaint, LocationCity } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
  containerRightAlign: {
    width: "100%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    minWidth: 120,
  },
  card: {
    margin: theme.spacing(3),
  },
}));

export default function StepOne({
  handleOptionChange,
  value,
  handleButtonClickNext,
}) {
  const classes = useStyles();

  const handleInputChange = (event) => {
    handleOptionChange(event.target.value);
  };

  const handleClickNext = () => {
    handleButtonClickNext();
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="Selecione o tipo de empreendimento"
        name="typeOfConstrucion"
        value={value}
        onChange={handleInputChange}
      >
        <Grid container alignItems="center">
          <FormControlLabel
            value={1}
            control={<Radio />}
            label={`Edificação nova`}
          />
          <LocationCity fontSize="large" />
        </Grid>

        <Grid container alignItems="center">
          <FormControlLabel
            value={2}
            control={<Radio />}
            label="Reforma em edificação"
          />
          <FormatPaint fontSize="large" />
        </Grid>

        <Grid container alignItems="center">
          <FormControlLabel
            value={3}
            control={<Radio />}
            label="Obras de infraestrutura"
          />
          <FlightTakeoff fontSize="large" />
        </Grid>
      </RadioGroup>
      <FormHelperText>Selecione o tipo de empreendimento</FormHelperText>
      <div>
        <Button disabled className={classes.button}>
          Retornar
        </Button>
        <Button
          disabled={value === 0}
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClickNext}
        >
          Avançar
        </Button>
      </div>
    </FormControl>
  );
}
