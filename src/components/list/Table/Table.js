import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const Table = (props) => {
    const {etudiants, history} = props;

    return (<div className="table-container">
        <div className="h2 text-center">Liste Etudiant</div>
        <div className="row">
            <div className="col-md-12 pad-10">
                <button onClick={()=> history.push(`/ajout`)} type="submit" className="btn btn-primary">
                    Ajout Etudiant
                </button>
            </div>
        </div>
        <br/>
        <br/>
        <table className="table table-striped">
            <thead className="Table-head">
            <tr>
                <th>Matricule</th>
                <th>Nom</th>
                <th>Prenom</th>
            </tr>
            </thead>
            <tbody>
            {etudiants.map((etudiant) => (
                <tr key={etudiant.id_etudiant}
                >
                    <td>
                        <span>{etudiant.matricule}</span>
                    </td>
                    <td>
                        <span>{etudiant.nom}</span>
                    </td>
                    <td>
                        <span>{etudiant.prenom}</span>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>)
};

Table.propTypes = {
    etudiants: PropTypes.array.isRequired,
};

export default withRouter(Table);