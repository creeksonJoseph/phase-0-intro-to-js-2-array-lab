let cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(Ralph) {
  cats.push(Ralph);
  return cats;
}
function destructivelyPrependCat(Bob) {
  cats.unshift(Bob);
  return cats;
}
function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}
function appendCat(Broom) {
  return [...cats, Broom];
}
function prependCat(Arnold) {
  return [Arnold, ...cats];
}
function removeLastCat() {
  return cats.slice(0, -1);
}
function removeFirstCat() {
  return cats.slice(1);
}
