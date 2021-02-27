import './Message.css'
export default function Message(props) {
    const { chatMessages } = props;    
    return (
        chatMessages.map(message => {    
            if(message.isVIP === true) {
                return (
                <div className="MessageContainer VIP">                    
                        <h3 className="Message VIP"><span><img src='emote_heart.png' height='25' width='25' alt="emote heart"/></span>{message.chatMessage}</h3>                                        
                </div>
                )}
            else {
                return (
                    <div className="MessageContainer">
                        <h3 className="Message">{message.chatMessage}</h3>
                    </div>
                )
            }
        })
   );
};

