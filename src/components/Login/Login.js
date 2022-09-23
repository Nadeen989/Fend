import React from 'react'
import './Login.css'


const Login = () => {
  return (
    <div class="container">
    <div class="screen">
        <div class="screencontent ">
            <form class="login">

                <div class="loginfield">
                    <i class="loginicon fas fa-user"></i>
                    <input type="text" class="logininput" placeholder="Username/Email"/>
                </div>
                <div class="loginfield">
                    <i class="loginicon fas fa-lock"></i>
                    <input type="password" class="logininput" placeholder="Password"/>
                </div>


                <button class="button loginsubmit mt-3">
                    <span class="buttontext">Log In Now</span>
                    <i class="buttonicon fas fa-chevron-right"></i>
                </button>
            </form>

        </div>
        <div class="screenbackground">
            {/* <span class="screenbackgroundshape screenbackgroundshape4"></span>
            <span class="screenbackgroundshape screenbackgroundshape3"></span>         */}
            <span class="screenbackgroundshape screenbackgroundshape2"></span>
            <span class="screenbackgroundshape screenbackground__shape1"></span>
        </div>
    </div>
</div>
  )
}

export default Login