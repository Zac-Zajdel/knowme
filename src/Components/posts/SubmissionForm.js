import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';

class PostForm extends Component {

  state = {
    text: '',
    errors: {}
  }

  // Not showing up on the screen to the user.
  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: '' });
  }


  render() {
    const { errors } = this.state;
    console.log(this.state.text);

    return (
      <div className="col-md-12">
        <div className="post-form m-5">
          <div className="card card-info">
            <div className="card-header bg-info text-white">Talk to your fellow team members!</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <textarea
                    name='text'
                    className="form-control form-control-lg"
                    onChange={this.onChange}
                    value={this.state.text}
                    error={errors.text}
                    placeholder="What's Up?">
                  </textarea>
                </div>
                <button type="submit" className="btn btn-outline-info">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
})

export default connect(mapStateToProps, { addPost })(PostForm);
