'use strict';
const rewire = require('rewire');
const Song = rewire('../Song.js');

describe('Song', () => {
  beforeEach(() => {
    this.name = 'rock';
    this.song = new Song(this.name);
  });

  it('should register with name', () => {
    const mockFn = jest.fn();
    const revert = Song.__set__('MusicStore.instance.set', mockFn);

    this.song.register();

    expect(mockFn.mock.calls[0][0]).toBe(this.name);
    expect(mockFn.mock.calls[0][1]).toEqual({ registered: true });
    revert();
  });

  it('should return registered:true ', () => {
    const revert = Song.__set__('MusicStore.instance.get', () => ({
      registered: true
    }));

    expect(this.song.isRegistered()).toBeTruthy()
  });

  it('should return registered:false ', () => {
    const revert = Song.__set__('MusicStore.instance.get', () => ({
      registered: false
    }));

    expect(this.song.isRegistered()).toBeFalsy();
  });
});