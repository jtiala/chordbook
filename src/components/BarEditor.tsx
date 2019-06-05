import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Input from './Input';
import Label from './Label';

interface IProps {
  bar: string[];
  lineIndex: number;
  barIndex: number;
  onChange: (bar: string[], lineIndex: number, barIndex: number) => void;
  onDelete: (lineIndex: number, barIndex: number) => void;
  allowDelete: boolean;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;

  > input {
    flex-grow: 1;
    margin-right: 5px;
  }
`;

const BarEditor: React.SFC<IProps> = ({ bar, lineIndex, barIndex, onChange, onDelete, allowDelete }) => {
  const value = bar.join(', ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const trimmedValue =
      value.length < e.target.value.length
        ? e.target.value.replace(/[, ]+/g, ', ')
        : e.target.value.replace(/[, ]+$/g, '').replace(/[, ]+/g, ', ');

    const newBar = trimmedValue.split(',').map((chord) => chord.trim());

    onChange(newBar, lineIndex, barIndex);
  };

  const handleDelete = (): void => {
    const confirmed = confirm('Really?');

    if (confirmed) {
      onDelete(lineIndex, barIndex);
    }
  };

  return (
    <Label label={`Bar ${barIndex + 1}`}>
      <InputContainer>
        <Input onChange={handleChange} value={value} size={5} />
        <Button variant="delete" onClick={handleDelete} disabled={!allowDelete}>
          Delete
        </Button>
      </InputContainer>
    </Label>
  );
};

export default BarEditor;
