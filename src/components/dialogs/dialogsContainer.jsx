import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialog-reduser';
import Dialogs from './dialogs';
import { connect } from 'react-redux';

    let mapStateToProps = (state) => {
        return {
            dialogsPage : state.dialogsPage
        }
    };
    let mapDispatchToProps = (dispatch) => {
        return {
            addMessage : () => {
                dispatch(sendMessageCreator());
            },
            changeMessageWindow : (text) => {
                dispatch(updateNewMessageBodyCreator(text));
            }
        }
    };

    
    const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;