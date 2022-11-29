import { Component } from 'react'
import PropTypes from 'prop-types'
import { random } from '../Utils'
import './user.css'

class User extends Component {
    constructor(data) {
        super(data)
        this.state = { profilUser: {} }
    }
    // componentDidMount() {
    //     const url = '../data/mockdata.json'
    //     const userId = parseInt(this.props.userId)
    //     fetch(url)
    //         .then((res) => {
    //             if (res.ok) {
    //                 return res.json()
    //             }
    //         })
    //         .then(
    //             (result) => {
    //                 const toto = result.users.find((user) => user.id === userId)
    //                 this.setState({ profilUser: toto })
    //             },
    //             (error) => {
    //                 console.log(error)
    //             }
    //         )
    // }
    componentDidMount() {
        this.setState({ profilUser: this.props.data })
    }

    render() {
        const { profilUser } = this.state
        const { userInfos } = profilUser
        const message = [
            'Félicitation ! Vous avez explosé vos objectifs hier 👏',
            'Super ! Vous êtes en excellente forme  🔥',
        ]

        return (
            <div className="userWrapper">
                <h1 className="user-title">
                    Bonjour{' '}
                    <span>{userInfos ? userInfos.firstName : 'Hello'}</span>
                </h1>
                <p className="user-message">{message[random(0, 1)]}</p>
            </div>
        )
    }
}
User.propTypes = {
    data: PropTypes.object.isRequired,
}
export default User
