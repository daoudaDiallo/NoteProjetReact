import React from 'react';
import './Add.css';
import { API_URL } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            matricule: '',
            nom: '',
            prenom: '',
        };

        this.handleCreateEtudiant = this.handleCreateEtudiant.bind(this);
        this.handleChangeMatricule = this.handleChangeMatricule.bind(this);
        this.handleChangeNom = this.handleChangeNom.bind(this);
        this.handleChangePrenom = this.handleChangePrenom.bind(this);
    }

    notify = () => {
        toast.success("Success !", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    createEtudiant() {
        this.setState({loading: true});

        let data = {
            "matricule": this.state.matricule,
            "nom": this.state.nom,
            "prenom": this.state.prenom
        };

        fetch(`${API_URL}/etudiant`, {
            method: 'post',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json',},
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result);

            this.notify();
            this.setState({
                loading: false,
            });

            this.props.history.push('/');


        }).catch(() => {
            this.setState({ loading: false });
        });
    }

    handleCreateEtudiant = (event) => {
        event.preventDefault();
        confirmAlert({
            title: 'Confirmation',
            message: 'Etes-vous sûr?',
            buttons: [
                {
                    label: 'Oui',
                    onClick: () => this.createEtudiant()
                },
                {
                    label: 'Non',
                    onClick: () => console.log('Click No')
                }
            ]
        })
    };

    handleChangeMatricule(event) {
        this.setState({matricule: event.target.value});
    }

    handleChangeNom(event) {
        this.setState({nom: event.target.value});
    }

    handleChangePrenom(event) {
        this.setState({prenom: event.target.value});
    }

    render() {

        return (
            <div className="form-horizontal pad-10">
                <ToastContainer />
                <div className="h2 text-center">Ajout Etudiant</div>
                <br/>
                    <form className="row pad-10" onSubmit={this.handleCreateEtudiant}>
                        <div className="col-md-6 form-group">
                            <label htmlFor="matricule" className="control-label">Matricule</label>
                            <div className="col-md-12 no-padding">
                                <input value={this.state.matricule} onChange={this.handleChangeMatricule} name="matricule" id="matricule" className="form-control" placeholder="" type="text" required />
                            </div>
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="nom"  className="control-label">Nom</label>
                          <div className="col-md-12 no-padding">
                            <input name="nom" value={this.state.nom} onChange={this.handleChangeNom} id="nom" className="form-control" placeholder="" type="text" required />
                          </div>
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="prenom"  className="control-label">Prénom</label>
                          <div className="col-md-12 no-padding">
                            <input name="prenom" value={this.state.prenom} onChange={this.handleChangePrenom} id="prenom" className="form-control" placeholder="" type="text" required />
                          </div>
                        </div>
                        <div className="col-md-12">
                            <div>
                                <button type="submit" className="btn btn-save btn-primary">Sauvegarder
                                </button>
                            </div>
                        </div>
                  </form>
            </div>

        )
    }
}

export default Add;