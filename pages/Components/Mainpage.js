import {Component} from 'react'
import Router from 'next/router'

export default class Mainpage extends Component {
    render (){
     
        return(
            <div>
                <header className="header-2">
                    <div className="page-header min-vh-100">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8 text-center mx-auto">
                            <h1 className="text-white pt-3 animate__animated  animate__bounceInUp"><i className="fad fa-construction"></i> COMING SOON
</h1>
                            <p className="text-white animate__animated animate__bounceInDown" style={{fontSize:"25px"}}>Our website is under construction</p>
                            <p className="lead mt-3 animate__animated animate__bounceInDown" style={{fontSize:"25px"}}><a href="https://github.com/copninich" className="text-white"><i className="fab fa-github"></i> Copninich</a></p>
                           
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </header>
            </div>


        
        )
    }
        
  
    
}
  