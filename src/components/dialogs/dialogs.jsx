import React from 'react';
import s from './dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/dialogitem'


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} />
        )
    });

    let messagesElements = props.messages.map(item => {
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
            </div>
        </div>
    )
}

export default Dialogs;