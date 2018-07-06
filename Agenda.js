import React, { Component } from 'react';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Accordion, View} from 'native-base';
const agendaList=[
{
  title:
  { text: 'CEO Address',
   startTime: '11:00 AM',
    endTime: '12:00 PM', imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/34721569_1911292082223231_5978878330420592640_o.jpg?_nc_cat=0&oh=db15f4d9832cc259e5920a28d2897b6c&oe=5BB1AC24'
  },
   content:
   { imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/34721569_1911292082223231_5978878330420592640_o.jpg?_nc_cat=0&oh=db15f4d9832cc259e5920a28d2897b6c&oe=5BB1AC24',
    text: 'CEO Mr.Sumit Mitra will kick off Tesco hackathon 2018 and will look to motivate the participants ...'
 }
},
{
  title:
  { text: 'Breakfast',
   startTime: '10:00 AM',
    endTime: '11:00 AM', imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734'
  },
   content:
   { imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734',
    text: 'Breakfast will be served in ECafe on every floor'
 }
},
{
  title:
  { text: 'Lunch',
   startTime: '2:00 PM',
    endTime: '3:00 PM', imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734'
  },
   content:
   { imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/12079168_1043065615712553_8608653619963882067_n.png?_nc_cat=0&oh=5dd348193b4945f36056f2b5bc23eec0&oe=5B76A734',
    text: 'Lunch will be served in ECafe on every floor'
 }
},
{
  title:
  { text: 'Tech talk by XX',
   startTime: '4:00 PM',
    endTime: '4:30 PM', imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/34348141_1905672732785166_194860089239142400_o.jpg?_nc_cat=0&oh=2257257360d0581d8fe3c08fcd95b2d7&oe=5BACAA2A'
  },
   content:
   { imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/34348141_1905672732785166_194860089239142400_o.jpg?_nc_cat=0&oh=2257257360d0581d8fe3c08fcd95b2d7&oe=5BACAA2A',
    text: 'Tech talk by XX. He has 20 years experience in XX. Will look to motivate to the participants.'
 }
},
{
  title:
  { text: 'Dinner',
   startTime: '8:00 PM',
    endTime: '9:30 PM', imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/34348141_1905672732785166_194860089239142400_o.jpg?_nc_cat=0&oh=2257257360d0581d8fe3c08fcd95b2d7&oe=5BACAA2A'
  },
   content:
   { imgUrl:'https://scontent.fblr2-1.fna.fbcdn.net/v/t1.0-9/34348141_1905672732785166_194860089239142400_o.jpg?_nc_cat=0&oh=2257257360d0581d8fe3c08fcd95b2d7&oe=5BACAA2A',
    text: 'Dinner will be served.'
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
