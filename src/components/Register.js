import React, { useEffect, useState } from "react";
import '../css/login.css'
import Banner from './Banner'
import Logo from '../img/loginicon.png';
import Axios from 'axios'
import { database } from "../firebase-config";
import { set, ref, getDatabase, child, get, onValue } from "firebase/database"
import { v4 as uuidv4 } from 'uuid';

function go() {
    window.location = '/';

}
function Register() {

    function submitHandler2(e) {
        //const userId = uuidv4();
        //set(ref(database, 'users/' + userId), {
        //username: 'poio',
        //password: 'password',
        //});
        e.preventDefault();
        const correo = e.target.elements.correo.value;
        const password = e.target.elements.password.value;
        const password2 = e.target.elements.password2.value;

        const userId = uuidv4();
        if (password == password2) {
            set(ref(database, 'users/' + userId), {
                username: correo,
                correo: password,
            });
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
                            <h1>Registro</h1>
                        </td>
                    </table >
                    <div class="form-block">
                        <form onSubmit={submitHandler2}>
                            <input class="input-lg" name="correo" type="text" placeholder="Nombre de usuario" />
                            <br />
                            <br />
                            <input class="input-lg" name="password" type="password" placeholder="Contraseña" />
                            <br />
                            <br />
                            <input class="input-lg" name="password2" type="password" placeholder="Repita Contraseña" />
                            <br />
                            <br />
                            <input class="button-lg" type="submit" value="Registrarse" />
                        </form>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Register