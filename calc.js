module.exports = {
  sum: (n1, n2) => {
    return n1 + n2;
  },
  sub: function(n1, n2) {
    return n1 - n2;
  },
  mult: function(n1, n2) {
    return n1 * n2;
  },
  div: function(n1, n2) {
    return n1 / n2;
  },
  calc: function(n1, n2) {
    return this.sum(n1, n2);
  }
};