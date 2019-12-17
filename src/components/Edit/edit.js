import React from "react";

class Edit extends React.Component{
    state = {
        name: this.name,
        description: this.description,
        avatar: this.avatar,
        gender: this.gender,
        id: this.id
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
    getId = (e) => {
        this.setState({
            id: this.id
        })
    }
    onSave = (e) => {        
        const { name, description, avatar, gender } = this.state;
        this.getId();
        e.preventDefault();
        this.props.onEdit (name, description, avatar, gender);
    };
    render(){
        this.props.Editeding.map(item => {
            this.name = item.name;
            this.description = item.description;
            this.avatar = item.avatar;
            this.gender = item.gender;
            this.id = item.id;
          });

          if (this.state.gender === undefined) {
            this.setState({
                gender: this.gender
            })           
          }
          if (this.state.avatar === undefined) {
            this.setState({
                avatar: this.avatar
            })           
          }

          //let url = `https://randomuser.me/api/portraits/${this.state.gender}/${this.state.avatar}.jpg`;
        return(            
            <form onSave={this.onSave}
            >
                <input
                    type="text"
                    name="name"
                    placeholder={this.name}
                    onChange={this.getName}
                />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder={this.name}
                    onChange={this.getDescrip}
                />
                <br />
                <input
                    type="text"
                    name="avatar"
                    placeholder={this.name}
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
                    <button type="save" className="btn btn-primary btn-lg">SAVE</button>
                    <br /> <br />
            </form>
        )
    }
}
export default Edit;