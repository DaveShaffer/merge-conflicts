var React = require("react");
var ReactDOM = require("react-dom");

// var Hello = React.createClass({
//
//   getInitialState: function(){
//     return {
//       counter: this.props.count
//     } // end rtn
//   }, // end fnc getInitialState
//
//   raiseCounter: function(){
//     this.setState({
//       counter: parseInt(this.state.counter) + 1
//     }) // end setState
//   }, // end fnc raiseCounter
//
//   render: function(){
//     return (
//       <div>
//       <p>Hello { this.props.name }!</p>
//       <p>You are { this.props.age } years old.</p>
//       <p>I said 'hello' { this.state.counter} times.</p>
//       <button onClick={ this.raiseCounter }>Again.</button>
//       </div>
//     ); // end rtn
//   } // end render: fnc()
// }); // end createClass Hello

// ReactDOM.render(
//   <Hello name="Antonio" age="27" count="1" />,
//   document.getElementById( "app" )
// ) // end DOM.render

var postData = {
  title: "Saturday Evening Post",
  author: "Ray Miland",
  body: "Welcome home, Schmitty!",
  comments: [
  "comment 1",
  "comment 2",
  "comment 3"
  ] // end ary comments
} // end obj postData

var Post = React.createClass({
  getInitialState: function(){
    return {
      body: postData.body
    } // end rtn
  }, // end func getInitialState

  editPost: function(){
    newBody = prompt("Enter new post: ");
    this.setState({
      body: newBody
    }); // end setState
  }, // end fnc editPost

  render: function(){
    var commentsList = this.props.comments.map(function(comment, index) {
      return <Comment key={index} commentBody={comment} />
    }); // end .map(fnc())
    return (
      <div>
        <h1>Title: { this.props.title }</h1>
        <h2>By: { this.props.author }</h2>
        <p>{ this.state.body }</p>
        <button onClick={ this.editPost }>Edit Post</button>
        <h3>Comments</h3>
        {commentsList}
      </div>
    ) // end rtn
  } // end render: fnc()
}); // end createClass Post

var Comment = React.createClass({
  render: function(){
    return (
      <p>{ this.props.commentBody }</p>
    ) // end rtn
  } // end render: fnc()
}) // end createClass Comment

ReactDOM.render(
      <Post title={ postData.title } author={ postData.author } body={ postData.body } comments={ postData.comments } />,
      document.getElementById( "app" )
); // end DOM.render
