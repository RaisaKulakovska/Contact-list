import React from "react";

class Edit extends React.Component{
    state = {
        id: this.props.EditContact.id,
        name: this.props.EditContact.name,
        description: this.props.EditContact.description,
        avatar: this.props.EditContact.avatar,
        gender: this.props.EditContact.gender,
        favorite: this.props.EditContact.favorite
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
            id: this.state.id
        })
    }
    onSubmit = (e) => { 
        e.preventDefault();       
        const {id, name, description, avatar, gender, favorite } = this.state;           
        this.props.EditContact (id, name, description, avatar, gender, favorite);
    }
    render(){        
        return(            
            <form onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    name="name"
                    placeholder={this.state.name}
                    onChange={this.getName}
                />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder={this.state.description}
                    onChange={this.getDescrip}
                />
                <br />
                <input
                    type="text"
                    name="avatar"
                    placeholder={this.state.avatar}
                    onChange={this.getAva}
                />
                <br /> <br />
                <label>Select gender</label>
                <select
                    value={this.state.gender}
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
export default Edit;

