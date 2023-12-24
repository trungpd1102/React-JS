import { SyntheticEvent, FormEvent } from 'react';
import { useState } from 'react';

type sendStatus = 'typing' | 'sending' | 'sent'

export default function FeedbackForm() {
    const [text, setText] = useState<string>('');
    // const [isSending, setIsSending] = useState(false);
    // const [isSent, setIsSent] = useState(false);
    const [status, setStatus] = useState<sendStatus>('typing')

   
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setStatus('sending');

        await sendMessage(text);

        setStatus('sent')
    }

    const isSending = status === 'sending';
    const isSent = status === 'sent';
   
    if (isSent) {
        return <h1>Thanks for feedback!</h1>
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>How was your stay at The Prancing Pony?</p>
            <textarea
                disabled={isSending}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <br />
            <button
                disabled={isSending}
                type="submit"
            >
                Send
            </button>
            {isSending && <p>Sending...</p>}
        </form>
    );
}

// Pretend to send a message.
function sendMessage(text: string) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}
