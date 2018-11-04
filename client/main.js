import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import './main.html'

Meteor.startup(function (){
  let name = "Shabbir Ahmed";
  let jsx = <p>Hello {name}!</p>;
  ReactDOM.render(jsx, document.getElementById('app'));
});
