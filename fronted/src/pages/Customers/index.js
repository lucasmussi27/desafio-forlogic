import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class CustomersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            customers: [{
                name: '',
                contact: ''
            }]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/customers')
            .then(response => {
                this.setState({ customers: response.data })
            }).catch(error => console.log(error))
    }

    setName = async(e) => {
        this.setState({
            name: e.target.value
        })
    }

    setContact = async(e) => {
        this.setState({
            name: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            name: e.target.value,
            contact: e.target.value
        };
        axios.post('http://localhost:4000/customers', obj)
            .then(res => console.log(res.data));
        this.setState({
            name: '',
            contact: ''
        })
    }

    render() {
        return(
            <section id="customers" className="container-box">
                <div className="jumbotron">
                    <h1>Customers</h1>
                </div>
                <div style={{ marginTop: 10 }}>
                <h3 align="center">SIGN UP NEW CUSTOMER</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>NAME:  </label>
                            <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.name}
                            onChange={this.setName}
                            />
                        </div>
                        <div className="form-group">
                            <label>CONTACT: </label>
                            <input type="text" 
                            className="form-control"
                            value={this.state.contact}
                            onChange={this.setContact}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" 
                            value="SIGN UP" 
                            className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
                <div>
                    <h3 align="center">Business List</h3>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                        <tr>
                            <th>NAME</th>
                            <th>CONTACT'S NAME</th>
                            <th>SIGN DATE</th>
                            <th colSpan="2">ACTIONS</th>
                        </tr>
                        </thead>
                        <tbody>{(this.state.customers.length && this.state.customers.map((item, index) =>
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.contact}</td>
                                <td>{item.signDate}</td>
                            </tr>) || <tr>
                                <td>There isn't no Customer Signed Up Yet!</td>
                            </tr> )}
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}