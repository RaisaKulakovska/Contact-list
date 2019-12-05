import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./components/SearchComponent/search";
import ContactList from "./components/ContactList/contactList";

    class App extends Component{
     state={
          List:[ 
               {id:1, name: "Jack Sparrow", description: "Captain", avatar:20, gender: "men", 
                    Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                    Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/" , favorite: false},
               {id:2, name: "Cris Nollan", description: "Produser", avatar:12, gender: "men", 
                    Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                    Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/" , favorite: true},
               {id:3, name: "Arnold Swarzeneger", description: "Terminator", avatar: 14, gender: "men", 
                    Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                    Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/" , favorite: false},
               {id:4, name: "Nelly Teylor", description: "Teacher", avatar: 88, gender: "women", 
                    Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                    Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/" , favorite: true},
               {id:5, name: "Jack London", description: "Poet", avatar: 80, gender: "men", 
                   Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                    Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/" , favorite: false},
               {id:6, name: "Nick Nikels", description: "Polissman", avatar: 60, gender: "men", 
                    Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                    Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/" , favorite: false},
               {id:7, name: "Ella Broun", description: "Nurse", avatar: 50, gender: "women", 
                    Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                    Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/", favorite: false},
        ]
     } 
    
     onDelete =(id)=>{
          
          const index = this.state.List.findIndex(elem => elem.id === id);
          let ListNew=[];
          let counter=0;
          for(let i =0;i<this.state.List.length;i++){               
               if(i!=index){
                    ListNew[counter]=this.state.List[i];
                    counter++;
               }
               
          }
          this.setState(()=>{
          return{
               List: ListNew               
          }
     })  
     }  
    render(){    
    return(
        <div className="container bootstrap snippet">
            <Search></Search>
            <ContactList 
               ContactList={this.state.List}
               onDelete={this.onDelete}
          >
            </ContactList>
        </div>
    )
}
}

ReactDOM.render(<App />, document.getElementById('root'));
