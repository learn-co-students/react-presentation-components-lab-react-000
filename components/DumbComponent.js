const React = require('react');

class DumbComponent extends React.Component{
  constructor(props){
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      mood: 'happy'
    }
  }
  
  handleClick(){
    this.state.mood === 'happy' ? this.setState({mood:'sad'}) : this.setState({mood:'happy'})
  }
  
  render(){
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

module.exports = DumbComponent;