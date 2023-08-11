import React from 'react'
import { Avatar, useChatContext } from 'stream-chat-react';

const TeamChannelPreview = ({channel, type}) => {
    const {channel: activeChannel, client } = useChatContext();


    //add ? before channel and name to make sure we have the channel before we want to access something else
    //or if the channel doesnt haev a name; we add channel? data and id 

    const ChannelPreview = () => (
        <p className = "channel-preview__item">
            
            # {channel?.data?.name || channel?.data?.id}
        </p>
    )

    //each user has a specific ID and based on that we want to show their data
    //turn the objects with keys and values to an array of objects to we can map thru

    //filter accepts a cb func
    //destructure and specify user; 
    //if user.id is not equal to client.userID
    //mapping thru all users and keeping all the ones that arent equal to client id which is ours; 

    //return a block of jsx
    //for user because user isnt there
    //include img and name 

    //add p tag for members names;

    const DirectPreview = () => {
        const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);
        return (
            <div className = "channel-preview__item single">
                <Avatar 
                    image = {members[0]?.user?.image}
                    name = {members[0]?.user?.fullName}
                    size = {24}
                />
                <p>{members[0]?.user?.fullName}</p>
            </div>
        )
    }

    //added channel preview and direct preview; add into teamchannelpreview

    //div name has diff class name depending on if the current chat is selected or not
    //check if channel is selected or not; name depends on outcome;

    return (
        <div className = {
            channel?.id === activeChannel?.id
            ? 'channel-preview__wrapper__selected'
            : 'channel-preview__wrapper'
        }
        onClick={() => {
            console.log(channel);
        }}
        //dependent on the type: if type is team then either channelpreview or directpreview
        >
            {type === 'team' ? <ChannelPreview /> : <DirectPreview />}
        </div>
    )
}

export default TeamChannelPreview

