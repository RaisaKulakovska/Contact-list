import React from "react";

class EditContact extends React.Component{
    state = {
        id: "",
        name: "",
        description: "",
        avatar: "",
        gender: "",
        favorite: ""
    }
    editName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    editDescrip = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    editAva = (e) => {
        this.setState({
            avatar: e.target.value
        })
    }    
    editGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    getId = () => {
        this.setState({
            id: this.id
        })
    }
    onSubmit = (e) => {               
        const {id, name, description, avatar, gender } = this.state;   
        this.getId();        
        this.props.EditContact (id, name, description, avatar, gender);
        e.preventDefault(); 
    }
    render(){ 
        this.props.Editor.map(item => {
            this.name = item.name;
            this.description = item.description;
            this.avatar = item.avatar;
            this.gender = item.gender;
            this.id = item.id;
            }); 
            if (this.state.gender === undefined) {
                this.state.gender = this.gender;
            }
            if (this.state.avatar === undefined) {
                this.state.avatar = this.avatar;
            }
            let url = `https://randomuser.me/api/portraits/${this.state.gender}/${this.state.avatar}.jpg`;   
            return(            
                <form onSubmit={this.onSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder={this.name}
                        onChange={this.editName}
                    />
                    <br />
                    <input
                        type="text"
                        name="description"
                        placeholder={this.description}
                        onChange={this.editDescrip}
                    />
                    <br />
                    <input
                        type="text"
                        name="avatar"
                        placeholder={this.avatar}
                        onChange={this.editAva}
                    />
                    <br /> <br />
                    <label>Select gender</label>
                    <select
                        value={this.gender}
                        onChange={this.editGender}
                        name="gender">

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                        <button type="submit" className="btn btn-primary btn-lg">SAVE</button>
                        <br /> <br />
                </form>
            )
    }

}
export default EditContact;

