import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Title, Right, Content, Textarea, Form, Item, Label, Radio, Text, Button } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
const formFields = [{
  field: 'Any comments about the food ?',
  type: 'textArea'
},
  {
    field: 'Any comments about the volunteers ?',
    type: 'textArea'
  },
  {
    field: 'Any comments about the infra ?',
    type: 'textArea'
  },
  {
    field: 'How would you rate the food on a scale of 1-5',
    type: 'radioButton'
  },
  {
    field: 'How would you rate the facilites on scale of 1-5',
    type: 'radioButton'
  },
  {
    field: 'How would you rate the facilites on scale of 1-5',
    type: 'radioButton'
  }
]
export default class FeedbackForm extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: {

      }
    }
  }
  getTypeOfFormField(field, index) {
    switch(field.type) {
      case 'textArea':
        return (
          <Textarea style={styles.textArea} bordered/>
        )
        break;
      case 'radioButton':
        return (
          <Row style={styles.row}>
          <Col>
          <Text>1</Text>
          <Radio
          selected={true} />
          </Col>
          <Col>
            <Text>2</Text>
          <Radio
          selected={false} />
          </Col>
          <Col>
            <Text>3</Text>
          <Radio
          selected={false} />
          </Col>
          <Col>
            <Text>4</Text>
          <Radio
          selected={false} />
          </Col>
          <Col>
            <Text>5</Text>
          <Radio
          selected={false} />
          </Col>
          </Row>
        )
        break;
        default:
          return null;
    }
  }
  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <Form>
          {
            formFields.map((_, i) => (
              <Item stackedLabel key={`form${i}`} style={styles.item}>
                <Label style={styles.label}>{_.field}</Label>

                {this.getTypeOfFormField(_, i)}

              </Item>
            ))
          }

          </Form>
          <Content padder><Button style={styles.button} block><Text>Submit</Text></Button></Content>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textArea: {
    width: '100%'
  },
  item: {

  },
  label: {
    padding: 10
  },
  row: {
    left: '10%',
    padding: 10
  },
  content: {
    paddingRight: 10
  },
  button: {
    marginBottom: 20,
    top: '5%',
    left: '5%'
  }

});
