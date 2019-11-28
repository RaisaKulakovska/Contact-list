import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./components/SearchComponent/search";
import ContactList from "./components/ContactList/contactList";

    class App extends Component{
        
    List=[ 
           {name: "Jack Sparrow", description: "Captain", avatar:20, gender: "men"},
           {name: "Cris Nollan", description: "Produser", avatar:12, gender: "men"},
           {name: "Arnold Swarzeneger", description: "Terminator", avatar: 14, gender: "men"},
           {name: "Jack London", description: "Poet", avatar: 80, gender: "men"},
           {name: "Nick Nikels", description: "Polissman", avatar: 60, gender: "men"},
           {name: "Ella Broun", description: "Nurse", avatar: 50, gender: "women"},
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
