import React from 'react';
import s from './dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/dialogitem'
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/dialog-reduser'


const Dialogs = (props) => {

    // let message = React.createRef();
    let state = props.store.getState().dialogsPage;
    console.log(state)

// -------------------------------------------
    let addNewMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        // let text = message.current.value;
        let text = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(text));
    }
    let newMessageBody = state.newMessageBody;
// -------------------------------------------

    let dialogsElements = state.dialogs.map(item => 
            <DialogItem name={item.name} id={item.id} />
        );

    let messagesElements = state.messages.map(item => 
            <Message message={item.message} />
        );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>            
                        <textarea placeholder="Enter your message" 
                                    // ref={message}
                                    onChange={onNewMessageChange} 
                                    value={newMessageBody} >
                        </textarea>
                    </div>
                    <div>            
                        <button onClick={addNewMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;