/**
 * Created by yyrdl on 2018/6/16. MIT License
 * 
 * **/

import React from "react";
import {View,ViewPropTypes,TouchableWithoutFeedback,Animated} from "react-native";

import PropTypes from 'prop-types';

class SwitchButton extends React.PureComponent{

    static propTypes = {
        ...(ViewPropTypes || View.PropTypes),
        slotWidth:PropTypes.number.isRequired,
        slotHeight:PropTypes.number.isRequired,
        circleRadius:PropTypes.number.isRequired,
        activated:PropTypes.bool,
        onChangeState:PropTypes.func,
        activeSlotColor:PropTypes.string,
        inactiveSlotColor:PropTypes.string,
        activeCircleColor:PropTypes.string,
        inactiveCircleColor:PropTypes.string         
    };

    constructor(props){

        super(props);

        this.state = {
            active:false,
            activeSlotColor : props.activeSlotColor || "#ccc",
            activeCircleColor :  props.activeCircleColor || "black",
            inactiveSlotColor : props.inactiveSlotColor || "#ccc",
            inactiveCircleColor : props.inactiveCircleColor || "black",
            slotRadius :  Math.floor((props.slotHeight > props.slotWidth ? props.slotWidth : props.slotHeight)/2),
            isHorizontal : props.slotWidth > props.slotHeight,
       
            circlePositionX : new Animated.Value(0),
            activeSlotWidth : new Animated.Value(0),
        
            circlePositionY : new Animated.Value(0),
            activeSlotHeight : new Animated.Value(0)
        };


        this.state.circleRadius = props.circleRadius > this.state.slotRadius ? props.circleRadius : this.state.slotRadius;
      
        if(this.state.circleRadius > this.state.slotRadius){

            this.state.boxWidth = props.slotWidth + (this.state.circleRadius - this.state.slotRadius)*2;
            this.state.boxHeight = this.state.isHorizontal ? this.state.circleRadius * 2: props.slotHeight + (this.state.circleRadius - this.state.slotRadius) *2;

        }else{
            this.state.boxWidth = props.slotWidth;
            this.state.boxHeight = props.slotHeight;
        } 
    }

    componentDidMount(){
        if(!!this.props.activated != this.state.active){
            this.onPress();
        }
    }

    onPress(){

        let active = ! this.state.active;

        if("function" === typeof this.props.onChangeState){

            this.props.onChangeState(active);
        }

        this.setState({
            active:active
        });
        
        let circleAnimationConfig = {
             duration:200
        };

        let slotAnimationConfig = {
            duration:200
        };

      
        
        if(this.state.isHorizontal){

            circleAnimationConfig.toValue = active ? this.state.boxWidth - this.state.circleRadius*2 : 0;
            slotAnimationConfig.toValue  = active ? this.props.slotWidth : this.state.circleRadius*2;
        }else{
            
            circleAnimationConfig.toValue = active ? this.state.boxHeight -this.state.circleRadius*2 : 0 ;
            slotAnimationConfig.toValue  = active ? this.props.slotHeight: this.state.circleRadius*2;
            
        }

        Animated.timing(this.state.isHorizontal ? this.state.circlePositionX : this.state.circlePositionY,circleAnimationConfig).start();

        Animated.timing(this.state.isHorizontal ? this.state.activeSlotWidth : this.state.activeSlotHeight,slotAnimationConfig).start();
       
    }

    render(){
        return (
            <TouchableWithoutFeedback
               onPress={this.onPress.bind(this)}
            >

               <View
                 style={{
                      position:"relative",
                      height:this.state.boxHeight ,
                      width:this.state.boxWidth
                 }}
               >
                 <View
                     style={{
                          width:this.props.slotWidth,
                          height:this.props.slotHeight,
                          borderRadius:this.state.slotRadius,
                          backgroundColor:this.state.inactiveSlotColor,
                          position:"relative",
                          left:0,
                          top:0,
                          marginLeft:this.state.boxWidth > this.props.slotWidth ? (this.state.boxWidth - this.props.slotWidth)/2:0,
                          marginTop:this.state.boxHeight > this.props.slotHeight ? (this.state.boxHeight - this.props.slotHeight)/2:0,
                    }}
                >
                 <Animated.View
                    style = {{
                        width:this.state.isHorizontal ? this.state.activeSlotWidth : this.props.slotWidth,
                        height:this.state.isHorizontal ? this.props.slotHeight : this.state.activeSlotHeight,
                        backgroundColor:this.state.activeSlotColor,
                        borderRadius:this.state.slotRadius
                    }}
                  ></Animated.View>

                </View>

                <Animated.View
                   style={{
                       width:this.props.circleRadius*2,
                       height:this.props.circleRadius*2,
                       backgroundColor:this.state.active ? this.state.activeCircleColor : this.state.inactiveCircleColor,
                       borderRadius:this.state.circleRadius,
                       position:"relative",
                       left: this.state.circlePositionX,
                       top:this.state.circlePositionY,
                       marginTop:-1*(this.state.isHorizontal ? this.props.circleRadius+this.state.slotRadius : this.props.circleRadius+this.props.slotHeight-this.state.slotRadius)     
                   }}
                ></Animated.View>

               </View>

            </TouchableWithoutFeedback>
        )
    }
}

export default SwitchButton;