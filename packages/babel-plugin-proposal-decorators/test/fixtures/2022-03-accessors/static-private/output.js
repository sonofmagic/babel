var _initStatic, _init_a, _get_a, _set_a, _init_b, _get_b, _set_b;
const dec = () => {};
class Foo {
  static {
    [_init_a, _get_a, _set_a, _init_b, _get_b, _set_b, _initStatic] = babelHelpers.applyDecs2203R(this, [[dec, 6, "a", function () {
      return this.#A;
    }, function (value) {
      this.#A = value;
    }], [dec, 6, "b", function () {
      return this.#B;
    }, function (value) {
      this.#B = value;
    }]], []).e;
    _initStatic(this);
  }
  static #A = _init_a(this);
  static set #a(v) {
    _set_a(this, v);
  }
  static get #a() {
    return _get_a(this);
  }
  static #B = _init_b(this, 123);
  static set #b(v) {
    _set_b(this, v);
  }
  static get #b() {
    return _get_b(this);
  }
}
