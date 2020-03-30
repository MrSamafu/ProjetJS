import React, { Component } from 'react';

class APICall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Loading..."
    }
  }
  componentDidMount() {
    fetch("https://ovrstat.com/stats/pc/MrSamafu-2680")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ username: result.name })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    let user = this.state.username;
    return user;
  }
}
export default APICall;