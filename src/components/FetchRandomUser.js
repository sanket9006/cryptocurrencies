import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const url1 = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=INR/";

    const response = await fetch(url);
    const response1 = await fetch(url1);

    const data = await response.json();
    const data1 = await response1.json();

    console.debug(data);

    this.setState({ person: data.results[0], loading: false });
    this.setState({ cryptocurrency: data1.BTC, loading: false });

  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
       
        <div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} />
      </div>
    );
  }
}