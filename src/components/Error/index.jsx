// @ts-check
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './index.css'
import React from 'react'
/**
 *  Generate error message  with  http code status add manually
 * @component
 * @prop {string} [title=404] -  type of error Http ex : 404, there is a default value set with PropTypes
 * @prop {string} [message=`Cette page ${location.pathname}  n'existe pas`] -  custom message for the  error , there is a default value set with PropTypes
 * @returns {React.ReactElement}
 */
function Error({ title, message }) {
    let location = useLocation()
    return (
        <div className="error-Wrapper">
            <div className="error-body">
                <h1 className="body-title">{title}</h1>
                <p className="body-message">Oups 🙈 {message}</p>
            </div>

            <div className="error-link">
                <Link to="/"> Retourner à la page d'acceuil</Link>
            </div>
        </div>
    )
}
Error.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
}
Error.defaultProps = {
    title: '404',
    message: `Cette page ${location.pathname}  n'existe pas`,
}
export default Error
