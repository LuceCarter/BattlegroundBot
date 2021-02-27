import 'VIPMessage.css'

export default function VIPMessage(props) {
    const { chatMessages } = props;

    return (
        chatMessages.map(message => {
            return 
            <>  <img src='emote_heart.png' />
                <h3 className="Message">{message}</h3>
            </>
        })
   );
}