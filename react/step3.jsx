/**
 * Step 3: add interactivity with state
 */

let CardView = React.createClass({
  getInitialState: function() {
    return {
      front: true
    };
  },

  flip: function() {
    this.setState({
      front: !this.state.front
    });
  },

  render: function() {
    let text;
    if (this.state.front) {
      text = this.props.card.question;
    } else {
      text = this.props.card.answer;
    }
    return (
      <div>
        <p>{text}</p>

        <button class="btn btn-primary" onClick={this.flip}>
          Flip
        </button>
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
