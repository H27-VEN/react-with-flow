import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Signup.css';


class Signup extends Component {

    constructor(props) {
        super(props);
        console.log('props: ',props);
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.state = {
            name: '',
            email: '',
            password: '',
            cpassword: '',
            submit: {class: 'hide', msg: ''}, 
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

        console.log(this.state);
    }

    

    register() {
        let self = this;
        axios.post('http://localhost:5000/data/user/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                console.log('response: ',response);
                if(response.data.status) {
                    self.setState({
                        name: '',
                        email: '',
                        password: '',
                        cpassword: '',
                        submit: { class: 'alert alert-success', msg: 'User Registered!' },
                    });
                    console.log('self props: ',self.props);
                    self.props.history.push(`/login`);
                }

                else{
                    self.setState({
                        submit: {class: 'alert alert-warning', msg: 'Error During Registeration '}
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    
    }

    render() {
       return(
            <div className="mcontainer h-100" >
                <div className="row h-100 justify-content-center align-items-center">
                   <div className={this.state.submit.class}>
                       <a href="#" className="close" data-dismiss="alert">&times;</a>
                       <strong>{this.state.submit.msg}</strong> 
                    </div>
                    <form className="col-12">
                         <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" value={this.state.name} onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input type="password" className="form-control" name="cpassword" id="cpassword" placeholder="Password" value={this.state.cpassword} onChange={this.handleChange} required/>
                        </div>
                        <button type="button" className="btn btn-md btn-primary" onClick={this.register}>Sign Up</button>
                    </form> 
                    <p className="text-center">Already have an Account? <Link to="/login">Login</Link></p>   
                </div>
            </div>
        );
    }


}

export default Signup;

