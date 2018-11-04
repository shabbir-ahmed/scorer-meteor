import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(function () {
    Players.insert({
        name: 'Lauren',
        score: 77
    });
    console.log(Players.find().fetch());
});