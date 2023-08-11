import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

import Blinkchaticon from '../assets/blinkchaticon.png'
import Logouticon from '../assets/logout.png'


//stream gives access to api to search channels, send messages etc;

//blinkchaticon
//alt = blinkicon

const SideBar = () => (
    <div className = "channel-list__sidebar">
        <div className = "channel-list__sidebar__icon1">
            <div className = "icon1__inner">
                <img src = { Blinkchaticon } alt = "Blinkicon" width = "35" />
            </div>
        </div>
        <div className = "channel-list__sidebar__icon2">
            <div className = "icon1__inner">
                <img src = { Logouticon } alt = "Logout" width = "35" />
            </div>
        </div>
    </div>
)

//companyHeader = sidebar name of company

const CompanyHeader = () => (
    <div className = "channel-list__header">
        <p className = "channel-list__header__text">Blink Chat</p> 

    </div>
)

const ChannelListContainer = () => {
  return (
    <>
        < SideBar />
        <div className = "channel-list__list__wrapper">
            <CompanyHeader />
            <ChannelSearch />
            
            <ChannelList 
                filters = {{}}
                channelRenderFilterFn = {() => {}}
                List = {(listProps) => (
                    <TeamChannelList
                        {...listProps}
                        type = "team"
                    />
                )}
                
                Preview={(previewProps) => (
                    <TeamChannelPreview
                    {...previewProps}
                    type = "team"
                    />
                )}
            />
        </div>
    </>
  )
}

export default ChannelListContainer;
