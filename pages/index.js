import Head from 'next/head'
import Image from 'next/image'
import Headset from './Components/Headset'
import Mainpage from './Components/Mainpage'
import Corejs from './Components/Corejs'



export default function Home() {
  return (
    <>
      <Headset />
      <body className="index-page">
        <div className="bg" style={{backgroundImage: "url(../assets/img/cop.png)",width:"100%",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundPosition:"center"}}>
          <Mainpage />
          <Corejs />
        </div>
        
      </body>
      
     
    </>
    
    
  )
}
