import React from 'react';

import { ChannelList , useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

import Blinkchaticon from '../assets/blinkchaticon.png'
import Logouticon from '../assets/logout.png'

//blinkchaticon
//alt = blinkicon

const SideBar = () => (
    <div className = "channel-list_sidebar">
        <div className = "channel-list__sidebar__icon1">
            <div className = "icon1__inner">
                <img src = { Blinkchaticon } alt = "Blinkicon" width = "30" />
            </div>
        </div>
        <div className = "channel-list__sidebar__icon2">
            <div className = "icon1__inner">
                <img src = { Logouticon } alt = "Logout" width = "30" />
            </div>
        </div>
    </div>
)

const ChannelListContainer = () => {
  return (
    <>
        < SideBar />
    </>
  )
}

export default ChannelListContainer;
