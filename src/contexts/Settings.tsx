import * as React from "react";

const SettingsContext = React.createContext(null);

interface ISettingsProviderProps {
  children?: React.ReactNode;
}

interface ISettingsProviderState {
  showLyrics: boolean;
  toggleLyrics: () => void;
}

export class SettingsProvider extends React.Component<
  ISettingsProviderProps,
  ISettingsProviderState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      showLyrics: true,
      toggleLyrics: this.toggleLyrics
    };
  }

  public toggleLyrics = () => {
    this.setState({ showLyrics: !this.state.showLyrics });
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
