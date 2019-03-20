import React from 'react';
import { connect } from 'react-redux';

import { addRecipe } from '../../store/actions/recipe';

class CreateRecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      author: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Create Recipe form submitted');
    this.props.addRecipe(
      this.state.title,
      this.state.description,
      this.state.author
    );
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleAuthorChange(e) {
    this.setState({
      author: e.target.value
    });
  }
  

  render() {
    return (
      <form className="createRecipe__form" onSubmit={ this.handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input placeholder="Title" name="title" value={this.state.title} onChange={ this.handleTitleChange } />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea placeholder="Description" name="description" value={this.state.description} onChange={ this.handleDescriptionChange } />
        </div>
        <div>
          <label htmlFor="author">Author (this will be filled by the implemented auth): </label>
          <input placeholder="Author" name="author" value={this.state.author} onChange={ this.handleAuthorChange } />
        </div>
        <button type="submit">Create</button>
      </form>
    );
  }
}

/*
const mapStateToProps = (state) => {

};
*/

const mapDispatchToProps = {
  addRecipe
};

export default connect(null, mapDispatchToProps)(CreateRecipeForm);