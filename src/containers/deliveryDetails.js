import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetails } from '../store/actions';

const DeliveryDetails = () => {
    
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
                
                <div className="user-form">
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name"
                            value={userDetails.name}
                            onChange={handleUserInput}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="name">Email</label>
                        <input type="email" id="email" name="email" 
                            value={userDetails.email}
                            onChange={handleUserInput}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="address">Address</label>
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