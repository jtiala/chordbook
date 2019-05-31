import * as React from "react";

import { ISection } from "../types";

import Textarea from "./Textarea";

interface IProps {
  sections?: ISection[];
  onChange?: (e: React.FormEvent) => void;
}

const SectionEditor: React.SFC<IProps> = ({ sections, onChange }) => (
  <Textarea
    rows={20}
    onChange={onChange}
    value={JSON.stringify(sections, null, 2)}
  />
);

export default SectionEditor;
