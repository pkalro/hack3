import React, { Component } from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Accordion, View} from 'native-base';
const agendaList=[
  {
    title:
    { text: 'Registration',
     startTime: '8:30 A.M',
      endTime: '10:30 A.M',
      imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734'
    },
     content:{imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734',
      text: 'Registration will be done at Amphitheatre'
   }
  },
{
  title:
  { text: 'CEO Address',
   startTime: '10:00 AM',
    endTime: '10:30 A.M', imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/34721569_1911292082223231_5978878330420592640_o.jpg?_nc_cat=0&oh=db15f4d9832cc259e5920a28d2897b6c&oe=5BB1AC24'
  },
   content:
   { imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/34721569_1911292082223231_5978878330420592640_o.jpg?_nc_cat=0&oh=db15f4d9832cc259e5920a28d2897b6c&oe=5BB1AC24',
    text: 'CEO Mr.Sumit Mitra will kick off Tesco hackathon 2018.'
 }
},
{
  title:
  { text: 'Hack begins',
   startTime: '10:30  AM (12th July)',
    endTime: '10:30 A.M (13th July)', imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734'
  },
   content:
   { imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734',
    text: 'Start of Hacking from Sonic 2nd Floor'
 }
},
{
  title:
  { text: 'Hackathon - Idea Pitching',
   startTime: '11:00 A.M (13th July)',
    endTime: '12:00 P.M (13th July)', imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734'
  },
   content:
   { imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734',
    text: '3 min for Pitch and 2 min for Q & A per Team.'
 }
},
{
  title:
  { text: 'Regional Result Announcement',
   startTime: '1:30 P.M (13th July)',
    endTime: '1:30 P.M (13th July)', imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734'
  },
   content:
   { imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734',
    text: 'Regional Result Announcement for Group B at Amphitheatre.'
 }
},
{
  title:
  { text: 'Global Result Announcement',
   startTime: '4:30 P.M (13th July)',
    endTime: '4:30 P.M (13th July)', imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734'
  },
   content:
   { imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734',
    text: 'Global Result Announcement at Amphitheatre.'
 }
}];
export default class CardImageExample extends Component {
  renderHeader(title) {
    return (
      <Card>
      <CardItem>
      <Left>
      <Thumbnail source={{uri: title.imgUrl}} />
      <Body>
        <Text>{title.text}</Text>
        <Text note>{title.startTime + ' - ' + title.endTime}</Text>
      </Body>
    </Left>
    <Icon style={{ fontSize: 18 }} name="add-circle" />
    </CardItem>
    </Card>
  )
  }
  renderContent(content) {
    return(
      <View>
          <Image source={{uri: content.imgUrl}} style={{height: 200, width: null, flex: 1}}/>
          <Text style={styles.cardText} padder>{content.text}</Text>
      </View>
    )
  }
  render() {
    return (
      <Container>
        <Content>

            <Accordion
              dataArray={agendaList}
              iconStyle={{ color: 'blue'}}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
            />


        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  cardText: {
    padding: 10,
    fontSize: 14
  }
})
