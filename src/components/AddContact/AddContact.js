import React from "react";
import "./AddContact.css"

class AddContact extends React.Component {
    state = {
        name: "",
        description: "",
        avatar: "null",
        gender: "",
        favorite: false
    }
    
    getName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    getDescrip = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    getAva = (e) => {
        this.setState({
            avatar: e.target.value
        })
    }
    getGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { name, description, avatar, gender } = this.state;
        this.props.AddNewContact(name, description, avatar, gender);
    };
    
    render() {        
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter a Name"
                    onChange={this.getName}
                />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder="Enter a description"
                    onChange={this.getDescrip}
                />
                <br />
                <input
                    type="text"
                    name="avatar"
                    placeholder="Enter a # of avatar"
                    onChange={this.getAva}
                />
                <br /> <br />
                <label>Select gender</label>
                <select
                    value={this.state.gender}
                    onChange={this.getGender}
                    name="gender">

                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                    <button type="submit" class="btn btn-primary btn-lg">ADD CONTACT</button>
                    <br /> <br />
            </form>
                )
            }
        }
        export default AddContact; 
