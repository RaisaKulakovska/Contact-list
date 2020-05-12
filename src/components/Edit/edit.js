import React from "react";

class EditContact extends React.Component{
    state = {
        id: this.id,
        name: this.name,
        description: this.description,
        avatar: this.avatar,
        gender: this.gender
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
        console.log(this.name);
    }
    render(){ 
        this.props.Editor.map(item => {
            this.name = item.name;
            this.description = item.description;
            this.avatar = item.avatar;
            this.gender = item.gender;
            this.id = item.id;
            }); 
            
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
                    </select><br></br>
                        <button type="submit" className="btn btn-primary btn-lg mx-auto">SAVE</button>
                        <br /> <br />
                </form>
            )
    }

}
export default EditContact;

