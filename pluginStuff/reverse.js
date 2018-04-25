$.fn.reversEm = function () {
  var text = this.text();
  text = reversIT(text);
  this.text(text);
}

//var word = "Truth";

function reversIT(string) {
  var x = string.split("");
  var y = x.reverse();
  var z = y.join("");
  z = z.charAt(0).toUpperCase() + z.slice(1).toLowerCase();
  console.log(z);
  return z;
}