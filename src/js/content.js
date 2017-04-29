class HelloWorld {
  get() {
    return "hello, world!";
  }
}
let a = new HelloWorld();

module.exports = a.get();
