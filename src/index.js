import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ContactList from "./components/ContactList/contactList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/About/about";
import AddContact from "./components/AddContact/AddContact";
import NotFound from "./components/NotFounf/NotFound";
import Edit from "./components/Edit/edit";
import MainMenu from "./components/MainMenu/MainMenu";
import uuid from "uuid";


class App extends Component {
     id:100;
     state = {
          List: [
               {
                    id: 1,
                    name: "Jack Sparrow",
                    description: "Captain",
                    avatar: 20,
                    gender: "men",
                    Facebook: "https://www.facebook.com/",
                    Twitter: "https://twitter.com/",
                    LinkedIn: "https://www.linkedin.com/",
                    Skype: "https://www.skype.com/",
                    e_mail: "https://mail.google.com/",
                    favorite: false
               },
               {
                    id: 2,
                    name: "Cris Nollan",
                    description: "Produser",
                    avatar: 12,
                    gender: "men",
                    Facebook: "https://www.facebook.com/",
                    Twitter: "https://twitter.com/",
                    LinkedIn: "https://www.linkedin.com/",
                    Skype: "https://www.skype.com/",
                    e_mail: "https://mail.google.com/",
                    favorite: true
               },
               {
                    id: 3,
                    name: "Arnold Swarzeneger",
                    description: "Terminator",
                    avatar: 14,
                    gender: "men",
                    Facebook: "https://www.facebook.com/",
                    Twitter: "https://twitter.com/",
                    LinkedIn: "https://www.linkedin.com/",
                    Skype: "https://www.skype.com/",
                    e_mail: "https://mail.google.com/",
                    favorite: false
               },
               {
                    id: 4,
                    name: "Nelly Teylor",
                    description: "Teacher",
                    avatar: 88,
                    gender: "women",
                    Facebook: "https://www.facebook.com/",
                    Twitter: "https://twitter.com/",
                    LinkedIn: "https://www.linkedin.com/",
                    Skype: "https://www.skype.com/",
                    e_mail: "https://mail.google.com/",
                    favorite: true
               },
               {
                    id: 5,
                    name: "Jack London",
                    description: "Poet",
                    avatar: 80,
                    gender: "men",
                    Facebook: "https://www.facebook.com/",
                    Twitter: "https://twitter.com/",
                    LinkedIn: "https://www.linkedin.com/",
                    Skype: "https://www.skype.com/",
                    e_mail: "https://mail.google.com/",
                    favorite: false
               },
               {
                    id: 6,
                    name: "Nick Nikels",
                    description: "Polissman",
                    avatar: 60,
                    gender: "men",
                    Facebook: "https://www.facebook.com/",
                    Twitter: "https://twitter.com/",
                    LinkedIn: "https://www.linkedin.com/",
                    Skype: "https://www.skype.com/",
                    e_mail: "https://mail.google.com/",
                    favorite: false
               },
               {
                    id: 7,
                    name: "Ella Broun",
                    description: "Nurse",
                    avatar: 50,
                    gender: "women",
                    Facebook: "https://www.facebook.com/",
                    Twitter: "https://twitter.com/",
                    LinkedIn: "https://www.linkedin.com/",
                    Skype: "https://www.skype.com/",
                    e_mail: "https://mail.google.com/",
                    favorite: false
               },
          ],
          List1:[]
     };
     Editeding=id=>{
          this.state.ListEdited = [];
          const index = this.state.List.findIndex(elem => elem.id === id);          
          const ItemToEdit=this.state.List[index];
          this.ItemToEdit={id:uuid()};
          const ListUpdated=[...this.state.List1, ItemToEdit];
          this.state.List.splice(index, 1,);
          this.setState(() => {
               return {
                    List1: ItemToEdit
               }
          })
         
     };          
     onEdit=(id,name, description, avatar, gender)=>{
          const index = this.state.List.findIndex(elem => elem.id === id); 
          const EditedContact={
               name: name, 
               description: description,
               avatar: avatar,
               gender: gender,
               favorite: this.state.ListEdited[0].favorite,
               id: this.state.ListEdited[0].id
          }
          console.log(this.state.List1);
          const ListUpdated=[...this.state.List, EditedContact]; 
          this.setState(() => {
               return {
               List: ListUpdated
               }
          })
     }
     onDelete = (id) => {

          const index = this.state.List.findIndex(elem => elem.id === id);
          let ListNew = [];
          let counter = 0;
          for (let i = 0; i < this.state.List.length; i++) {
               if (i !== index) {
                    ListNew[counter] = this.state.List[i];
                    counter++;
               }

          }
          this.setState(() => {
               return {
                    List: ListNew
               }
          })
     }
     FavoriteNewF = (id) => {
          const index = this.state.List.findIndex(elem => elem.id === id);

          const ListNew = this.state.List.slice();

          ListNew[index].favorite = !ListNew[index].favorite;



          this.setState(() => {
               return {
                    List: ListNew
               }
          })
     }
     onAddNewContact = (name, description, avatar, gender) => {
          this.id++;
          const newContact={
               id:this.id,
               name: name, 
               description: description,
               avatar: avatar,
               gender: gender,
               favorite: false
          };
          const newContactArr=[...this.state.List, newContact];
          this.setState(()=>{
               return{
                    List: newContactArr
               }
          })
     }
  
     render() {
          return (
               <Router>
                    <div className="container bootstrap snippet ">
                         <MainMenu></MainMenu>
                         {/* <ContactList
                              ContactList={this.state.List}
                              onDelete={this.onDelete}
                              FavoriteNewF={this.FavoriteNewF}
                         ></ContactList> */}
                         <Switch>
                              <Route path="/about" exact component={About}></Route>
                              <Route path="/add" exact component={() => (
                                   <AddContact AddNewContact={this.onAddNewContact}/>
                              )}>
                              </Route>
                              <Route path="/edit" exact component={()=>(
                                   <Edit EditContact={this.onEdit}/> 
                              )}>
                              </Route>

                              <Route
                                   path="/"
                                   exact
                                   component={() => (
                                        <ContactList
                                             ContactList={this.state.List}
                                             onDelete={this.onDelete}
                                             FavoriteNewF={this.FavoriteNewF}
                                        />
                                   )}
                              ></Route>
                              <Route path="*" exact component={NotFound}></Route>
                         </Switch>
                    </div>
               </Router>
          )
     }
}
ReactDOM.render(<App />, document.getElementById('root'));
