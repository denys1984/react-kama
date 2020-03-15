import React from 'react';
import s from './dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/dialogitem'


const Dialogs = (props) => {
    let message = React.createRef();
    let sendMsg = () => {
        let text = message.current.value;
        alert(text);
    }

    let dialogsElements = props.dialogs.dialogs.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} />
        )
    });

    let messagesElements = props.dialogs.messages.map(item => {
        return (
            <Message message={item.message} />
        )
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>            
                    <textarea ref={message}></textarea>
                </div>
                <div>            
                    <button onClick={sendMsg}>Add post</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;