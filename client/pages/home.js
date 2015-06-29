import React from 'react';
import server from '../server';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.ds = server.init();

    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    this.record = this.ds.record.getRecord('user');
    this.subscribeToRecord();
  }

  componentWillUnmount() {
    this.record.discard();
  }

  captureInput(e) {
    let name = e.target.value;
    this.record.set('name', name);
    this.setState({name: name});
  }

  subscribeToRecord() {
    this.record.subscribe('name', (value) => {
      this.setState({name: value});
    });
  }

  render () {
    return (
      <input type='text' value={this.state.name} onChange={(e) => this.captureInput(e)} />
    );
  }
}
