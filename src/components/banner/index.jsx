import PropTypes from 'prop-types'
/**
 * Banner for the dashboard
 * @param {String} name
 * @returns  JsxElement
 */
function Banner({ name }) {
    return (
        <section className="bannerWrapper">
            <h1 className="banner-title">
                Bonjour <span>{name}</span>
            </h1>
            <p className="banner-text">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
        </section>
    )
}
Banner.propTypes = {
    name: PropTypes.string,
}
export default Banner
