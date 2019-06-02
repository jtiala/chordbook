import * as React from "react";

import { IChords } from "../types";

import Input from "./Input";
import Label from "./Label";

interface IProps {
  bar: string[];
  lineIndex: number;
  barIndex: number;
  onChange: (bar: string[], lineIndex: number, barIndex: number) => void;
}

const BarEditor: React.SFC<IProps> = ({
  bar,
  lineIndex,
  barIndex,
  onChange
}) => {
  const value = bar.join(", ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue =
      value.length < e.target.value.length
        ? e.target.value.replace(/[, ]+/g, ", ")
        : e.target.value.replace(/[, ]+$/g, "").replace(/[, ]+/g, ", ");

    const newBar = trimmedValue.split(",").map(chord => chord.trim());

    onChange(newBar, lineIndex, barIndex);
  };

  return (
    <Label label={`Bar ${barIndex + 1}`}>
      <Input onChange={handleChange} value={value} />
    </Label>
  );
};

export default BarEditor;
