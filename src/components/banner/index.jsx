import PropTypes from 'prop-types'
import { random } from '../../Utils'
import './index.css'
/**
 * Banner for the dashboard
 * @param {String} name   fisrtName for the user
 * @returns  JsxElement
 */
function Banner({ name }) {
    const message = [
        'Félicitation ! Vous avez explosé vos objectifs hier 👏',
        'Super ! Vous êtes en excellente forme  🔥',
    ]
    return (
        <section className="banner-wrapper">
            <h1 className="banner-title">
                Bonjour <span>{name}</span>
            </h1>
            <p className="banner-text">{message[random(0, 1)]}</p>
        </section>
    )
}
Banner.propTypes = {
    name: PropTypes.string,
}
export default Banner
