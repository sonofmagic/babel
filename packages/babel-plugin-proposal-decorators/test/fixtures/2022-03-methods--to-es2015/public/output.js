var _initProto, _Foo;
const dec = () => {};
class Foo {
  constructor() {
    babelHelpers.defineProperty(this, "value", (_initProto(this), 1));
  }
  a() {
    return this.value;
  }
  ['b']() {
    return this.value;
  }
}
_Foo = Foo;
[_initProto] = babelHelpers.applyDecs2203R(_Foo, [[dec, 2, "a"], [dec, 2, 'b']], []).e;
