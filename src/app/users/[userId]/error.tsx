"use client"
import React from 'react'

const ErrorUserPage = ({error}: {error: Error}) => {
  return (
    <div>
        <h2>Error occured due to network connectivity</h2>
        <p>{error.message}</p>
    </div>
  )
}


export default ErrorUserPage;
