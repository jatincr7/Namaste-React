
import UserClass from './User';

import UserContext from '../utils/userContext';
import React  from 'react';

// const About = () => {
//     const[count]=useState(0)
//     return (
//         <div>
//             <h1>About </h1>
//             <h2>This is Namaste Web Series </h2>
//             <h3></h3>
//             <UserClass name={"Jatin "} location={"Gurgaon" } />
//         </div>
//     )
// }
class About extends React.Component{
    constructor(props) {
        super(props)
    
console.log("parent constructor called ")
    }
    componentDidMount(){
        console.log("Parent DiDmOUNT")
}

    render() {
        console.log("Parent render called ")
        
        return (
            <div>
            <h1>About </h1>
            <h2>This is Namaste Web Series </h2>
                <h3></h3>
                <UserContext.Provider > {({ loggedInUser }) => <h3>{loggedInUser}</h3>} </UserContext.Provider>
                <UserClass name={"Jatin "} location={"Gurgaon" } />
            <UserClass name={"Mark Zuckerbarck "} location={"California" } />
       </div>)
    }
    
     
    

}
export default About