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
                 onChangeState= {()=>{}}
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