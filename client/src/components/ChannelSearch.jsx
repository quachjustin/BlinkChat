import React, {useState, useEffect } from 'react'
import {useChatContext} from 'stream-chat-react';
import { ResultsDropdown } from './';
import {SearchIcon } from '../assets';


const ChannelSearch = ({ setToggleContainer }) => {
    const { client, setActiveChannel } = useChatContext();
    const [ query, setQuery ] = useState('');
    const [ loading, setLoading ] = useState('');
    const [ teamChannels, setTeamChannels ] = useState([])
    const [ directChannels, setDirectChannels ] = useState([])

    useEffect(() => {
        if (!query) {
            setTeamChannels([]);
            setDirectChannels([]);
        }
    }, [query])



    //we use async because we have to wait for channels to be fetched; accept text we are searching
    //try and catch block 
    //try to get actual channels, if we cant, we go to error
    const getChannels = async(text) => {
        try {
            const channelResponse = client.queryChannels({
                type: 'team', 
                name: { $autocomplete : text }, 
                members: { $in: [client.userID]}
            })
            const userResponse = client.queryUsers({
                //dont want users own ID; $ne
                id: { $ne: client.userID },
                name: { $autocomplete : text }, 
                
            })

            const [channels, {users}] = await Promise.all([channelResponse, userResponse ]);

            if (channels.length) setTeamChannels(channels);
            if(users.length) setDirectChannels(users);

        } catch(error) {
            setQuery('')
        }
    }


    const onSearch = (event) => {
        //use 'event.preventDefault' for every time we have input or button because when we press submit we reload to page; we want everything to be reactive 
        event.preventDefault();
        setLoading(true);
        //when we type input; we get the value of that text under event target value;
        setQuery(event.target.value);
        getChannels(event.target.value)

    }
    //create query; render component called ResultsDropdown that contains info about all channels and users

    const setChannel = (channel) => {
        setQuery('');
        setActiveChannel(channel);
    }

    return (
        <div className = "channel-search__container">
            <div className = "channel-search__input__wrapper">
                <div className = "channel-search__input__icon">
                    <SearchIcon />
                </div>
                <input 
                    className = "channel-search__input__text" 
                    placeholder = "Search" 
                    type= "text" 
                    value = {query} 
                    onChange = {onSearch}
                />
            </div>
            {query && (
                <ResultsDropdown
                teamChannels = {teamChannels}
                directChannels = {directChannels}
                loading = {loading}
                setChannel = {setChannel}
                setQuery = {setQuery}
                setToggleContainer = {setToggleContainer}

                />
            )}
        </div>
  )
}

export default ChannelSearch

//use 'rafce'

