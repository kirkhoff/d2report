import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class Crucible extends Component {
  state = {
    search: ''
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div className="Crucible">
        <FormControl>
          <InputLabel htmlFor="search-guardian">Search Guardian</InputLabel>
          <Input id="search-guardian"
                 value={this.state.search}
                 onChange={this.handleChange} />
        </FormControl>
      </div>
    );
  }
}

export default Crucible;
