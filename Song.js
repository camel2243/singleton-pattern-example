'use strict';
const MusicStore = require('./singletons/MusicStore.js');

module.exports = class Song {
  constructor(name) {
    this.name = name;
    MusicStore.instance.init('%host%', '%port%', '%config%')
  }

  register() {
    MusicStore.instance.set(this.name, { registered: true });
  }

  isRegistered() {
    return MusicStore.instance.get(this.name) && MusicStore.instance.get(this.name).registered;
  }
}