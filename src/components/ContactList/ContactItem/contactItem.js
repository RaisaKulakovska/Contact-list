import React from "react";
import "./contactItem.css";

class ContactItem extends React.Component {
    state = {
        name: this.props.name,
        description: this.props.description,
        avatar: this.props.avatar,
        gender: this.props.gender,
        Facebook: this.props.Facebook,
        Twitter: this.props.Twitter,
        LinkedIn: this.props.LinkedIn,
        Skype: this.props.Skype,
        e_mail: this.props.e_mail,
        btnStatus: false,
        borderStatus: false,
        starStatus: this.props.favorite,
        iconStatus: false,
        PanelBackgroundStatus: false,
         
    };

    RandomAva = () => {
        const newAvatar = Math.floor(Math.random() * 100);
        this.setState({
            avatar: newAvatar,
            btnStatus: !this.state.btnStatus
        })
    }

    BorderShow = () => {
        this.setState({
            borderStatus: true
        });
    }
    BorderHide = () => {

        this.setState({
            borderStatus: false
        });
    }
    PressStar = () => {
        this.setState({
            starStatus: !this.state.starStatus,
            PanelBackgroundStatus: !this.state.PanelBackgroundStatus
        })
    }
    IconOver = () => {
        this.setState({
            iconStatus: true
        })
    }
    IconLeave = () => {
        this.setState({
            iconStatus: false
        })
    }
    PanelBackgroundOn = () => {

    }
    render() {

        const { name, description, avatar, gender, Facebook, Twitter, LinkedIn, Skype, e_mail } = this.state;

        let btnStyle = "btn btn-outline-info true col-2 mr-4";

        let url = `https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;

        if (this.state.btnStatus) {
            btnStyle = "btn btn-outline-danger true col-2 mr-4";
        }

        let borderStyle = "panel-body p-t-12";
        
        if (this.state.borderStatus) {
            //console.log('border exist')
            borderStyle = "panel-body p-t-12 border"
        }

        let starStyle = "fa fa-star"
        if (this.state.starStatus) {
            //console.log('star exist')
            starStyle = "fa fa-star star-pressed"
        }
        let PanelBackgroundStyle = "panel";
        if (this.state.PanelBackgroundStatus) {
            PanelBackgroundStyle = "panel bcg-colored panel-border"
        }
        let a_iconStyle;
        if (this.state.iconStatus) {
            console.log("icon works")
            a_iconStyle = "a_icon-big";
        }
        let borderFuther=""
        return (
            <div className="row justify-content-center">
                <div className="col item mt-3">
                    <div className={PanelBackgroundStyle} >
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
                                    <a href="#" className="btn btn-danger tooltips" data-placement="top" data-toggle="tooltip" data-original-title="Delete"
                                    onClick={this.props.onDelete}
                                    >
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
                                <li >
                                    <a onMouseEnter={this.IconOver} onMouseLeave={this.IconLeave} className={a_iconStyle} title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={Facebook} target="_blank" data-original-title="Facebook"><i className="fa fa-facebook"  ></i></a>
                                </li>
                                <li  >
                                    <a onMouseEnter={this.IconOver} onMouseLeave={this.IconLeave} className={a_iconStyle} title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={Twitter} target="_blank" data-original-title="Twitter"><i className="fa fa-twitter {iconStyle}" ></i></a>
                                </li>
                                <li>
                                    <a onMouseEnter={this.IconOver} onMouseLeave={this.IconLeave} className={a_iconStyle} title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={LinkedIn} target="_blank" data-original-title="LinkedIn"><i className="fa fa-linkedin" ></i></a>
                                </li>
                                <li>
                                    <a onMouseEnter={this.IconOver} onMouseLeave={this.IconLeave} className={a_iconStyle} title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={Skype} target="_blank" data-original-title="Skype"><i className="fa fa-skype {iconStyle}"></i></a>
                                </li>
                                <li>
                                    <a onMouseEnter={this.IconOver} onMouseLeave={this.IconLeave} className={a_iconStyle} title="" data-placement="top" data-toggle="tooltip" class="tooltips" href={e_mail} target="_blank" data-original-title="Message"><i className="fa fa-envelope-o {iconStyle}" ></i></a>
                                </li>
                            </ul>
                            <div className="row d-flex flex-row-reverse">
                                <button className={btnStyle} onClick={this.RandomAva}>Random</button>
                                <div className="col-1 star-cont pt-1" onClick={this.PressStar}>
                                    <i class={starStyle}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactItem;