import { useEffect } from "react";


import { add, cos, divide, multiply, subtract } from "mathjs"

export const pitchDiameterFormulaArgs = ['numberOfTeeth', 'diametralPitch']
export const pitchDiameterFormula = (numberOfTeeth, diametralPitch) => divide(numberOfTeeth, diametralPitch)
export const diametralPitchFormula = (numberOfTeeth, pitchDiameter) => divide(numberOfTeeth, pitchDiameter)
export const diametralPitchFormulaPitchDiameter = (numberOfTeeth, outsideDiameter) => divide(add(numberOfTeeth, 2), outsideDiameter)
export const addendumFormula = (diametralPitch) => divide(1, diametralPitch)
export const dedendumFormula = (diametralPitch) => divide(1.157, diametralPitch)
export const outsideDiameterFormula = (numberOfTeeth, diametralPitch) => divide(add(numberOfTeeth, 2), diametralPitch)
export const rootDiameterFormula = (numberOfTeeth, diametralPitch) => divide(subtract(numberOfTeeth, 2), diametralPitch)
export const baseCircleFormula = (pitchDiameter, diametralPitch, addendum) => multiply(diametralPitch, cos(multiply(pitchDiameter, addendum)))
export const circularPitchFormula = (diametralPitch) => divide(3.1416, diametralPitch)
// God why doesn't JS support overloading? :(
export const circularPitchFormulaTwoArgs = (numberOfTeeth, pitchDiameter) => divide(multiply(3.1416, pitchDiameter), numberOfTeeth)
export const circularThicknessFormula = (diametralPitch) => divide(1.57, diametralPitch)
export const circularThicknessFormulaTwoArgs = (pitchDiameter, numberOfTeeth) => divide(multiply(3.1416, pitchDiameter), multiply(2, numberOfTeeth))
export const numberOfTeethFormula = (pitchDiameter, diametralPitch) => multiply(pitchDiameter, diametralPitch)
export const numberOfTeethFormula2 = (outerDiameter, diametralPitch) => add(multiply(outerDiameter, diametralPitch), 2)



// Number of teeth and outer diameter are required. Then we calculate diametral pitch, then pitch diameter, then everything
