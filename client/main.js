import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import React from 'react';
import ReactDOM from 'react-dom';

import {Players,calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({},{sort:{score:-1}}).fetch();
    let title = "Score Keep";
    let subTitle = "created by Pedro Tesch";
    ReactDOM.render(<App title={title} subTitle={subTitle} players={calculatePlayerPositions(players)}/>,document.getElementById('app'));
  });
});
