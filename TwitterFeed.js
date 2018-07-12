import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { Linking } from 'react-native';



export default class TwitterFeed extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: false,
      feed: [],
    };
  }

  componentWillMount() {
  this.setState({
    isFetching: true
  });
  fetch('https://alc.dev.tnedevs.com/hackathon/api/twitterFeed', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({})
    })
    .then((response) => {
      // console.log("response", JSON.stringify(response.json()));
        feed: response.json().then((data) => {
          this.setState({
            feed: data,
            isFetching: false
          })
        })

    })
    .catch((err) => {
       console.log(err, 'err');
      isFetching: false
    });
  }

  _handlePress = (href) => {
    console.log('heerre', href);
    Linking.openURL('http://www.twitter.com/statuses/'+href);
    this.props.onPress && this.props.onPress();
  };
  render() {
    return (
      <Container>
        <Content>
          <List>
          {

            (this.state.feed || []).map((_, i) => (<ListItem avatar key={i}>
                <Left>
                  <Thumbnail source={{ uri: _.user.profile_image_url }} />
                </Left>
                <Body>
                  <Text>{_.user.name}</Text>
                  <Text note>{_.text}</Text>
                </Body>
                <Right>

                </Right>
              </ListItem>
            )
            )
          }

          </List>
        </Content>
      </Container>
    );
  }
}
