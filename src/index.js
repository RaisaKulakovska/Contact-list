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
     id: 100;
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
          singleContactArr: {

          }

     };


     GetContactID = id => {
          const index = this.state.List.findIndex(elem => elem.id === id);
          for (let i = 0; i < this.state.List.length; i++) {
               if (i === index) {
                    let singleContact = {
                         id: this.id,
                         name: this.state.List[i].name,
                         description: this.state.List[i].description,
                         avatar: this.state.List[i].avatar,
                         gender: this.state.List[i].gender,
                         favorite: this.state.List[i].favorite
                    };
                    this.setState({
                         singleContactArr: singleContact
                    });
               }
          }
     };
     EditContact = (id, name, description, avatar, gender) => {
          const index = this.state.List.findIndex(elem => elem.id === id);
          const filferedList = this.state.List.filter(item => item.id === !index);
          console.log(filferedList);
          const selectedItem = this.state.List.find(item => item.id === index)
          console.log(selectedItem);
          this.setState({
               List: filferedList,
               // id: selectedItem.id,
               // name: selectedItem.name,
               // description: selectedItem.description,
               // avatar: selectedItem.avatar,
               // gender: selectedItem.gender
          })
     }
     onAddNewContact = (name, description, avatar, gender) => {
          this.id++;
          const newContact = {
               id: this.id,
               name: name,
               description: description,
               avatar: avatar,
               gender: gender,
               favorite: false
          };
          const newContactArr = [...this.state.List, newContact];
          this.setState(() => {
               return {
                    List: newContactArr
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
                              <Route path="/add"
                                   exact
                                   component={() => (
                                        <AddContact AddNewContact={this.onAddNewContact} />
                                   )}>
                              </Route>
                              <Route path="/edit"
                                   exact
                                   component={() => (
                                        <Edit
                                             EditContact={this.EditContact}
                                        />
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
                                             GetContactID={this.GetContactID}
                                             EditContact={this.EditContact}
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
