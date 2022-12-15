import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ModalBody } from 'react-bootstrap/esm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Swal from 'sweetalert2';
import CrudOfertas from './CrudOfertas';
import { database3 } from "../firebase-config";


class ModalVerOfertas extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            form: {
                nombreEstudiante: '',
                correoEstudiante: '',

            },

        }

    }
    handleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        const modalStyles = {
            position: "absolute",
            top: '50%',
            left: '50%',
            width: '100%',
            transform: 'translate(-50%, -50%)'
        }
        const headercss = {
            color: 'white',
            backgroundColor: 'rgb(202, 111, 30)'
        }
        const footercss = {

            background: 'rgb(202, 111, 30)',

        }
        const botonescss = {

            fontSize: '15px',

            background: 'white',
            border: 'rgb(255, 87, 51)',
            color: 'rgb(202, 111, 30)',
            fontWeight: '600',
        }


        const botonescssw = {

            fontSize: '15px',
            color: 'white',
            border: 'rgb(255, 87, 51)',
            background: 'rgb(202, 111, 30)',
            fontWeight: '600',
        }
        return (
            <>
                <Button style={botonescssw} onClick={() => this.handleModal()}> Ver Ofertas</Button>
                <Modal show={this.state.showModal} onHide={() => this.handleModal()} >
                    <Modal.Header closeButton style={headercss}>
                        Ofertas del Producto
                    </Modal.Header>
                    <Modal.Body>

                        A continuación ver las ofertas del producto
                        <CrudOfertas
                            id = {this.props.id}
                        />
                    </Modal.Body>
                    <Modal.Footer style={footercss} >
                        <Button style={botonescss} onClick={() => this.handleModal()}>Cerrar</Button>
                    </Modal.Footer>

                </Modal>
            </>
        )
    };

}
export default ModalVerOfertas;