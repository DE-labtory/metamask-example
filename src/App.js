import React from 'react';
import './App.css';
import * as metamask from './metamask'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      isMetamaskExists: false,
    }
  }

  async componentDidMount() {
    const isMetamaskExists = await metamask.exists();
    const accounts = await metamask.getAccounts();
    this.setState({
      isMetamaskExists: isMetamaskExists,
      accounts: accounts
    });
    console.log(accounts)
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h2>Is metamask available?</h2>
            {this.state.isMetamaskExists ? "yes" : "no"}

            <h3>Accounts</h3>
            <ul>
              {this.state.accounts.map((account, i) => {
                return (account);
              })}
            </ul>
          </header>
        </div>
      </React.Fragment>
    )
  }
}
