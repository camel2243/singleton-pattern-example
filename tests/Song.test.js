'use strict';
const MusicStore = require('../singletons/MusicStore.js');
const Song = require('../Song.js');

describe('Song', () => {
  beforeEach(() => {
    this.name = 'rock';
    this.song = new Song(this.name);
  });

  it('should register with name', () => {
    this.song.register();

    expect(MusicStore.instance.get(this.name)).toStrictEqual({ registered: true })
  });

  it('should return registered:true ', () => {
    MusicStore.instance.set(this.name, { registered: true });

    expect(this.song.isRegistered()).toBeTruthy()
  });

  it('should return registered:false ', () => {
    MusicStore.instance.clear();

    expect(this.song.isRegistered()).toBeFalsy();
  });
});