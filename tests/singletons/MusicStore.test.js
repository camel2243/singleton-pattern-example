'use strict';
const MusicStore = require('../../singletons/MusicStore.js');

describe('musicStore', () => {
  beforeEach(() => {
    this.host = '%host%';
    this.port = '%port%';
    this.config = '%config%';
    this.musicStore = MusicStore.instance;
    this.musicStore.init(this.host, this.port, this.config);
    this.musicStore.clear();
  });

  it('should be singleton', () => {
    const instance1 = MusicStore.instance;
    const instance2 = MusicStore.instance;
    const instance3 = new MusicStore();

    expect(instance1 === instance2).toBeTruthy();
    expect(instance2 === instance3).toBeTruthy();
  });

  it('init', () => {
    expect(this.musicStore.host).toBe(this.host);
    expect(this.musicStore.port).toBe(this.port);
    expect(this.musicStore.config).toBe(this.config);
  });

  it('set number as name, number as song', () => {
    const name = 0;
    const song = 100;

    this.musicStore.set(name, song);

    expect(this.musicStore.get(name)).toBe(song);
  });

  it('set object as name, object as song', () => {
    const name = { name: 'name' };
    const song = { song: 'song' };

    this.musicStore.set(name, song);

    expect(this.musicStore.get(name)).toBe(song);
  });

  it('set string as name, string as song', () => {
    const name = 'name';
    const song = 'song';

    this.musicStore.set(name, song);

    expect(this.musicStore.get(name)).toBe(song);
  });

  it('should return name,value pair size', () => {
    this.musicStore.set('name', 'camel');

    expect(this.musicStore.size()).toBe(1);
  })

  it('should clear music store', () => {
    this.musicStore.clear();
    expect(this.musicStore.size()).toBe(0);
  });
});