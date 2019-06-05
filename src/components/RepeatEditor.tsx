import * as React from 'react';

import Input from './Input';
import Label from './Label';

interface IProps {
  repeat: number;
  onChange: (newRepeat: number) => void;
}

const RepeatEditor: React.SFC<IProps> = ({ repeat, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newRepeat = parseInt(e.target.value, 10);
    onChange(newRepeat);
  };

  return (
    <Label label="Repeat">
      <Input type="number" min={1} value={repeat ? repeat : 1} onChange={handleChange} width="3em" />
    </Label>
  );
};

export default RepeatEditor;
