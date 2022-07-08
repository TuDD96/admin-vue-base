class Storage {
  static set(key, value) {
    return localStorage.setItem(key, value);
  }

  static get(key) {
    return localStorage.getItem(key);
  }

  static delete(key) {
    return localStorage.removeItem(key);
  }

  static clearAll() {
    return localStorage.clear();
  }
}
