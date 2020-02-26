import React from 'react';
import s from './dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: "Denys" },
        { id: 2, name: "Valera" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Lesha" },
        { id: 5, name: "Oleg" },
        { id: 6, name: "Sergey" }
    ]
    let dialogsElements = dialogs.map(item => {
        return (
            <DialogItem name={item.name} id={item.id} />
        )
    });
    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "hello 1" },
        { id: 3, message: "hello 3434" },
        { id: 4, message: "hello 3434" },
        { id: 5, message: "hello 3434" }
    ]
    let messagesElements = messages.map(item => {
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