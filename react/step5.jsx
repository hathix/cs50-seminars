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

        <button onClick={this.flip}>
          Flip
        </button>
      </div>
    );
  }
});

let App = React.createClass({
  getInitialState: function() {
    return {
      activeIndex: 0
    }
  },

  setActiveIndex: function(newIndex) {
    this.setState({
      activeIndex: newIndex
    });
  },

  render: function() {
    let activeCard = this.props.cards[this.state.activeIndex];
    return (
        <div>
      <CardView card={activeCard}/>
      <button onClick={this.nextCard}
      </div>
    );
  }
});

let cards = [
  {
    question: "What is the ultimate answer to life, the universe, and everything?",
    answer: "42"
  }, {
    question: "When was Harvard founded?",
    answer: "1636"
  }
];

React.render(<App cards={cards}/>, document.getElementById('page'));
