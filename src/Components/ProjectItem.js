import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
  	this.props.onDelete(id);
  }
  render() {
    return (
      <li className="Project">
        <b>{this.props.project.title}</b> - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
