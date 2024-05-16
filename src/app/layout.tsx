
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: 'LinkedIn page -- Linked',
    template: "%s | LinkedIn",
  },
  description: 'genearated by Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
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
        {children}
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
        
      </body>
    </html>
  )
}
