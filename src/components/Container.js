
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import styled from 'styled-components/native';
import { colors } from './../theme'

const Container = (props) => (
  <SafeAreaView>
    <StatusBar barStyle={'dark-content'} backgroundColor={colors.whiteColor}/>
    <Content>
       {props.children}
    </Content>
  </SafeAreaView>
);


export default Container

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Content = styled.View`
  flex: 1;
  background-color: ${colors.whiteColor};
`;


