import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            userinfo: {
                name: "Dummy",
                location: "default",
                avatar_url: "dummy"

            }
        }

        console.log(props);
        
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/prem7486");
        const json = await data.json();

        //console.log(json);

        this.setState({
            userinfo: json,
        })
    }




    render () {

        const {name, location, avatar_url} = this.state.userinfo;
        
        return (
            <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @Premsingh</h4>
        </div>
        );
    }
}
export default UserClass;





