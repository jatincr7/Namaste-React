import  React from 'react'
import UserContext from '../utils/userContext';

class UserClass extends React.Component{

    constructor(props) {

        super(props);
        this.state = {
            count: 0,
      
        }
        console.log(this.props.name+"Constructor child")
    }
    componentDidMount() {
        console.log(this.props.name+"child DidMount")
    }
    // In Class components all this local state variables are updated inside the same state variable
    componentDidUpdate() {
        console.log("ComponentDidUpdate")
    }
    
    render() {
        console.log(this.props.name+"Rendered child")
        const { name, location } = this.props
        const { count } = this.state;
        return (<div>
            <h1> count {count}</h1>
            <button onClick={() => {
                this.setState({
                   count:this.state.count+1
               }) 
            }}>countIncrease</button>
            <h1>User Info</h1>
            <h2>{name }</h2>
            <h3>{ location}</h3>
            <UserContext.Consumer>
                {({ loggedInUser }) => <h1>{ loggedInUser}</h1>}
            </UserContext.Consumer>
            <h4></h4>


        </div>)

        
    }

}

export default UserClass;