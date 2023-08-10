import React from 'react';
import { Streamchat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookies';

import { ChannelListCotainer, ChannelContainer } from './components';

const apiKey = 'yej74jgc3aeq';

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className = "app__wrapper">
        <Chat client = {client} theme = "team light">
            <ChanellListContainer

            />
            <ChannelContainer
            />
        </Chat>
    </div>
  );
}

export default App;
