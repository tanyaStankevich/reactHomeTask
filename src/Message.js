import './App.css';

function Message(props){
    return (
        <div>
            <h3 className='message'>{props.mes}</h3>
        </div>
    );
}

export default Message;