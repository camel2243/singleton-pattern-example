'use strict';
const MusicStore = require('../../singletons/MusicStore.js');

describe('musicStore', () => {
  it('should be singleton', () => {
    const instance1 = MusicStore.instance;
    const instance2 = MusicStore.instance;
    const instance3 = new MusicStore();

    expect(instance1 === instance2).toBeTruthy();
    expect(instance2 === instance3).toBeTruthy();
  });

  it('init', () => {
    const host = '%host%';
    const port = '%port%';
    const config = '%config%';
    const musicStore = MusicStore.instance;

    musicStore.init(host, port, config);

    expect(musicStore.host).toBe(host);
    expect(musicStore.port).toBe(port);
    expect(musicStore.config).toBe(config);
  });

  it('set number as name, number as song', () => {
    const name = 0;
    const song = 100;

    const musicStore = MusicStore.instance;
    musicStore.init();

    musicStore.set(name, song);

    expect(musicStore.get(name)).toBe(song);
  });

  it('set object as name, object as song', () => {
    const name = { name: 'name' };
    const song = { song: 'song' };

    const musicStore = MusicStore.instance;
    musicStore.init();

    musicStore.set(name, song);

    expect(musicStore.get(name)).toBe(song);
  });

  it('set string as name, string as song', () => {
    const name = 'name';
    const song = 'song';

    const musicStore = MusicStore.instance;
    musicStore.init();

    musicStore.set(name, song);

    expect(musicStore.get(name)).toBe(song);
  });

  // ?_?
  it('should return name,value pair size', () => {
    const musicStore = MusicStore.instance;
    musicStore.init();

    musicStore.set('name', 'camel');

    expect(musicStore.size()).toBe(1);
  })

  it('should clear music store', () => {
    const musicStore = MusicStore.instance;
    musicStore.init();

    musicStore.clear();
    expect(musicStore.size()).toBe(0);
  });
});