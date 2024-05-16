"use client"
import React from 'react'

const ErrorPage = ({error, reset}: {error: Error, reset: () => void}) => {
  return (
    <div>
        <h2>Error has occured in Review Page.</h2>
        <p>Message: {error.message}</p>
        <button onClick={reset}>Try again</button>
    </div>
  )
}

export default ErrorPage;