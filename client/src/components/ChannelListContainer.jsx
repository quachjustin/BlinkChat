import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

import Blinkchaticon from '../assets/blinkchat.png'
import Logouticon from '../assets/logoutnew.png'

const cookies = new Cookies();


//stream gives access to api to search channels, send messages etc;

//blinkchaticon
//alt = blinkicon

const SideBar = ( { logout }) => (
    <div className = "channel-list__sidebar">
        <div className = "channel-list__sidebar__icon1">
            <div className = "icon1__inner">
                <img src = { Blinkchaticon } alt = "Blinkicon" width = "34" />
            </div>
        </div>
        <div className = "channel-list__sidebar__icon2">
            <div className = "icon1__inner" onClick = {logout}>
                <img src = { Logouticon } alt = "Logout" width = "29" />
            </div>
        </div>
    </div>
)

//companyHeader = sidebar name of company

const CompanyHeader = () => (
    <div className = "channel-list__header">
        <p className = "channel-list__header__text">Blink</p> 

    </div>
)

const ChannelListContainer = () => {
    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');
        
        window.location.reload();
    }


  return (
    <>
        < SideBar logout = {logout} />
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
            <ChannelList 
                filters = {{}}
                channelRenderFilterFn = {() => {}}
                List = {(listProps) => (
                    <TeamChannelList
                        {...listProps}
                        type = "messaging"
                    />
                )}
                Preview={(previewProps) => (
                    <TeamChannelPreview
                    {...previewProps}
                    type = "messaging"
                    />
                )}
            />
        </div>
    </>
  )
}

export default ChannelListContainer;
