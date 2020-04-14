import React from 'react';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialog-reduser'
import Dialogs from './dialogs';
import { connect } from 'react-redux';

// let mapStateToProps = (state) => {
//     return {
//         dialogsPage: state.dialogsPage
//     }
// };
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(sendMessageCreator());
//         },
//         changeMessageWindow: (text) => {
//             dispatch(updateNewMessageBodyCreator(text))
//         }
//     }
// }

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

const DialogsContainer = (props) => {

    let state = props.store.getState();
// -------------------------------------------
    let addMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let changeMessageWindow = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text));
    }
// -------------------------------------------

    return <Dialogs addMessage={addMessage} 
                    changeMessageWindow={changeMessageWindow}

                    dialogsPage={state.dialogsPage} />
}

export default DialogsContainer;