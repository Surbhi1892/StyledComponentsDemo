import {Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const deviceRatio =  (deviceHeight+deviceWidth)/2

export default 
{    
    // device dimension
     deviceRatio:deviceRatio,
     deviceWidth : deviceWidth,
     deviceHeight : deviceHeight,

     // responsive font sizes
     font_mini:deviceWidth*2.6/100,
     font_small:deviceWidth*3/100,
     font_basic:deviceWidth*3.4/100,
     font_std:deviceWidth*4.2/100,
     font_medium:deviceWidth*4.8/100,
     font_large:deviceWidth*5.5/100,
     font_xlarge:deviceWidth*6.5/100,
     font_xxlarge:deviceWidth*7.5/100,
     font_heading:deviceWidth*8.5/100,

     // margins & padding

     margin5 : deviceWidth*5/100,
     margin10 : deviceWidth*10/100

}



