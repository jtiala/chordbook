import * as React from "react";
import styled from "styled-components";

import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";

interface IProps {
  bar: string[];
  index: number;
  onChange: (index: number, bar: string[]) => void;
  onDelete: (index: number) => void;
  allowDelete: boolean;
}

const BarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: silver;
`;

const BarHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: left;
  font-size: 12px;

  > * {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background-color: silver;
  }

  > :not(:last-child) {
    margin-right: 5px;
  }

  > :not(:first-child) {
    opacity: 0.5;

    :hover {
      opacity: 1;
    }
  }
`;

const StyledBarEditor = styled.div`
  display: flex;
  flex-direction: column;

  > input {
    flex-grow: 1;
    margin-right: 5px;
  }
`;

const BarEditor: React.SFC<IProps> = ({
  bar,
  index,
  onChange,
  onDelete,
  allowDelete
}) => {
  const value = bar.join(", ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const trimmedValue =
      value.length < e.target.value.length
        ? e.target.value.replace(/[, ]+/g, ", ")
        : e.target.value.replace(/[, ]+$/g, "").replace(/[, ]+/g, ", ");

    const newBar = trimmedValue.split(",").map(chord => chord.trim());

    onChange(index, newBar);
  };

  const handleDelete = (): void => {
    const confirmed = window.confirm("Really?");

    if (confirmed) {
      onDelete(index);
    }
  };

  return (
    <StyledBarEditor>
      <BarHeader>
        <Heading level={5}>{`Bar ${index + 1}`}</Heading>
        <Button as="span" onClick={handleDelete} disabled={!allowDelete}>
          Delete
        </Button>
      </BarHeader>
      <BarContent>
        <Input onChange={handleChange} value={value} size={5} />
      </BarContent>
    </StyledBarEditor>
  );
};

export default BarEditor;
