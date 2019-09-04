export interface IBars {
  [key: string]: string[];
}

export interface IChordLine {
  bars?: IBars;
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

export interface IBreadcrumb {
  title: string;
  link?: string;
}
