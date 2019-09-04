import * as React from "react";

import { ILyrics } from "../types";

import Label from "./Label";
import Textarea from "./Textarea";

interface IProps {
  lyrics?: ILyrics;
  onChange: (lyrics: ILyrics) => void;
}

const LyricsEditor: React.SFC<IProps> = ({ lyrics, onChange }) => {
  const lines =
    typeof lyrics === "object" && Array.isArray(lyrics.lines)
      ? lyrics.lines
      : [];

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    onChange({ lines: e.target.value.split("\n") });
  };

  return (
    <Label label="Lyrics">
      <Textarea
        rows={lines.length ? lines.length + 1 : 2}
        value={lines.join("\n")}
        onChange={handleChange}
      />
    </Label>
  );
};

export default LyricsEditor;
