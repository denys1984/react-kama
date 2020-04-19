import React from 'react';
import s from './dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/dialogitem'

const Dialogs = (props) => {
// -------------------------------------------
    let onAddNewMessage = () => {
        props.addMessage();
    }
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.changeMessageWindow(text);
    }
// -------------------------------------------

    let dialogsElements = props.dialogsPage.dialogs.map(item => 
            <DialogItem name={item.name} id={item.id} />
        );

    let messagesElements = props.dialogsPage.messages.map(item => 
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
                                    onChange={onNewMessageChange} 
                                    value={props.dialogsPage.newMessageBody} >
                        </textarea>
                    </div>
                    <div>            
                        <button onClick={onAddNewMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;