import * as React from "react";

const SettingsContext = React.createContext(null);

interface IProps {
  children?: React.ReactNode;
}

interface IState {
  lyricsVisible: boolean;
  chordsVisible: boolean;
  toggleLyrics: () => void;
  toggleChords: () => void;
}

export class SettingsProvider extends React.Component<IProps, IState> {
  constructor(props: any) {
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

  public render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export const SettingsConsumer = SettingsContext.Consumer;
