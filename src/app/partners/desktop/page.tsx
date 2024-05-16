import React from 'react'

const generateRandomNumber = (count: number): number => {
    return Math.floor(Math.random() * count)
}


const DesktopPage = () => {
    // const random = generateRandomNumber(2);
    // if (random === 1){
    //     throw new Error("Error generating a Desktop page");
    // }

  return (
    <div>Desktop Page</div>
  )
}

export default DesktopPage;
