import React, { Component } from 'react'

export default class BookShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    this.setState(() => ({
      value: this.props.shelf
    }))
  }

  handleChange(event) {
    const newValue = event.target.value.toString();
  
    if (newValue === this.props.book.shelf) {return;}
    if (newValue === 'move') {
      this.props.updateBook(this.props.book, this.state.value);
    } else {
      this.setState({value: newValue});
    }
  }
  render() {
    return (
      <div className="book-shelf-changer">
      <select value={this.state.value} onChange={this.handleChange}>
        <option value="move" >
                Move to...
              </option>
              {this.props.shelves.map((shelf, index) => {
                return <option key={shelf.id} value={shelf.id}>{shelf.title}</option>
              })}
              <option value="none">None</option>
            </select>
      </div>
    )
  }
}
