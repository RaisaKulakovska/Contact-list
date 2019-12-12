import React from "react";
import "./AddContact.css"

class AddContact extends React.Component {
    state = {
        id: 8,
        name: "",
        description: "",
        avatar: 10,
        gender: "",
        Facebook: "",
        Twitter: "",
        LinkedIn: "",
        Skype: "",
        e_mail: "",
        favorite: false
    }
   //this.handleChange=this.handleChange.bind(this);

   handleChange(event) {        
            const {name,value,type, checked}=event.target
            type==="checkbox"?this.setState({[name]:checked}):this.setState({[name]:value})
    }

     // Add = () => {
    //     this.setState(() => {
    //         return{

    //         }
    //     })
    // }
    render() {
        return (
            <form justijy-content-center>
                <input
                    type="text"
                    name="id"
                    placeholder="Enter id#"
                onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="name"
                    placeholder="Enter a Name"
                onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder="Enter a description"
                onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="avatar"
                    placeholder="Enter a # of avatar"
                onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                    />Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                    />Female
                </label>
                <br />
                <input
                    type="text"
                    name="Facebook"
                    placeholder="Facebook"
                onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="Twitter"
                    placeholder="Twitter"
                onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="LinkedIn"
                    placeholder="LinkedIn"
                onChange={this.handleChange}
                />
                <br />
                <input
                    type="text"
                    name="Skype"
                    placeholder="Skype"
                onChange={this.handleChange}
                />
                <br/><br/>

                <label for="exampleInputEmail1">Email address</label>
                <input 
                type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" p
                laceholder="Enter email" 
                />
                <small 
                id="emailHelp" 
                class="form-text text-muted">We'll never share your email with anyone else.</small>
                <br/><br/>

                <label>
                    <input
                        type="checkbox"
                        name="favorite"
                        checked={this.state.favorite}
                    onChange={this.handleChange}
                    />Is favorite?
                </label>
                <br/><br/>
                {/*<label>Select smth</label>
                 <select
                    value={this.state. ...}
                    onChange={this.handleChange}
                    name="">
                
                <option value="1">1</option>
                <option value="2">2</option>
                <select/> */}
                <button type="button" class="btn btn-primary btn-lg">ADD CONTACT</button>
            </form>
        )
    }
}
export default AddContact; 
