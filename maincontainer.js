import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Body, Title, Left, Right, Button, Toast, ActionSheet, Fab } from 'native-base';
import { View, StyleSheet } from 'react-native';
import Footer from './Footer';
import Agenda from './Agenda';

var BUTTONS = ["AC not working", "Internet very slow", "Cannot find food",  "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 3;

import FeedbackForm from './feedback';
export default class TabsAdvancedExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      active: false
    };
  }
  render() {
    return (
      <View>
      <Container>
        <Header hasTabs span toolbarDefaultBg='#00539f'>
          <Left />
          <Body style={styles.body}>
            <Title>Hackathon</Title>
          </Body>
          <Right>

          </Right>
        </Header>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="paper" /><Text>Agenda</Text></TabHeading>}>
            <Agenda />
          </Tab>
          <Tab heading={ <TabHeading><Text>Feedback</Text></TabHeading>}>
            <FeedbackForm />
          </Tab>
        </Tabs>

      </Container>

      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => {
          this.setState({ active: !this.state.active });
          ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Tell us your problem"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )
          }}
        >
        <Icon type="EvilIcons" name="bell" />
        </Fab>

      </View>
    );
  }
}

const styles= StyleSheet.create({
  headerButton: {
    top: '50%'
  },
  body: {
    left: '50%'
  }
})
