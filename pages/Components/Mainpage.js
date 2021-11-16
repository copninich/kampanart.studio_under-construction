import {Component} from 'react'

export default class Mainpage extends Component {
    render (){
        return(
            <div>
                <header className="header-2">
                    <div className="page-header min-vh-100" style={{background: "linear-gradient(111.94deg,#ffeb3b 0%,#e91e63 65%,#673ab7 100%);"}}>
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8 text-center mx-auto">
                            <h1 className="text-white pt-3 mt-n5 animate__animated  animate__bounceInUp"><i className="fad fa-construction"></i> เว็บไซต์ไม่สามารถให้บริการได้!</h1>
                            <p className="lead text-white mt-3 animate__animated animate__bounceInDown">เนื่องจากการดับกระแสไฟฟ้า เพื่อซ่อมบำรุง ของทางการไฟฟ้าส่วนภูมิภาค เชียงใหม่<br/>ทำให้ Server ที่บริการฐานข้อมูลดับไปด้วย <br/>ในวันพุธ ที่ 17 พฤศจิกายน 2564 เวลา 09.00 - 16.00<br/>ขออภัยในความไม่สะดวก แก่คณะกรรมการทุกท่าน ที่มาเยี่ยมชม</p>
                            <a href="https://old.kampanart.studio" className="btn bg-gradient-primary btn-round mb-0 me-1 mt-2 mt-md-0 w-75 animate__animated animate__bounceInDown" style={{fontSize:'17px'}} >old website</a>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </header>
            </div>


        
        )
    }
        
  
    
}
  