import * as React from 'react';
import {
  StyledSearchBox,
  SearchContainer,
  SearchIcon,
  Input,
  HiyaMessage,
} from './style';
import store from '~/renderer/views/app/store';
import { fetchHiyaMessage } from './../../constants/hiya';

const props: any = {
  isFixed: false,
  style: '',
};

export class Search extends React.Component {
  public hiyaNotifications: string[] = [
    'How are you today?',
    `Search on Google or enter address`,
    'Where do you want to go today?',
    "What's on your mind?",
  ];

  constructor(props) {
    super(props);
    this.props = props;
  }

  public hiyaBox = document.getElementById('hiya');

  public state = {
    hiyaState: false,
    hiyaText: this.hiyaNotifications[
      Math.floor(Math.random() * this.hiyaNotifications.length)
    ],
    focused: false
  };

  componentDidMount() {
    document
      .getElementById('hiya')
      .addEventListener('animationiteration', () => {
        const hiyaText = this.hiyaNotifications[
          Math.floor(Math.random() * this.hiyaNotifications.length)
        ];

        this.setState({
          hiyaText,
        });
      });
  }

  onFocus(e: any) {
    this.setState({ hiyaState: true, focused: true });
    document
      .getElementById('hiya')
      .removeEventListener('animationiteration', () => {});
  }

  onBlur(e: any) {
    if (!e.target.value) {
      this.setState({ hiyaState: false, focused: false });
      setTimeout(() => {
        document
          .getElementById('hiya')
          .addEventListener('animationiteration', () => {
            const hiyaText = this.hiyaNotifications[
              Math.floor(Math.random() * this.hiyaNotifications.length)
            ];

            this.setState({
              hiyaText,
            });
          });
      }, 1000);
    } else {
      this.setState({ focused: false });
    }
  }

  render() {
    const { isFixed, style } = this.props;

    return (
      <StyledSearchBox isFixed={isFixed} style={style} isFocused={this.state.focused}>
        <SearchContainer>
          <SearchIcon isFocused={this.state.hiyaState} />
          <Input
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            onFocus={() => this.onFocus(event)}
            onBlur={() => this.onBlur(event)}
          />
          {this.state.hiyaState == false && (
            <HiyaMessage id="hiya">{this.state.hiyaText}</HiyaMessage>
          )}
        </SearchContainer>
      </StyledSearchBox>
    );
  }
}
