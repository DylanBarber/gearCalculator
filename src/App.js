import { useEffect, useState } from "react";
import "./App.css";
import { numberOfTeethFormula, useAddendumFormula, useDiametralPitchFormula, useNumberOfTeethFormula, usePitchDiameterFormula } from "./helpers/formulas";

const App = () => {
  const [numberOfTeeth, setNumberOfTeeth] = useState("");
  const [pitchDiameter, setPitchDiameter] = useState("");
  const [diametralPitch, setDiametralPitch] = useState("");
  const [addendum, setAddendum] = useState("");
  const [dedendum, setDedendum] = useState("");
  const [outsideDiameter, setOutsideDiameter] = useState("");
  const [rootDiameter, setRootDiameter] = useState("");
  const [baseCircle, setBaseCircle] = useState("");
  const [circularPitch, setCircularPitch] = useState("");
  const [circularThickness, setCircularThickness] = useState("");

  // useEffect(() => {
  //   if (pitchDiameter !== "" && diametralPitch !== "") {
  //     setNumberOfTeeth(numberOfTeethFormula(pitchDiameter, diametralPitch));
  //   }
  // }, [pitchDiameter, diametralPitch]);

  usePitchDiameterFormula(numberOfTeeth, diametralPitch, setPitchDiameter)
  useNumberOfTeethFormula(pitchDiameter, diametralPitch, outsideDiameter, numberOfTeeth, setNumberOfTeeth)
  useDiametralPitchFormula(numberOfTeeth, pitchDiameter, diametralPitch, setDiametralPitch)
  useAddendumFormula(diametralPitch, addendum, setAddendum)
  

  return (
    <div className="App">
      <div className="inputsContainer">
        <h1>Gear Calculator I Guess</h1>
        <label>Number of teeth</label>
        <input
          value={numberOfTeeth}
          onChange={(e) => setNumberOfTeeth(e.target.value)}
        ></input>

        <label>Pitch diameter</label>
        <input
          value={pitchDiameter}
          onChange={(e) => setPitchDiameter(e.target.value)}
        ></input>

        <label>Diametral pitch</label>
        <input
          value={diametralPitch}
          onChange={(e) => setDiametralPitch(e.target.value)}
        ></input>

        <label>Addendum</label>
        <input
          value={addendum}
          onChange={(e) => setAddendum(e.target.value)}
        ></input>

        <label>Dedendum</label>
        <input
          value={dedendum}
          onChange={(e) => setDedendum(e.target.value)}
        ></input>

        <label>Outside diameter</label>
        <input
          value={outsideDiameter}
          onChange={(e) => setOutsideDiameter(e.target.value)}
        ></input>

        <label>Root diameter</label>
        <input
          value={rootDiameter}
          onChange={(e) => setRootDiameter(e.target.value)}
        ></input>

        <label>Base circle</label>
        <input
          value={baseCircle}
          onChange={(e) => setBaseCircle(e.target.value)}
        ></input>

        <label>Circular pitch</label>
        <input
          value={circularPitch}
          onChange={(e) => setCircularPitch(e.target.value)}
        ></input>

        <label>Circular thickness</label>
        <input
          value={circularThickness}
          onChange={(e) => setCircularThickness(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default App;
