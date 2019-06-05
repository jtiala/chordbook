import * as React from 'react';
import styled from 'styled-components';

import { ISection } from '../types';
import { countRows } from '../utils';

import Textarea from './Textarea';
import Button from './Button';
import Heading from './Heading';

interface IProps {
  artist?: string;
  title?: string;
  sections?: ISection[];
  onChange: (e: React.FormEvent) => void;
}

const StyledJSONEditor = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 40px;
  background-color: whitesmoke;

  > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const JSONEditor: React.SFC<IProps> = ({ artist, title, sections, onChange }) => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisibility = (): void => {
    setVisible(!visible);
  };

  const parsedJSON = JSON.stringify({ artist, title, sections }, null, 2);
  const rows = countRows(parsedJSON) + 1;

  return (
    <StyledJSONEditor>
      <Heading level={3}>
        <Button as="span" onClick={toggleVisibility}>
          {visible ? 'Hide full song JSON ▲' : 'Show full song JSON ▼'}
        </Button>
      </Heading>
      {visible && <Textarea rows={rows} value={parsedJSON} onChange={onChange} />}
    </StyledJSONEditor>
  );
};

export default JSONEditor;
