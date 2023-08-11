import React, {useState, useEffect } from 'react'
import {useChatContext} from 'stream-chat-react';

import {SearchIcon } from '../assets';

const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState('');


    //we use async because we have to wait for channels to be fetched; accept text we are searching
    //try and catch block 
    //try to get actual channels, if we cant, we go to error
    const getChannels = async(text) => {
        try {
            //TODO: fetch channels
            //TODO: !!!!!!!!!!!!!!!!!!
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
        </div>
  )
}

export default ChannelSearch

//use 'rafce'

