import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts } from './../theme'
import PropTypes from 'prop-types';
import { styled } from 'styled-components/native';

const Button = (props) => {
    const
        {
            title,
            onPress,
        } = props


    return (
        <Container onPress={onPress}>
            <Title>{title}</Title>
        </Container>
    )
}

Button.propTypes =
{
    onPress: PropTypes.func,
    title: PropTypes.string,
    style: PropTypes.any,
    titleStyle: PropTypes.object,
}

Button.defaultProps =
{
    title: "Button",
    onPress: function () { },
    style: {},
    titleStyle: {},
}

export default Button


const Container = styled.TouchableOpacity`
  backgroundColor:${colors.baseColor};
  border-radius:10px;
  height:60px;
  margin-top:80px; 
  margin-bottom:30px; 
  align-items: center;
  justify-content: center;
`

const Title = styled.Text`
  color:${colors.whiteColor};
  font-size:${fonts.font_medium}px;
  font-weight : 600;

`



