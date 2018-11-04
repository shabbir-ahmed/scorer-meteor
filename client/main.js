import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/players';

import './main.html'

const players = [{
  _id: '1',
  name: 'Shabbir',
  score: 77
},{
  _id: '2',
  name: 'Korey',
  score: 55
},{
  _id: '3',
  name: 'Lauren',
  score: -12
}];

const renderPlayers = function (playersList) {
  return playersList.map(function (player) {
    return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
  });
};

Meteor.startup(function (){
  let title = "Welcome to Score Keep";
  let name = "Shabbir Ahmed";
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>This is my second p.</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});
