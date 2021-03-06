function calculateVip(badges) {
  return badges["mod"] === true ||
  badges["subscriber"] === 1 || 
  badges["badges"]["founder"] === 1 ||
  badges["badges"]["vip"] === "1"
}

function formatMessage(chatMessageEvent) {
  const isVip = chatMessageEvent.tags["badges"] !== null ? calculateVip(chatMessageEvent.tags) : false;
  const vipClass = isVip ? ' VIP' : '';

  return (
    <div className={`MessageContainer${vipClass}`} key={chatMessageEvent.tags['id']}>
      {isVip && (
        <span className="EmoteContainer">
          <img src='emote_heart.png' height='25' width='25' alt="emote heart"/>
        </span>
      )}
        <span>
          <h3 className="Message Username">{chatMessageEvent.tags['username']}:</h3>
        </span>
        <span>
          <h3 className="Message">{chatMessageEvent.message}</h3>
        </span>
    </div>
  )
}

export default function ChatMessages(props) {
  const { messages } = props;

  return (
    <>
    {messages.map(message => formatMessage(message))}
  </>)
}