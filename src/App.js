import { useEffect, useState } from "react";
import "./App.css";
import { numberOfTeethFormula, useAddendumFormula, useDiametralPitchFormula, useNumberOfTeethFormula, usePitchDiameterFormula } from "./helpers/formulas";

const App = () => {

  const [formState, setFormState] = useState({
    numberOfTeeth: {
      touched: false,
      value: ''
    },
    pitchDiameter: {
      touched: false,
      value: ''
    },
    diametralPitch: {
      touched: false,
      value: ''
    },
    addendum: {
      touched: false,
      value: ''
    },
    dedendum: {
      touched: false,
      value: ''
    },
    outsideDiameter: {
      touched: false,
      value: ''
    },
    rootDiameter: {
      touched: false,
      value: ''
    },
    baseCircle: {
      touched: false,
      value: ''
    },
    circularPitch: {
      touched: false,
      value: ''
    },
    circularThickness: {
      touched: false,
      value: ''
    },
  })

  const calculate = e => {
    e.preventDefault()
    console.log(formState)

    // const touchedValues = {}
    // Object.keys(formState).map((value) => {

    // })
    console.log(calculate.arguments)
  }

  const onChangeHandler = (e, valueName) => {

    const updatedFormState = JSON.parse(JSON.stringify(formState))

    if (e.target.value === '') {

      // I know this deep copy trick is hacky, I'll find a better way.....eventually ;)
      updatedFormState[valueName] = {
        touched: false,
        value: e.target.value
      }
      return setFormState(updatedFormState)
    }

    updatedFormState[valueName] = {
      touched: true,
      value: e.target.value
    }

    setFormState(updatedFormState)

  }

  return (
    <div className="App">
      <div className="inputsContainer">
        <h1>Gear Calculator I Guess</h1>
        <label>Number of teeth</label>
        <input
          value={formState.numberOfTeeth.value}
          onChange={(e) => onChangeHandler(e, 'numberOfTeeth')}
        ></input>

        <label>Pitch diameter</label>
        <input
          value={formState.pitchDiameter.value}
          onChange={(e) => onChangeHandler(e, 'pitchDiameter')}
        ></input>

        <label>Diametral pitch</label>
        <input
          value={formState.diametralPitch.value}
          onChange={(e) => onChangeHandler(e, 'diametralPitch')}
        ></input>

        <label>Addendum</label>
        <input
          value={formState.addendum.value}
          onChange={(e) => onChangeHandler(e, 'addendum')}
        ></input>

        <label>Dedendum</label>
        <input
          value={formState.dedendum.value}
          onChange={(e) => onChangeHandler(e, 'dedendum')}
        ></input>

        <label>Outside diameter</label>
        <input
          value={formState.outsideDiameter.value}
          onChange={(e) => onChangeHandler(e, 'outsideDiameter')}
        ></input>

        <label>Root diameter</label>
        <input
          value={formState.rootDiameter.value}
          onChange={(e) => onChangeHandler(e, 'rootDiameter')}
        ></input>

        <label>Base circle</label>
        <input
          value={formState.baseCircle.value}
          onChange={(e) => onChangeHandler(e, 'baseCircle')}
        ></input>

        <label>Circular pitch</label>
        <input
          value={formState.circularPitch.value}
          onChange={(e) => onChangeHandler(e, 'circularPitch')}
        ></input>

        <label>Circular thickness</label>
        <input
          value={formState.circularThickness.value}
          onChange={(e) => onChangeHandler(e, 'circularThickness')}
        ></input>

        <button type='submit' onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
};

export default App;
