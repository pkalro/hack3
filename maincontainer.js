import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Body, Title, Left, Right, Button, Toast, ActionSheet, Fab, Form, Item, Input, Label } from 'native-base';
import { View, StyleSheet, Modal } from 'react-native';
import TwitterFeed from './TwitterFeed';
import Footer from './Footer';
import Agenda from './Agenda';
import { Notifications } from 'expo';

import url from './url';

var BUTTONS = ["AC not working", "Internet very slow",  "Cancel"];
var DESTRUCTIVE_INDEX = 2;
var CANCEL_INDEX = 2;

import FeedbackForm from './feedback';
export default class TabsAdvancedExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      active: false,
      showModal: false,
      pillarInfo: '',
      teamInfo: ''
    };
    this.submitSosRequest = this.submitSosRequest.bind(this);
  }
  componentDidUpdate() {
    if(this.state.clicked === 'Cancel') {
      this.setState({
      clicked: '',
      showModal: false,
      active: false,
      showToast: false,
      pillarInfo: '',
      teamInfo: ''
    });
    }
  }
  handleTeamChange(e) {
    const value = e.target.value;
    this.setState({
      teamInfo: value
    });
  }
  handlePillarChange(e) {
    const value = e.target.value;
    this.setState({
      pillarInfo: value
    });
  }
  submitSosRequest() {
    if(!this.state.teamInfo || !this.state.pillarInfo) {

    } else {
      this.setState({
        showLoader: true
      });
      const deviceId = Notifications.getExpoPushTokenAsync()
      .then((deviceId) => {
        console.log('device', deviceId);
        const { teamInfo, pillarInfo, clicked } = this.state;
        fetch(url.submitSosRequest, {
          'method': 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            deviceId,
            teamNumber: teamInfo,

            location: pillarInfo,
            message: clicked
          })
        });
        this.setState({ active: !this.state.active, showModal: !this.state.showModal })
  });


    };

  }
  render() {
    return (
      <View>
      <Container>
      {this.state.showToast && Toast.show({
                text: this.state.toastMessage,
                buttonText: "Okay",
                duration: 3000
              })}
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
          <Tab heading={ <TabHeading><Text>#Trending</Text></TabHeading>}>
            <TwitterFeed />
          </Tab>
        </Tabs>
      </Container>
      { this.state.showModal && <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => {
              this.setState({ active: !this.state.active, showModal: !this.state.showModal })
          }}>
          <View style={{marginTop: 22}}>
            <View>
            <Form>
            { this.state.clicked!=='Cancel' && <Text style={styles.sosButton}>Reason: {this.state.clicked}</Text>}
          <Item floatingLabel>
            { !this.state.teamInfo && <Label>Enter your team number</Label>}
            <Input value={this.state.teamInfo} onChangeText={(text) => { this.setState({ teamInfo: text })}}/>
          </Item>
          <Item floatingLabel>
            { !this.state.pillarInfo && <Label>Location (ex. Pillar A)</Label>}
            <Input value={this.state.pillarInfo} onChangeText={(text) => { this.setState({ pillarInfo: text })}}/>
          </Item>
          <Container>
          <Button
            onPress={() => {
                  this.submitSosRequest();


            }} block style={styles.sosButton}>
            <Text>Submit</Text>
          </Button>
          </Container>
        </Form>

            </View>
          </View>
        </Modal>
      }

      <Fab
        active={this.state.active}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => {
          this.setState({ active: !this.state.active, showModal: !this.state.showModal });
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
  },
 sosButton: {
   margin: 10
 }
})
