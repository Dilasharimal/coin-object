let body = document.querySelector("body");
let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
        0 or 1: use "this.state" to access the "state" property on this object.*/

    coin.state = Math.floor(Math.random() * 2);
    return this.state;
  },
  toString: function () {
    this.flip();
    if (this.state === 0) {
      return "Head";
    } else {
      return "tail";
    }

    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
  },
  // console.log(coin.tostring());

  toHTML: function () {
    let image = document.createElement("img");

    if (this.state === 0) {
      image.src = "./images/Head.jpg";
    } else {
      image.src = "./images/tail.jpg";
    }
    return image;
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
  },
};
function display20Flips() {
  for (let i = 1; i <= 20; i++) {
    console.log(i + "" + coin.toString());
    coin.toString();
    coin.flip();
    let divs = document.createElement("div");
    body.append(divs);
    divs.append(coin.toString());
  }
  //this.display20Flips(coin);
}
function display20images(displayImg) {
  for (let j = 1; j <= 20; j++) {
    displayImg.toHTML();
    coin.flip();
    let divs = document.createElement("div");
    body.append(divs);
    divs.append(displayImg.toHTML());
  }
}
display20images(coin);
display20Flips();
