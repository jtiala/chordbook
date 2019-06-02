import * as React from "react";

import { ILyrics } from "../types";

import Label from "./Label";
import Textarea from "./Textarea";

interface IProps {
  lyrics: ILyrics;
  onChange: (lyrics: ILyrics) => void;
}

const LyricsEditor: React.SFC<IProps> = ({ lyrics, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ lines: e.target.value.split("\n").map(line => line.trim()) });
  };

  return (
    <Label label="Lyrics">
      <Textarea
        rows={lyrics.lines.length ? lyrics.lines.length + 1 : 2}
        value={lyrics ? lyrics.lines.join("\n") : null}
        onChange={handleChange}
      />
    </Label>
  );
};

export default LyricsEditor;
