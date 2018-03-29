import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Content, Header, Title, Button, Left, Right, Body, Icon } from 'native-base'
import { Font } from 'expo'
import { StackNavigator } from 'react-navigation'

export default class App extends React.Component<{}> {

  componentDidMount() {
    Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
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
            <Title>Header</Title>
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