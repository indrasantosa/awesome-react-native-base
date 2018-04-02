import * as React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Container, Content, Header, Title, Button, Left, Right, Body, Icon} from 'native-base'
import {StackNavigator} from 'react-navigation'
import {observer} from 'mobx-react'
import todoList from '../MobX/todoList'

@observer
export default class ListScreen extends React.Component<{}> {

  componentDidMount() {
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>List Screen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          {todoList.list.map((item) => {
            return (
              <Text>
                {item}
              </Text>
            )
          })}
          <Button onPress={() => todoList.addTodo('Hello World')}>
            <Text>Add Item</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
