# React Native Switch Button

<div align="center">
    <img style = "width:150" src ="https://github.com/yyrdl/react-native-switch-button/blob/master/example/demo.gif" />
</div>
 
# Installation

`npm install react-native-switch-button`


# Example

[example](https://github.com/yyrdl/react-native-switch-button/blob/master/example/example.js)


```js

import React from "react";
import {View,Text} from "react-native";
import SwitchButton from "react-native-switch-button";
 

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {text:"Off"}
    }
    render(){
        return (
            <View
              style={{
                   flex:1,
                   alignItems:"center",
                   
              }}
            >
              <Text  style={{fontSize:24,padding:30}}>{"react-native-switch-button"}</Text>
              
              <Text>{"Default"}</Text>

              <SwitchButton
                 slotWidth = { 80 }
                 slotHeight= { 20 }
                 circleRadius= { 15 }
              />
             

              <Text style={{padding:20}}>{this.state.text}</Text>

              <SwitchButton
                 slotWidth = { 40 }
                 slotHeight= { 20 }
                 circleRadius= { 10 }
                 activeSlotColor="#00cc00"
                 activeCircleColor="white"
                 onChangeState= {(active)=>{this.setState({text:active ? "On":"Off"})}}
              />

               <Text style={{padding:20}}>{""}</Text>

               <SwitchButton
                 slotWidth = { 15 }
                 slotHeight= { 80 }
                 circleRadius= { 15 }
              />

              <Text style={{padding:20}}>{""}</Text>

               <SwitchButton
                 slotWidth = { 100 }
                 slotHeight= { 10 }
                 circleRadius= { 10 }
                 inactiveCircleColor="red"
                 activeCircleColor= "#00cc00"
              />
            </View>
        )
    }
}

```

# Properties

* `slotWidth` (Number) the width of the slot
* `slotHeight` (Number) the height of the slot
* `circleRadius` (Number) the radius of the circle
* `activeSlotColor` {String} the color of the slot when the switch is active,default `#ccc`
* `inactiveSlotColor` {String} the color of the slot when the switch is inactive,default `#ccc`
* `activeCircleColor` {String} the color of the circle when the switch is active,default `black`
* `inactiveCircleColor` {String} the color of the circle when the switch is inactive,default `black`

# Events

* `onChangeState` {Function}  the handler of the state-change-event

# License

MIT License