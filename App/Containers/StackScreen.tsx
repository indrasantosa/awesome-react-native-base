import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Content, Header, Title, Button, Left, Right, Body, Icon } from 'native-base'
import { StackNavigator } from 'react-navigation'

export default class StackScreen extends React.Component<{}> {

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
            <Title>Stack Screen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>
            This is Content Section
          </Text>
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
