import React, { Component } from 'react'
import { 
    Modal, 
    View, 
    Text, 
    TextInput,
    DatePickerIOS,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../commonStyles'

const initialState = { desc: '', date: new Date() }

export default class AddTask extends Component {
    
}