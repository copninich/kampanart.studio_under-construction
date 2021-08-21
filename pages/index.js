import Head from 'next/head'
import Image from 'next/image'
import Headset from './Components/Headset'
import Mainpage from './Components/Mainpage'
import Corejs from './Components/Corejs'



export default function Home() {
  return (
    <div>
      <Headset />
      <body className="index-page">
        <Mainpage />
        <Corejs />
      </body>
      
     
    </div>
    
    
  )
}
