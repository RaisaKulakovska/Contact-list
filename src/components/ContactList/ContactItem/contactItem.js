import React from "react";
import "./contactItem.css";

class ContactItem extends React.Component {
    state = {
        name: this.props.name,
        description: this.props.description,
        avatar: this.props.avatar,
        gender: this.props.gender,
        btnStatus: false,
        borderStatus: false
    };

    RandomAva = () => {
        const newAvatar = Math.floor(Math.random() * 100);
        this.setState({
            avatar: newAvatar,
            btnStatus: !this.state.btnStatus            
        })
    }

    BorderShow=()=>{
        this.setState({
        borderStatus: false
        });
    }
    BorderHide=()=>{
        this.setState({
        borderStatus: true
        });
    }
    render() {

        const { name, description, avatar, gender, Facebook, Twitter, LinkedIn, Skype, e_mail } = this.state;

        let btnStyle="btn btn-outline-info true col-2 offset-8";
        
        let borderStyle="panel-body p-t-12 justyfy-content-left";
        let url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;

        if(this.state.btnStatus){
            btnStyle="btn btn-outline-danger true col-2 offset-8";
            btnStyle="btn btn-outline-danger true col-2 offset-8"
        }
        if(this.state.borderStatus){
            borderStyle="panel-body p-t-12 justyfy-content-left"
        }
        return (
            <div className="row justify-content-center">
                <div className="col item mt-3">
                    <div className="panel" >
                        <div className={borderStyle}
                         onMouseEnter={this.BorderShow}
                         onMouseLeave={this.BorderHide}
                         >
                            <div className="media-main">
                                <a className="pull-left" href="#">
                                    <img className="thumb-lg img-circle bx-s" src={url} alt="" />
                                </a>
                                <div className="pull-right btn-group-sm">
                                    <a href="#" className="btn btn-success tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Edit">
                                        <i className="fa fa-pencil"></i>
                                    </a>
                                    <a href="#" className="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete">
                                        <i className="fa fa-close"></i>
                                    </a>
                                </div>
                                <div className="info">
                                    <h4>{name}</h4>
                                    <p className="text-muted">{description}</p>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <hr />
                            <ul className="social-links list-inline p-b-10">
                                <li>
                                    <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={Facebook} target="_blank" data-original-title="Facebook"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={Twitter} target="_blank" data-original-title="Twitter"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={LinkedIn} target="_blank" data-original-title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                                </li>
                                <li>
                                    <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={Skype} target="_blank" data-original-title="Skype"><i class="fa fa-skype"></i></a>
                                </li>
                                <li>
                                    <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={e_mail} target="_blank" data-original-title="Message"><i class="fa fa-envelope-o"></i></a>
                                </li>
                            </ul>
                            <button className={btnStyle} onClick={this.RandomAva}>Random</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactItem;