export default function Message(props) {
    const { chatMessages } = props;
    return (
        chatMessages.map(message => {
            return <h3>{message}</h3>
        })
   );
};

