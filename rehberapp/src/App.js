import React, { Component } from "react";
import "../src/css/App.css";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    this.setState({ loading: true });
    axios.get(baseURL).then((res) => {
      this.setState({ loading: false, users: res.data });
    });
  };

  render() {
    const text = this.state.loading ? (
      "loading..."
    ) : (
      this.state.users.map((user) => (
        <li key={user.id}>
          {user.username}:{user.name}
        </li>
      ))
    );
    return (
      <div>
        <ul className="App-header" >{text}</ul>
      </div>
    );
  }
}

