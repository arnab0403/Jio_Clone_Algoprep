import React, { useEffect, useState } from 'react';
import userSlice from './Redux/slice/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import fetchUserDetailsMiddleware from './Redux/Middleware/fetchUserDetailsMiddleware';

function User() {
   const {user, loading, error} = useSelector((store) => store.userSlice);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUserDetailsMiddleware(3));        
    },[])

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return (
            <div>Error</div>
        )
    }

    return (
    <>
        <div>{user.name}</div>
        <div>{user.id}</div>
        <div>{user.email}</div>
    </>
  )
}

export default User