import React from 'react';
import loader from '../images/loader.gif';
import { useSelector } from 'react-redux';

const Loader = () => {
    
    const isLoading = useSelector(state => state.loading)
    
    if (!isLoading) {
        return null
    }
    
    return (
        <div className="loader">
            <img src={loader} alt="loading..."/>
        </div>
    )
}

export default Loader;