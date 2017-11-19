import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class Player extends React.Component {
  getDescription () {
    return `${this.props.player.name}`;
  }
  getStats () {
    return `${this.props.player.position} place (${this.props.player.score} points)`;
  }
  render () {
    let positionedClass = `item item--position-${this.props.player.rank}`;
    return (
      <div key={this.props.player._id} className={positionedClass}>
        <div className="player">
          <div className="player__name-stats">
            <p className="player__name">{this.getDescription()}</p>
            <p className="player__stats">{this.getStats()}</p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => Players.update(this.props.player._id, {$inc:{score:-1}}) }>-1</button>
            <button className="button button--round" onClick={() => Players.update(this.props.player._id, {$inc:{score:+1}}) }>+1</button>
            <button className="button button--round" onClick={() => Players.remove(this.props.player._id) }>X</button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
};
