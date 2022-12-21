// @ts-check
import caloriesIcon from '../../assets/icon/caloriesIcon.svg'
import proteinesIcon from '../../assets/icon/protein-icon.svg'
import glucidesIcon from '../../assets/icon/carbs-icon.svg'
import lipidesIcon from '../../assets/icon/fat-icon.svg'
import './index.css'

import PropTypes from 'prop-types'
import React from 'react'
/**
 * Cards which displays data from user
 * @prop {String} value - value that is received to call Api of User
 * @prop {String} KeyData - which allows the display according to the desired data
 * @returns {React.ReactElement}
 */
function UserInfos({ value, keyData }) {
    let title = ' '
    let icon = ''

    switch (keyData) {
        case 'calories':
            title = 'calories'
            icon = caloriesIcon
            break
        case 'proteines':
            title = 'proteines'
            icon = proteinesIcon
            break
        case 'glucides':
            title = 'glucides'
            icon = glucidesIcon
            break
        case 'lipides':
            title = 'lipides'
            icon = lipidesIcon
            break
    }

    return (
        <div className="userInfos-Wrapper">
            <img className="userInfos-logo" src={icon} alt="" />
            <div className="userInfos-text">
                <p className="text-value">{value}</p>
                <span className="text-title">{title}</span>
            </div>
        </div>
    )
}
UserInfos.propTypes = {
    value: PropTypes.string.isRequired,
    keyData: PropTypes.string,
}

export default UserInfos
