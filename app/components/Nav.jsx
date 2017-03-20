var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  render: function(){
    return(

      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Boilerplate</li>
            <li>
              <IndexLink to="/" activeClassName="active">Index</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
          </ul>
        </div>
      </div>

    );
  }
});

module.exports = Nav;
