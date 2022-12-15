import React, { useEffect, useState } from "react"; 
import '../css/login.css'
import Banner from './Banner'
import Logo from '../img/loginicon.png';
import Axios from 'axios'
import {database} from "../firebase-config";
import { set, ref, getDatabase, child, get, onValue} from "firebase/database"
import { v4 as uuidv4 } from 'uuid';
import { Button } from "reactstrap";

function changeView(e, id) {
    e.preventDefault();
    window.location = '/usuario/'+id;
  }

function gameMaster(e){
  e.preventDefault();
  const userId = 1;
 
  window.location = '/admin'
}

function toRegister(e){
 
  window.location = '/registro'
}
function Login() {
  const [listaSubasta, setListaSubasta] = useState([]);

  const getAvances = async () => {
    let proyectos = []
    const refdb = ref(database, 'users');
    onValue(refdb, (snapshot) => {
      snapshot.forEach(childSnapshot => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        console.log(data);
        proyectos.push({ "key": keyName, "data": data })
      });
      setListaSubasta(proyectos);
    })
  };

  useEffect(() => {
    getAvances();
  }, []);

  function submitHandler2(e) {
    //const userId = uuidv4();
    //set(ref(database, 'users/' + userId), {
      //username: 'poio',
      //password: 'password',
    //});
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
          if (a.data.username == correo) {
            if (a.data.password == password) {
              changeView(e, a.key)
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
              <input class="input-lg" name="correo" type="text" placeholder="nombre de usuario" />
              <br />
              <br />
              <input class="input-lg" name="password" type="password" placeholder="Contraseña" />
              <br />
              <br />
              <input class="button-lg" type="submit" value="Iniciar Sesion" />
              <br />
              <br />
            </form>
          </div>
          <Button class="button-lg" onClick={toRegister} value="Registrase" >Registrarse</Button>

        </div>
      </div>



    </div>
  )
}

export default Login