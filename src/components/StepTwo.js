import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { formatCurrency, formatPercentage } from "../helpers/formatHelpers";

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
    margin: theme.spacing(3),
    minWidth: 120,
  },
  select: {
    minWidth: 120,
  },
  card: {
    margin: theme.spacing(3),
  },
}));

export default function StepTwo({
  cubValue,
  constructionArea,
  levelOfFinish,
  handleButtonClickNext,
  handleButtonClickBack,
  handleLevelOfFinishChange,
  handleAreaChange,
  handleBdiValueChange,
}) {
  const classes = useStyles();

  const handleClickNext = () => {
    handleButtonClickNext();
  };

  const handleClickBack = () => {
    handleButtonClickBack();
  };

  const handleLOFChange = (event) => {
    handleLevelOfFinishChange(cubValues[event.target.value]);
  };

  const handleConstructionAreaChange = (event) => {
    handleAreaChange(parseFloat(event.target.value));
  };

  const handleBdiChange = (event) => {
    handleBdiValueChange(bdiValueHelper(event.target.value));
  };

  const bdiValueParser = (event) => {
    const newValue = bdiValueHelper(event.target.value);

    event.target.value = formatPercentage(newValue);
  };

  const bdiValueHelper = (value) => {
    const newValue = parseFloat(value.replace(",", ".").replace("%", "")) / 100;

    return newValue;
  };

  const cubValues = [
    { name: null, value: 0 },
    { name: "CAL-8 - Normal", value: 1796.75 },
    { name: "CSL-8 - Normal", value: 1557.84 },
    { name: "CSL-16 - Normal", value: 2080.38 },
  ];

  return (
    <div>
      <Grid container alignItems="center" justify="space-between">
        <FormControl>
          <InputLabel id="finish-level">Nível de acabamento</InputLabel>
          <Select
            labelId="finish-level"
            className={classes.select}
            onChange={handleLOFChange}
            value={cubValues.findIndex((element) => {
              return element.name === levelOfFinish;
            })}
          >
            <MenuItem value={1}>{cubValues[1].name}</MenuItem>
            <MenuItem value={2}>{cubValues[2].name}</MenuItem>
            <MenuItem value={3}>{cubValues[3].name}</MenuItem>
          </Select>
          <FormHelperText>Selecione o nível de acabamento</FormHelperText>
        </FormControl>

        <FormControl>
          <TextField
            disabled
            id="cub-value"
            label="Valor do CUB/m²"
            value={formatCurrency(cubValue)}
          />
        </FormControl>

        <FormControl>
          <TextField
            id="area-of-construction"
            label="Área"
            value={constructionArea}
            onChange={handleConstructionAreaChange}
          />
          <FormHelperText>Defina a área do empreendimento</FormHelperText>
        </FormControl>

        <FormControl>
          <TextField
            id="bdi"
            label="BDI"
            defaultValue={formatPercentage(0.27)}
            onChange={handleBdiChange}
            onBlur={bdiValueParser}
          />
          <FormHelperText>Defina o BDI</FormHelperText>
        </FormControl>
      </Grid>

      <div>
        <Button className={classes.button} onClick={handleClickBack}>
          Retornar
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClickNext}
        >
          Avançar
        </Button>
      </div>
    </div>
  );
}
