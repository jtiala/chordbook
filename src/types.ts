export interface IChordLine {
  bars?: {
    [key: string]: string[];
  };
  repeat?: number;
}

export interface IChords {
  lines?: IChordLine[];
}

export interface ILyrics {
  lines?: string[];
}

export interface ISection {
  chords?: IChords;
  lyrics?: ILyrics;
  name?: string;
}

export interface ISong {
  artist?: string;
  title?: string;
  sections?: ISection[];
}
