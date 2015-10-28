/**
 * Step 2: customize components with props
 */

let CardView = React.createClass({
  render: function() {
    return (
      <div>
        <p>Question:
          {this.props.card.question}</p>
        <p>Answer:
          {this.props.card.answer}</p>
      </div>
    );
  }
});

let App = React.createClass({
  render: function() {
    return (
      <CardView card={this.props.card}/>
    );
  }
});

let myCard = {
  question: "What is the ultimate answer to life, the universe, and everything?",
  answer: "42"
};

React.render(<App card={myCard}/>, document.getElementById('page'));
