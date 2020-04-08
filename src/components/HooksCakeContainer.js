import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'
function HooksCakeContainer(props) {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
        </div>
    )
}



// const mapDispatchToProps = (dispatch) => {
//     return {
//         buyCake: () => dispatch(buyCake())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HooksCakeContainer)
export default HooksCakeContainer;