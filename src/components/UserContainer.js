import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions';

function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? <h1>Loading</h1> : userData.error ? <h1>{userData.error}</h1> : <div><h2>Users </h2>
        <div>{userData && userData.users && userData.users.map(user => <p key={user.name}>{user.name}</p>)}
        </div></div>


}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
