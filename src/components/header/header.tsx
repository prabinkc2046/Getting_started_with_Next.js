import React from 'react'

const header: React.FC = () => {
  return (
    <nav>
          <ul style={{
            listStyle: 'none',
             display: 'flex', 
             flexDirection:'row', 
             justifyContent:'space-around', 
             background:'skyblue', 
             height: '100px', 
             alignItems:'center',
            
             }}>
            <li>
              <a style={{textDecoration:'none'}} href="#">home</a>
            </li>
            <li>
              <a style={{textDecoration: 'none'}}href="#">service</a>
            </li>
          </ul>
    </nav>
  )
};

export default header;
