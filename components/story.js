'use strict'

var React = require('react');

var Story = React.createClass({
  render: function() {
  	var img = this.props.story.img;
  	var column1 = this.props.story.items[0].text;
  	var column2 = this.props.story.items[1].text;
  	var column3 = this.props.story.items[2].text;
    return (
      <div>        
        <img src={img} />
        <div className="grid">
	        <div className="grid__col grid__col--1-of-3" dangerouslySetInnerHTML={{__html: column1}}>
	        </div>
	        <div className="grid__col grid__col--1-of-3" dangerouslySetInnerHTML={{__html: column2}}>	            
	        </div>
	        <div className="grid__col grid__col--1-of-3" dangerouslySetInnerHTML={{__html: column3}}>	            
	        </div>
	      </div>
      </div>
    )
  }
});

module.exports = Story;