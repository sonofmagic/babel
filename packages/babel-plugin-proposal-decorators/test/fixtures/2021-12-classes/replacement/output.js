var _initClass;
const dec = () => {};
let _Foo;
new class extends babelHelpers.identity {
  static [class Foo {
    static {
      [_Foo, _initClass] = babelHelpers.applyDecs(this, [], [dec]);
    }
  }];
  foo = new _Foo();
  constructor() {
    super(_Foo), _initClass();
  }
}();
const foo = new _Foo();
