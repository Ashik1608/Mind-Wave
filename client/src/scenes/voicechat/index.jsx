import React from 'react';

const VoiceChat = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <iframe
                src="https://voice-chat-b88f1.web.app/"
                width="100%"
                height="600px"
                title="External Page"
            >
                Your browser does not support iframes.
            </iframe>
        </div>
    );
};

export default VoiceChat;