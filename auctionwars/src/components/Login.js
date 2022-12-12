import React, { useEffect, useState } from "react"; 
import '../css/login.css'
import Banner from './Banner'
import Logo from '../img/loginicon.png';

function changeView(e) {
    e.preventDefault();
    window.location = '/usuario';
  }

function Login() {
  return (
    <div>
      <Banner />
      <div className="body-background">
        <div class="formBg">
          <table width="400px" height="100" >            
          <td width="100px" colspan="2">
              <img src={Logo} style={{
                width: '50%',
                marginLeft: '34px',
              }}></img>
            </td>
            <td colspan="2">
              <h1>BIENVENIDO</h1>
            </td>
          </table >
          <div class="form-block">
            <form onSubmit={changeView}>
              <input class="input-lg" required="required" name="correo" type="text" placeholder="Correo Electronico" />
              <br />
              <br />
              <input class="input-lg" required="required" name="password" type="password" placeholder="Contraseña" />
              <br />
              <br />
              <input class="button-lg" type="submit" value="Iniciar Sesion" />
            </form>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Login