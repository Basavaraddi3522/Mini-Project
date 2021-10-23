import React, { Component } from "react";
import {Toast} from 'react-native-toast-message';

export const ToastMessage = (type,text2) => {
    Toast.show({
        type: type, 
        position: "top",
        text1: "",
        text2: text2,
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40
    })
}