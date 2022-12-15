import React, { useEffect, useState } from "react"; 
import '../css/login.css'
import Banner from './Banner'
import Logo from '../img/loginicon.png';
import Axios from 'axios'
import {database} from "../firebase-config";
import {database3} from "../firebase-config";
import {database2} from "../firebase-config";

import {set, ref} from "firebase/database"


function changeView(e, id) {
    e.preventDefault();
    window.location = '/usuario/'+id;
  }

function gameMaster(e){
  e.preventDefault();
  const userId = 1;
 
  window.location = '/admin'
}
function Login() {


    function submitHandler2(e) {
      e.preventDefault();
      const userId = 4;
      set(ref(database, 'users/' + userId), {
        username: 'El Poio4',
        email: 'Poio@gmail.com4',
        profile_picture : 'La mejor fo2to de todas'
      });



     
  }  


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
            <form onSubmit={gameMaster}>
              <input class="input-lg" name="correo" type="text" placeholder="Correo Electronico" />
              <br />
              <br />
              <input class="input-lg" name="password" type="password" placeholder="Contraseña" />
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