import React, { Component } from 'react';
import UserModel from '../models/user'

class Login extends Component {
    state = {
        email: "",
        password: "",
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        UserModel.create(this.state)
            .then(res => {
                this.setState({

                })
                this.props.history.push('/login')
            })
            .catch(err => console.log(err))
        }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h4 className="mb-3">Sign up</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    onChange={this.handleChange}
                                    className="form control form-control-lg"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={this.state.name}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input
                                    onChange={this.handleChange} className="form control form-control-lg"
                                    className="form control form-control-lg"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Password</label>
                                <input
                                    onChange={this.handleChange} className="form control form-control-lg"
                                    className="form control form-control-lg"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Confirm Password</label>
                                <input
                                    onChange={this.handleChange} className="form control form-control-lg"
                                    className="form control form-control-lg"
                                    type="password"
                                    id="password2"
                                    name="password2"
                                    value={this.state.password}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Login;
