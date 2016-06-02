var React = require("react");
var ReactDOM = require("react-dom");

var Hello = React.createClass({

  getInitialState: function(){
    return {
      counter: this.props.count
    } // end rtn
  }, // end fnc getInitialState

  raiseCounter: function() {
    this.setState({
      counter: parseInt(this.state.counter) + 1
    }) // end setState
  }, // end fnc raiseCounter

  render: function(){
    return (
      <div>
      <p>Hello { this.props.name }!</p>
      <p>You are { this.props.age } years old.</p>
      <p>I said 'hello' { this.state.counter} times.</p>
      <button onClick={ this.raiseCounter }>Again.</button>
      </div>
    ); // end rtn
  } // end render: fnc()
}); // end createClass Hello

ReactDOM.render(
  <Hello name="Antonio" age="27" count="1" />,
  document.getElementById( "app" )
) // end DOM.render
