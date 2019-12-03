import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./components/SearchComponent/search";
import ContactList from "./components/ContactList/contactList";

    class App extends Component{
        
    List=[ 
           {name: "Jack Sparrow", description: "Captain", avatar:20, gender: "men", 
                Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/"},
           {name: "Cris Nollan", description: "Produser", avatar:12, gender: "men", 
                Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/"},
           {name: "Arnold Swarzeneger", description: "Terminator", avatar: 14, gender: "men", 
                Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/"},
           {name: "Nelly Teylor", description: "Teacher", avatar: 88, gender: "women", 
                Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/"},
           {name: "Jack London", description: "Poet", avatar: 80, gender: "men", 
               Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/"},
           {name: "Nick Nikels", description: "Polissman", avatar: 60, gender: "men", 
                Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/"},
           {name: "Ella Broun", description: "Nurse", avatar: 50, gender: "women", 
                Facebook:"https://www.facebook.com/", Twitter:"https://twitter.com/", LinkedIn:"https://www.linkedin.com/",
                Skype:"https://www.skype.com/", e_mail:"https://mail.google.com/"},
    ]
        
    render(){    
    return(
        <div className="container bootstrap snippet">
            <Search></Search>
            <ContactList ContactList={this.List}></ContactList>
        </div>
    )
}
}

ReactDOM.render(<App />, document.getElementById('root'));
