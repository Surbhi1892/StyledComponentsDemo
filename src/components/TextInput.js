import React from 'react';
import PropTypes from 'prop-types';
import { colors, fonts, images } from '../theme';
import { styled } from 'styled-components/native';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const TextInput = (props) => {

    const {
        placeholder,
        editable,
        autofocus,
        onEndEditing,
        maxLength,
        secureTextEntry,
        onChangeText,
        keyboardtype,
        value,
        placeholderTextColor,
        isSelected

    } = props


    return (
        <Container isSelected={isSelected}>
            <Content
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                returnKeyType="done"
                editable={editable}
                value={value}
                autoFocus={autofocus}
                keyboardType={keyboardtype}
                maxLength={maxLength}
                secureTextEntry={secureTextEntry}
                onChangeText={(text) => onChangeText(text)}
                onEndEditing={() => onEndEditing()} />
            {isSelected &&
                <ImageView>
                    <Image source={images.flash} resizeMode='contain' />
                </ImageView>
            }
        </Container>
    )
}

TextInput.propTypes =
{
    onChangeText: PropTypes.func,
    onEndEditing: PropTypes.func,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    editable: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
    autoFocus: PropTypes.bool,
    textInputStyle: PropTypes.object,
    value: PropTypes.string,
    maxLength: PropTypes.number,
    placeholderTextColor: PropTypes.string,
    isSelected: PropTypes.bool

}

TextInput.defaultProps =
{
    onChangeText: function () { },
    onEndEditing: function () { },
    placeholder: "",
    editable: true,
    secureTextEntry: false,
    keyboardType: "default",
    autoFocus: false,
    textInputStyle: {},
    value: "",
    maxLength: undefined,
    placeholderTextColor: colors.grayColor,
    isSelected: false
}

export default TextInput;


const Container = styled.View`
  background-color:${props => props.isSelected ? colors.selectedInput : colors.lightGray};
  border-radius:10px;
  height:60px;
  margin-top:30px;
  font-weight : 500;
  padding-horizontal : 20px;
  flex-direction:row;
  align-items:center
`

const Content = styled.TextInput`
  font_size: ${fonts.font_medium}px;
  color:${colors.darkColor};
  border-radius:10px;
  height:60px;
  font-weight : 500;
  flex:1;
`

const ImageView = styled.View`
  height:22px;
  width:22px;
  align-items:center;
  justify-content:center;
  background-color:${colors.whiteColor};
  border-radius:15px
`


const Image = styled.Image`
  height:12px;
  width:12px;

`



