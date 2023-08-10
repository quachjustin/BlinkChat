import React from 'react';

import { ChannelList , useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookies';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

import blinkchaticon from '../assets/blinkchaticon.png'

//blinkchaticon
//alt = blinkicon

const SideBar = () => (
    <div className = "channel-list_sidebar">
        <div className = "channel-list__sidebar__icon1">
            <div className = "icon1__inner">
                <img src = { blinkchaticon } alt = "blinkicon" width = "30" />
            </div>
        </div>
    </div>
)

const ChannelListContainer = () => {
  return (
    <div>
        ChannelListContainer
    </div>
  )
}

export default ChannelListContainer;
