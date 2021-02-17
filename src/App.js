import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import {
  Container,
  Card,
  Avatar,
  CardHeader,
  Typography,
  Grid,
  TextField,
  FormControl,
  withStyles,
} from "@material-ui/core";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import {
  FlightTakeoff,
  FormatPaint,
  LocalOffer,
  LocationCity,
} from "@material-ui/icons";
import { formatCurrency } from "./helpers/formatHelpers";

const TYPE_OF_CONSTRUCTION_SUFFIX = [
  "",
  " Edificação",
  " Reforma",
  " Infraestrutura",
];
const TYPE_OF_CONSTRUCTION_AVATAR = [
  <LocalOffer />,
  <LocationCity />,
  <FormatPaint />,
  <FlightTakeoff />,
];

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
  card: {
    margin: theme.spacing(3),
  },
  coloredText: {
    color: "red",
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
}));

const DisabledTextFieldColor = withStyles({
  root: {
    marginRight: 8,
    "& .MuiInputBase-root.Mui-disabled": {
      color: "rgb(64, 200, 64)", // (default alpha is 0.38)
    },
  },
})(TextField);

export default function App() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [typeOfConstruction, setTypeOfConstruction] = React.useState(0);
  const [levelOfFinish, setLevelOfFinish] = React.useState("");
  const [cubValue, setCubValue] = React.useState(0.0);
  const [constructionArea, setConstructionArea] = React.useState(100.0);
  const [bdiValue, setBdiValue] = React.useState(0.27);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleLevelOfFinishChange = (cub) => {
    setLevelOfFinish(cub.name);
    setCubValue(cub.value);
  };

  const handleAreaChange = (value) => {
    setConstructionArea(value);
  };

  const handleBdiValueChange = (value) => {
    setBdiValue(value);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleTypeOfConstructionChange = (value) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setTypeOfConstruction(parseInt(value));
  };

  return (
    <Container className={classes.root} maxWidth="xl">
      <Card className={classes.card} elevation={3}>
        <CardHeader
          avatar={
            <Avatar aria-label="">
              {TYPE_OF_CONSTRUCTION_AVATAR[typeOfConstruction]}
            </Avatar>
          }
          title={
            <Grid container alignItems="center" justify="space-between">
              <Grid item xs={8}>
                <Typography variant="h5" color="initial">
                  Gerador de estimativa de custos de obras
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <Grid container alignItems="center" justify="flex-end">
                  <Avatar
                    aria-label=""
                    className={classes.small}
                    color="primary"
                  >
                    <LocalOffer fontSize="small" />
                  </Avatar>
                  <FormControl>
                    <DisabledTextFieldColor
                      disabled
                      id="estimated-value"
                      label="Valor Estimado"
                      value={formatCurrency(
                        cubValue * constructionArea * (1 + bdiValue)
                      )}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          }
          subheader={TYPE_OF_CONSTRUCTION_SUFFIX[typeOfConstruction]}
        />

        <Stepper activeStep={activeStep} orientation="vertical">
          <Step key={"Step1"}>
            <StepLabel>{`Tipo de obra`}</StepLabel>
            <StepContent>
              <StepOne
                handleOptionChange={handleTypeOfConstructionChange}
                handleButtonClickNext={handleNext}
                value={typeOfConstruction}
              />
            </StepContent>
          </Step>

          <Step key={"Step2"}>
            <StepLabel>Dados do empreendimento</StepLabel>
            <StepContent>
              <StepTwo
                cubValue={cubValue}
                constructionArea={constructionArea}
                levelOfFinish={levelOfFinish}
                handleButtonClickNext={handleNext}
                handleButtonClickBack={handleBack}
                handleLevelOfFinishChange={handleLevelOfFinishChange}
                handleAreaChange={handleAreaChange}
                handleBdiValueChange={handleBdiValueChange}
              />
            </StepContent>
          </Step>

          <Step key={"teste"}>
            <StepLabel>Detalhamentos</StepLabel>
            <StepContent>
              <div>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Teste
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        </Stepper>
      </Card>
    </Container>
  );
}
