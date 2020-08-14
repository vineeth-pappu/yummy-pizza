import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetails } from '../store/actions';

const DeliveryDetails = ({showError}) => {
    
    const dispatch = useDispatch();
    
    const userDetails = useSelector(state => state.userDetails);
    
    const handleUserInput = ({target}) => {
        const details = {
            [target.name]: target.value
        }
        dispatch(updateUserDetails(details))
    }
    
    return (
        <>
            <div className="user-details">
                <h3>Delivery Details</h3>
                
                {showError && <div className="alert">
                    Please fill the details
                </div>}
                
                <div className="user-form">
                    <div className="form-control">
                        <label htmlFor="name" className="required">Name</label>
                        <input type="text" id="name" name="name"
                            value={userDetails.name}
                            onChange={handleUserInput}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="name" className="required">Email</label>
                        <input type="email" id="email" name="email" 
                            value={userDetails.email}
                            onChange={handleUserInput}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="address" className="required">Address</label>
                        <textarea name="address" id="address" rows="5" 
                            value={userDetails.address}
                            onChange={handleUserInput}>
                        </textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeliveryDetails;