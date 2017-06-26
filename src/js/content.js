class HelloWorld {
  get() {
    return "hello, webpack!";
  }
}
let a = new HelloWorld();

module.exports = a.get();
