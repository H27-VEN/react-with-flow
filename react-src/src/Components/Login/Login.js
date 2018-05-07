import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Login.css';


class Login extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            email: '',
            password: '',
            submit: { class: 'hide', msg: '' },
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }

    login() {
        let self = this;
        axios.post('http://localhost:5000/data/user/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                console.log("response: ",response);
                if (response.data.status) {
                    self.setState({
                        email: '',
                        password: '',
                    });
                    self.props.history.push(`/profile`);
                }

                else {
                    self.setState({
                        submit: { class: 'alert alert-warning', msg: 'Invalid username or password' }
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
                        <a href="#" class="close" data-dismiss="alert">&times;</a>
                        <strong>{this.state.submit.msg}</strong>
                    </div>
                    <form className="col-12">
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                        </div>
                        <button type="button" className="btn btn-md btn-primary" onClick={this.login}>Login</button>
                    </form> 
                    <p className="text-center">Do not have an Account? <Link to="/signup">Sign Up</Link></p>  
                </div>
            </div>
        );
    }



}

export default Login;