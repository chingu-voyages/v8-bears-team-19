import React from 'react';

class CreateRecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('aa');
  }

  render() {
    return (
      <form className="createRecipe__form" onSubmit={ this.handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input placeholder="Title" name="title" />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea placeholder="Description" name="description" />
        </div>
        <div>
          <label htmlFor="author">Author (this will be filled by the implemented auth): </label>
          <input placeholder="Author" name="author" />
        </div>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default CreateRecipeForm;