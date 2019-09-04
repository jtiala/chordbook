import * as React from "react";

interface IState {
  lyricsVisible: boolean;
  chordsVisible: boolean;
  toggleLyrics: () => void;
  toggleChords: () => void;
}

interface IProps {
  children?: React.ReactNode;
}

const intialState: IState = {
  lyricsVisible: true,
  chordsVisible: true,
  toggleLyrics: () => undefined,
  toggleChords: () => undefined
};

const SettingsContext = React.createContext(intialState);

export class SettingsProvider extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    this.state = {
      lyricsVisible: true,
      chordsVisible: true,
      toggleLyrics: this.toggleLyrics,
      toggleChords: this.toggleChords
    };
  }

  public toggleLyrics = () => {
    this.setState({ lyricsVisible: !this.state.lyricsVisible });
  };

  public toggleChords = () => {
    this.setState({ chordsVisible: !this.state.chordsVisible });
  };

  public render(): React.ReactElement {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsContext;
