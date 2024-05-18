import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);

        //console.log("parent constructor")
    }

    componentDidMount(){
        //console.log("parent component Did Mount")
    }
    render() {
        return (
            <div>
                <h1>About.</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => (<h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )
                            
                        }
                    </UserContext.Consumer>
                </div>
                <h2>This is hello js...</h2>
                <UserClass name={"Prem Singh (class)"} location={"Haryana"}/>
            </div>
        );
    }
}





// const About = () => {
//     return (
//         <div>
//             <h1>About.</h1>
//             <h2>This is hello js...</h2>
//             <UserClass name={"Prem Singh (class)"} location={"Haryana"}/>
//         </div>
//     )
// }

export default About; 