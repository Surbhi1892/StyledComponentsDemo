import React, { useState } from 'react';
import Container from '../../components/Container';
import { Text } from 'react-native';
import { styled } from 'styled-components/native';
import { colors, fonts } from '../../theme';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
const LoginScreen = (props) => {

  const [state, setState] = useState(
    {
      username: "Dstudio_agency",
      password: ""
    }
  )

  return (
    <Container>
      <Content>
        <CircleView />
        <Heading>Hey,</Heading>
        <Heading>Login Now.</Heading>
        <TextView1>
          <Label>If you are new / </Label>
          <Label1 >Create New </Label1>
        </TextView1>
        <TextInput
          placeholder={"User Name"}
          isSelected={true}
          value={state.username}
          onChangeText={(text) => setState({ ...state, username: text })}
          placeholderTextColor={colors.grayColor} />
        <TextInput
          placeholder={"Password"}
          value={state.password}
          secureTextEntry={true}
          maxLength={8}
          onChangeText={(text) => setState({ ...state, password: text })}
          placeholderTextColor={colors.grayColor} />
        <TextView>
          <Label>Forgot Password?/ </Label>
          <Label1>Reset</Label1>
        </TextView>
        <Button title="Login" />
        <Label color="center">Skip Now </Label>
      </Content>
    </Container>
  );
}

export default LoginScreen;

const Content = styled.View`
  flex: 1;
  background-color: ${colors.whiteColor};
  margin:${fonts.margin10}px;
`
const CircleView = styled.View`
  height:45px;
  background-color: ${colors.darkColor};
  width : 24px;
  border-top-right-radius :30px;
  border-bottom-right-radius :30px;
  margin-bottom : 100px
`
const Heading = styled.Text`
  font-size : ${fonts.font_heading}px;
  color : ${colors.darkColor};
  font-weight : 900;
`

const Label = styled.Text`
  font-size : ${fonts.font_std}px;
  color : ${colors.lightGrey};
  font-weight : 500;
  text-align : center
`

const Label1 = styled.Text`
  font-size : ${fonts.font_medium}px;
  color : ${colors.darkGray};
  font-weight : 600
`

const TextView = styled.Text`
  margin-top : 30px
`

const TextView1 = styled.Text`
  margin-top : 25px;
  margin-bottom : 40px;
`



