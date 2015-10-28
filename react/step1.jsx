/**
 * Step 1: your first component
 */

let App = React.createClass({
  render: function() {
    return (
      <div>
        <p>Question: What is the ultimate answer to life, the universe, and everything?</p>
        <p>Answer: 42</p>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('page'));
