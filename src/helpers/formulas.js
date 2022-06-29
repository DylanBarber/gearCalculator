import { useEffect } from "react";


import { add, cos, divide, multiply, subtract } from "mathjs"


export const pitchDiameterFormula = (numberOfTeeth, diametralPitch) => divide(numberOfTeeth, diametralPitch)

export const usePitchDiameterFormula = (numberOfTeeth, diametralPitch, pitchDiameter, setPitchDiameter) => {
    useEffect(() => {
        if (numberOfTeeth !== "" && diametralPitch !== "" && pitchDiameter === "") {
            setPitchDiameter(pitchDiameterFormula(numberOfTeeth, diametralPitch));
        }
      }, [numberOfTeeth, diametralPitch, setPitchDiameter]);
}

export const diametralPitchFormula = (numberOfTeeth, pitchDiameter) => divide(numberOfTeeth, pitchDiameter)

export const useDiametralPitchFormula = (numberOfTeeth, pitchDiameter, diametralPitch, setDiametralPitch) => {
    useEffect(() => {
        if (numberOfTeeth !== "" && pitchDiameter !== "" && diametralPitch === "") {
            setDiametralPitch(diametralPitchFormula(numberOfTeeth, pitchDiameter))
        }
    }, [numberOfTeeth, pitchDiameter, diametralPitch, setDiametralPitch])
}

export const addendumFormula = (diametralPitch) => divide(1, diametralPitch)

export const useAddendumFormula = (diametralPitch, addendum, setAddendum) => {
    useEffect(() => {
        if (diametralPitch !== "") {
            setAddendum(addendumFormula(diametralPitch))
        }
    }, [diametralPitch, addendum, setAddendum])
}

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

export const useNumberOfTeethFormula = (pitchDiameter, diametralPitch, outerDiameter, numberOfTeeth, setNumberOfTeeth) => {
    useEffect(() => {
    if (pitchDiameter !== "" && diametralPitch !== "" && numberOfTeeth === "") {
      setNumberOfTeeth(numberOfTeethFormula(pitchDiameter, diametralPitch));
    } else if (pitchDiameter !== "" && outerDiameter !== "" && numberOfTeeth === "") {
      setNumberOfTeeth(numberOfTeethFormula2(outerDiameter, diametralPitch));
    }
  }, [pitchDiameter, diametralPitch, outerDiameter, setNumberOfTeeth]);

}
