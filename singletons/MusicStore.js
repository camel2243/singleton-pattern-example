'use strict';

const store = Symbol('redisStore');
const singleton = Symbol('singleton');

module.exports = class MusicStore {
  // singleton.instance
  static get instance() {
    this[singleton] = new this;

    return this[singleton];
  }
  // new singleton()
  constructor() {

  }

  // configuration
  init(host, port, config) {
    this.host = host;
    this.port = port;
    this.config = config;

    // connect with redis
    this[store] = {};
  }

  // set song
  set(name, song) {
    this[store][name] = song;
  }
  // get song
  get(name) {
    return this[store][name];
  }
  // size
  size() {
    return Object.keys(this[store]).length;
  }
  // clear store
  clear() {
    this[store] = {};
  }
}