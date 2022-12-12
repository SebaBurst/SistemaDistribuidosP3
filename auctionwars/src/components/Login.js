import React, { useEffect, useState } from "react"; 
import '../css/login.css'
import Banner from './Banner'
import Logo from '../img/loginicon.png';
import Axios from 'axios'


function changeView(e, id) {
    e.preventDefault();
    window.location = '/usuario/'+id;
  }

function gameMaster(e){
  e.preventDefault();
  window.location = '/admin'
}
function Login() {
  const [listaSubasta, setListaSubasta] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setListaSubasta(response.data)
        });

    }, []);


    function submitHandler2(e) {
      e.preventDefault();
      const correo = e.target.elements.correo.value;
      const password = e.target.elements.password.value;
      if (correo == "administrador" && password == "controlmaestro") {
          gameMaster(e)
      }
      else {
        const datitos = [];

    {
        listaSubasta.map((a => {
            if(a.username == correo){
                if(a.password == password){
                  changeView(e, a.id)
                }
            }
            
        }))
    }
          //IniciarSesion(password, correo);
          //console.log("Llegue", correo);
      }
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
            <form onSubmit={submitHandler2}>
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