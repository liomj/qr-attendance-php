function _a1(e, b) {
  this.count = e;
  this._fc = b;
  this.__defineGetter__("Count", function() {
    return this.count;
  });
  this.__defineGetter__("_dm", function() {
    return this._fc;
  });
}

function _a2(e, b, d) {
  this._bm = e;
  this._do = d ? [ b, d ] :Array(b);
  this.__defineGetter__("_bo", function() {
    return this._bm;
  });
  this.__defineGetter__("_dn", function() {
    return this._bm * this._fo;
  });
  this.__defineGetter__("_fo", function() {
    for (var a = 0, d = 0; d < this._do.length; d++) a += this._do[d].length;
    return a;
  });
  this._fb = function() {
    return this._do;
  };
}

function _a3(e, b, d, a, g, f) {
  this._bs = e;
  this._ar = b;
  this._do = [ d, a, g, f ];
  e = 0;
  b = d._bo;
  d = d._fb();
  for (a = 0; a < d.length; a++) g = d[a], e += g.Count * (g._dm + b);
  this._br = e;
  this.__defineGetter__("_fd", function() {
    return this._bs;
  });
  this.__defineGetter__("_as", function() {
    return this._ar;
  });
  this.__defineGetter__("_dp", function() {
    return this._br;
  });
  this.__defineGetter__("_cr", function() {
    return 17 + 4 * this._bs;
  });
  this._aq = function() {
    var a, d, b, g, f = this._cr, e = new _ac(f);
    e._bq(0, 0, 9, 9);
    e._bq(f - 8, 0, 8, 9);
    e._bq(0, f - 8, 9, 8);
    a = this._ar.length;
    for (d = 0; a > d; d++) for (b = this._ar[d] - 2, g = 0; a > g; g++) 0 == d && (0 == g || g == a - 1) || d == a - 1 && 0 == g || e._bq(this._ar[g] - 2, b, 5, 5);
    e._bq(6, 9, 1, f - 17);
    e._bq(9, 6, f - 17, 1);
    6 < this._bs && (e._bq(f - 11, 0, 3, 6), e._bq(0, f - 11, 6, 3));
    return e;
  };
  this._bu = function(a) {
    return this._do[a.ordinal()];
  };
}

function _ay() {
  return [ new _a3(1, [], new _a2(7, new _a1(1, 19)), new _a2(10, new _a1(1, 16)), new _a2(13, new _a1(1, 13)), new _a2(17, new _a1(1, 9))), new _a3(2, [ 6, 18 ], new _a2(10, new _a1(1, 34)), new _a2(16, new _a1(1, 28)), new _a2(22, new _a1(1, 22)), new _a2(28, new _a1(1, 16))), new _a3(3, [ 6, 22 ], new _a2(15, new _a1(1, 55)), new _a2(26, new _a1(1, 44)), new _a2(18, new _a1(2, 17)), new _a2(22, new _a1(2, 13))), new _a3(4, [ 6, 26 ], new _a2(20, new _a1(1, 80)), new _a2(18, new _a1(2, 32)), new _a2(26, new _a1(2, 24)), new _a2(16, new _a1(4, 9))), new _a3(5, [ 6, 30 ], new _a2(26, new _a1(1, 108)), new _a2(24, new _a1(2, 43)), new _a2(18, new _a1(2, 15), new _a1(2, 16)), new _a2(22, new _a1(2, 11), new _a1(2, 12))), new _a3(6, [ 6, 34 ], new _a2(18, new _a1(2, 68)), new _a2(16, new _a1(4, 27)), new _a2(24, new _a1(4, 19)), new _a2(28, new _a1(4, 15))), new _a3(7, [ 6, 22, 38 ], new _a2(20, new _a1(2, 78)), new _a2(18, new _a1(4, 31)), new _a2(18, new _a1(2, 14), new _a1(4, 15)), new _a2(26, new _a1(4, 13), new _a1(1, 14))), new _a3(8, [ 6, 24, 42 ], new _a2(24, new _a1(2, 97)), new _a2(22, new _a1(2, 38), new _a1(2, 39)), new _a2(22, new _a1(4, 18), new _a1(2, 19)), new _a2(26, new _a1(4, 14), new _a1(2, 15))), new _a3(9, [ 6, 26, 46 ], new _a2(30, new _a1(2, 116)), new _a2(22, new _a1(3, 36), new _a1(2, 37)), new _a2(20, new _a1(4, 16), new _a1(4, 17)), new _a2(24, new _a1(4, 12), new _a1(4, 13))), new _a3(10, [ 6, 28, 50 ], new _a2(18, new _a1(2, 68), new _a1(2, 69)), new _a2(26, new _a1(4, 43), new _a1(1, 44)), new _a2(24, new _a1(6, 19), new _a1(2, 20)), new _a2(28, new _a1(6, 15), new _a1(2, 16))), new _a3(11, [ 6, 30, 54 ], new _a2(20, new _a1(4, 81)), new _a2(30, new _a1(1, 50), new _a1(4, 51)), new _a2(28, new _a1(4, 22), new _a1(4, 23)), new _a2(24, new _a1(3, 12), new _a1(8, 13))), new _a3(12, [ 6, 32, 58 ], new _a2(24, new _a1(2, 92), new _a1(2, 93)), new _a2(22, new _a1(6, 36), new _a1(2, 37)), new _a2(26, new _a1(4, 20), new _a1(6, 21)), new _a2(28, new _a1(7, 14), new _a1(4, 15))), new _a3(13, [ 6, 34, 62 ], new _a2(26, new _a1(4, 107)), new _a2(22, new _a1(8, 37), new _a1(1, 38)), new _a2(24, new _a1(8, 20), new _a1(4, 21)), new _a2(22, new _a1(12, 11), new _a1(4, 12))), new _a3(14, [ 6, 26, 46, 66 ], new _a2(30, new _a1(3, 115), new _a1(1, 116)), new _a2(24, new _a1(4, 40), new _a1(5, 41)), new _a2(20, new _a1(11, 16), new _a1(5, 17)), new _a2(24, new _a1(11, 12), new _a1(5, 13))), new _a3(15, [ 6, 26, 48, 70 ], new _a2(22, new _a1(5, 87), new _a1(1, 88)), new _a2(24, new _a1(5, 41), new _a1(5, 42)), new _a2(30, new _a1(5, 24), new _a1(7, 25)), new _a2(24, new _a1(11, 12), new _a1(7, 13))), new _a3(16, [ 6, 26, 50, 74 ], new _a2(24, new _a1(5, 98), new _a1(1, 99)), new _a2(28, new _a1(7, 45), new _a1(3, 46)), new _a2(24, new _a1(15, 19), new _a1(2, 20)), new _a2(30, new _a1(3, 15), new _a1(13, 16))), new _a3(17, [ 6, 30, 54, 78 ], new _a2(28, new _a1(1, 107), new _a1(5, 108)), new _a2(28, new _a1(10, 46), new _a1(1, 47)), new _a2(28, new _a1(1, 22), new _a1(15, 23)), new _a2(28, new _a1(2, 14), new _a1(17, 15))), new _a3(18, [ 6, 30, 56, 82 ], new _a2(30, new _a1(5, 120), new _a1(1, 121)), new _a2(26, new _a1(9, 43), new _a1(4, 44)), new _a2(28, new _a1(17, 22), new _a1(1, 23)), new _a2(28, new _a1(2, 14), new _a1(19, 15))), new _a3(19, [ 6, 30, 58, 86 ], new _a2(28, new _a1(3, 113), new _a1(4, 114)), new _a2(26, new _a1(3, 44), new _a1(11, 45)), new _a2(26, new _a1(17, 21), new _a1(4, 22)), new _a2(26, new _a1(9, 13), new _a1(16, 14))), new _a3(20, [ 6, 34, 62, 90 ], new _a2(28, new _a1(3, 107), new _a1(5, 108)), new _a2(26, new _a1(3, 41), new _a1(13, 42)), new _a2(30, new _a1(15, 24), new _a1(5, 25)), new _a2(28, new _a1(15, 15), new _a1(10, 16))), new _a3(21, [ 6, 28, 50, 72, 94 ], new _a2(28, new _a1(4, 116), new _a1(4, 117)), new _a2(26, new _a1(17, 42)), new _a2(28, new _a1(17, 22), new _a1(6, 23)), new _a2(30, new _a1(19, 16), new _a1(6, 17))), new _a3(22, [ 6, 26, 50, 74, 98 ], new _a2(28, new _a1(2, 111), new _a1(7, 112)), new _a2(28, new _a1(17, 46)), new _a2(30, new _a1(7, 24), new _a1(16, 25)), new _a2(24, new _a1(34, 13))), new _a3(23, [ 6, 30, 54, 74, 102 ], new _a2(30, new _a1(4, 121), new _a1(5, 122)), new _a2(28, new _a1(4, 47), new _a1(14, 48)), new _a2(30, new _a1(11, 24), new _a1(14, 25)), new _a2(30, new _a1(16, 15), new _a1(14, 16))), new _a3(24, [ 6, 28, 54, 80, 106 ], new _a2(30, new _a1(6, 117), new _a1(4, 118)), new _a2(28, new _a1(6, 45), new _a1(14, 46)), new _a2(30, new _a1(11, 24), new _a1(16, 25)), new _a2(30, new _a1(30, 16), new _a1(2, 17))), new _a3(25, [ 6, 32, 58, 84, 110 ], new _a2(26, new _a1(8, 106), new _a1(4, 107)), new _a2(28, new _a1(8, 47), new _a1(13, 48)), new _a2(30, new _a1(7, 24), new _a1(22, 25)), new _a2(30, new _a1(22, 15), new _a1(13, 16))), new _a3(26, [ 6, 30, 58, 86, 114 ], new _a2(28, new _a1(10, 114), new _a1(2, 115)), new _a2(28, new _a1(19, 46), new _a1(4, 47)), new _a2(28, new _a1(28, 22), new _a1(6, 23)), new _a2(30, new _a1(33, 16), new _a1(4, 17))), new _a3(27, [ 6, 34, 62, 90, 118 ], new _a2(30, new _a1(8, 122), new _a1(4, 123)), new _a2(28, new _a1(22, 45), new _a1(3, 46)), new _a2(30, new _a1(8, 23), new _a1(26, 24)), new _a2(30, new _a1(12, 15), new _a1(28, 16))), new _a3(28, [ 6, 26, 50, 74, 98, 122 ], new _a2(30, new _a1(3, 117), new _a1(10, 118)), new _a2(28, new _a1(3, 45), new _a1(23, 46)), new _a2(30, new _a1(4, 24), new _a1(31, 25)), new _a2(30, new _a1(11, 15), new _a1(31, 16))), new _a3(29, [ 6, 30, 54, 78, 102, 126 ], new _a2(30, new _a1(7, 116), new _a1(7, 117)), new _a2(28, new _a1(21, 45), new _a1(7, 46)), new _a2(30, new _a1(1, 23), new _a1(37, 24)), new _a2(30, new _a1(19, 15), new _a1(26, 16))), new _a3(30, [ 6, 26, 52, 78, 104, 130 ], new _a2(30, new _a1(5, 115), new _a1(10, 116)), new _a2(28, new _a1(19, 47), new _a1(10, 48)), new _a2(30, new _a1(15, 24), new _a1(25, 25)), new _a2(30, new _a1(23, 15), new _a1(25, 16))), new _a3(31, [ 6, 30, 56, 82, 108, 134 ], new _a2(30, new _a1(13, 115), new _a1(3, 116)), new _a2(28, new _a1(2, 46), new _a1(29, 47)), new _a2(30, new _a1(42, 24), new _a1(1, 25)), new _a2(30, new _a1(23, 15), new _a1(28, 16))), new _a3(32, [ 6, 34, 60, 86, 112, 138 ], new _a2(30, new _a1(17, 115)), new _a2(28, new _a1(10, 46), new _a1(23, 47)), new _a2(30, new _a1(10, 24), new _a1(35, 25)), new _a2(30, new _a1(19, 15), new _a1(35, 16))), new _a3(33, [ 6, 30, 58, 86, 114, 142 ], new _a2(30, new _a1(17, 115), new _a1(1, 116)), new _a2(28, new _a1(14, 46), new _a1(21, 47)), new _a2(30, new _a1(29, 24), new _a1(19, 25)), new _a2(30, new _a1(11, 15), new _a1(46, 16))), new _a3(34, [ 6, 34, 62, 90, 118, 146 ], new _a2(30, new _a1(13, 115), new _a1(6, 116)), new _a2(28, new _a1(14, 46), new _a1(23, 47)), new _a2(30, new _a1(44, 24), new _a1(7, 25)), new _a2(30, new _a1(59, 16), new _a1(1, 17))), new _a3(35, [ 6, 30, 54, 78, 102, 126, 150 ], new _a2(30, new _a1(12, 121), new _a1(7, 122)), new _a2(28, new _a1(12, 47), new _a1(26, 48)), new _a2(30, new _a1(39, 24), new _a1(14, 25)), new _a2(30, new _a1(22, 15), new _a1(41, 16))), new _a3(36, [ 6, 24, 50, 76, 102, 128, 154 ], new _a2(30, new _a1(6, 121), new _a1(14, 122)), new _a2(28, new _a1(6, 47), new _a1(34, 48)), new _a2(30, new _a1(46, 24), new _a1(10, 25)), new _a2(30, new _a1(2, 15), new _a1(64, 16))), new _a3(37, [ 6, 28, 54, 80, 106, 132, 158 ], new _a2(30, new _a1(17, 122), new _a1(4, 123)), new _a2(28, new _a1(29, 46), new _a1(14, 47)), new _a2(30, new _a1(49, 24), new _a1(10, 25)), new _a2(30, new _a1(24, 15), new _a1(46, 16))), new _a3(38, [ 6, 32, 58, 84, 110, 136, 162 ], new _a2(30, new _a1(4, 122), new _a1(18, 123)), new _a2(28, new _a1(13, 46), new _a1(32, 47)), new _a2(30, new _a1(48, 24), new _a1(14, 25)), new _a2(30, new _a1(42, 15), new _a1(32, 16))), new _a3(39, [ 6, 26, 54, 82, 110, 138, 166 ], new _a2(30, new _a1(20, 117), new _a1(4, 118)), new _a2(28, new _a1(40, 47), new _a1(7, 48)), new _a2(30, new _a1(43, 24), new _a1(22, 25)), new _a2(30, new _a1(10, 15), new _a1(67, 16))), new _a3(40, [ 6, 30, 58, 86, 114, 142, 170 ], new _a2(30, new _a1(19, 118), new _a1(6, 119)), new _a2(28, new _a1(18, 47), new _a1(31, 48)), new _a2(30, new _a1(34, 24), new _a1(34, 25)), new _a2(30, new _a1(20, 15), new _a1(61, 16))) ];
}

function _ae(e, b, d, a, g, f, k, h, l) {
  this.a11 = e;
  this.a12 = a;
  this.a13 = k;
  this.a21 = b;
  this.a22 = g;
  this.a23 = h;
  this.a31 = d;
  this.a32 = f;
  this.a33 = l;
  this._ad = function(a) {
    var d, b, g, f, e, h, k, l, B, C, x, y, z, A;
    d = a.length;
    b = this.a11;
    g = this.a12;
    f = this.a13;
    e = this.a21;
    h = this.a22;
    k = this.a23;
    l = this.a31;
    B = this.a32;
    C = this.a33;
    for (x = 0; d > x; x += 2) y = a[x], z = a[x + 1], A = f * y + k * z + C, a[x] = (b * y + e * z + l) / A, 
    a[x + 1] = (g * y + h * z + B) / A;
  };
  this._fp = function(a, d) {
    var b, g, f, e, h;
    b = a.length;
    for (g = 0; b > g; g++) f = a[g], e = d[g], h = this.a13 * f + this.a23 * e + this.a33, 
    a[g] = (this.a11 * f + this.a21 * e + this.a31) / h, d[g] = (this.a12 * f + this.a22 * e + this.a32) / h;
  };
  this._fr = function() {
    return new _ae(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
  };
  this.times = function(a) {
    return new _ae(this.a11 * a.a11 + this.a21 * a.a12 + this.a31 * a.a13, this.a11 * a.a21 + this.a21 * a.a22 + this.a31 * a.a23, this.a11 * a.a31 + this.a21 * a.a32 + this.a31 * a.a33, this.a12 * a.a11 + this.a22 * a.a12 + this.a32 * a.a13, this.a12 * a.a21 + this.a22 * a.a22 + this.a32 * a.a23, this.a12 * a.a31 + this.a22 * a.a32 + this.a32 * a.a33, this.a13 * a.a11 + this.a23 * a.a12 + this.a33 * a.a13, this.a13 * a.a21 + this.a23 * a.a22 + this.a33 * a.a23, this.a13 * a.a31 + this.a23 * a.a32 + this.a33 * a.a33);
  };
}

function _bg(e, b) {
  this.bits = e;
  this.points = b;
}

function Detector(e) {
  this.image = e;
  this._am = null;
  this._bi = function(b, d, a, g) {
    var f, e, h, l, m, r, n, u, w, q, t = Math.abs(g - d) > Math.abs(a - b);
    t && (f = b, b = d, d = f, f = a, a = g, g = f);
    e = Math.abs(a - b);
    h = Math.abs(g - d);
    l = -e >> 1;
    m = g > d ? 1 :-1;
    r = a > b ? 1 :-1;
    n = 0;
    u = b;
    for (f = d; u != a; u += r) {
      w = t ? f :u;
      q = t ? u :f;
      1 == n ? this.image[w + q * qrcode.width] && n++ :this.image[w + q * qrcode.width] || n++;
      if (3 == n) return g = u - b, d = f - d, Math.sqrt(g * g + d * d);
      l += h;
      if (0 < l) {
        if (f == g) break;
        f += m;
        l -= e;
      }
    }
    b = a - b;
    d = g - d;
    return Math.sqrt(b * b + d * d);
  };
  this._bh = function(b, d, a, g) {
    var f = this._bi(b, d, a, g), e = 1;
    a = b - (a - b);
    0 > a ? (e = b / (b - a), a = 0) :a >= qrcode.width && (e = (qrcode.width - 1 - b) / (a - b), 
    a = qrcode.width - 1);
    g = Math.floor(d - (g - d) * e);
    e = 1;
    0 > g ? (e = d / (d - g), g = 0) :g >= qrcode.height && (e = (qrcode.height - 1 - d) / (g - d), 
    g = qrcode.height - 1);
    a = Math.floor(b + (a - b) * e);
    f += this._bi(b, d, a, g);
    return f - 1;
  };
  this._bj = function(b, d) {
    var a = this._bh(Math.floor(b.X), Math.floor(b.Y), Math.floor(d.X), Math.floor(d.Y)), g = this._bh(Math.floor(d.X), Math.floor(d.Y), Math.floor(b.X), Math.floor(b.Y));
    return isNaN(a) ? g / 7 :isNaN(g) ? a / 7 :(a + g) / 14;
  };
  this._bk = function(b, d, a) {
    return (this._bj(b, d) + this._bj(b, a)) / 2;
  };
  this.distance = function(b, d) {
    xDiff = b.X - d.X;
    yDiff = b.Y - d.Y;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  };
  this._bx = function(b, d, a, g) {
    d = Math.round(this.distance(b, d) / g);
    b = Math.round(this.distance(b, a) / g);
    b = (d + b >> 1) + 7;
    switch (3 & b) {
     case 0:
      b++;
      break;

     case 2:
      b--;
      break;

     case 3:
      throw "";
    }
    return b;
  };
  this._bl = function(b, d, a, g) {
    var f, e;
    g = Math.floor(g * b);
    f = Math.max(0, d - g);
    d = Math.min(qrcode.width - 1, d + g);
    if (3 * b > d - f) throw "";
    e = Math.max(0, a - g);
    return new _ak(this.image, f, e, d - f, Math.min(qrcode.height - 1, a + g) - e, b, this._am).find();
  };
  this.createTransform = function(b, d, a, g, f) {
    f -= 3.5;
    var e, h, l;
    null != g ? (e = g.X, g = g.Y, h = l = f - 3) :(e = d.X - b.X + a.X, g = d.Y - b.Y + a.Y, 
    h = l = f);
    return _ae._ag(3.5, 3.5, f, 3.5, h, l, 3.5, f, b.X, b.Y, d.X, d.Y, e, g, a.X, a.Y);
  };
  this._bz = function(b, d, a) {
    return _aa._af(b, a, d);
  };
  this._cd = function(b) {
    var d, a, g, f, e, h = b._gq, l = b._gs;
    b = b._gp;
    d = this._bk(h, l, b);
    if (1 > d) throw "";
    a = this._bx(h, l, b, d);
    g = _a3._at(a);
    f = g._cr - 7;
    e = null;
    if (0 < g._as.length) for (g = 1 - 3 / f, e = Math.floor(h.X + g * (l.X - h.X + b.X - h.X)), 
    g = Math.floor(h.Y + g * (l.Y - h.Y + b.Y - h.Y)); ;) {
      e = this._bl(d, e, g, 4);
      break;
    }
    d = this.createTransform(h, l, b, e, a);
    a = this._bz(this.image, d, a);
    return new _bg(a, null == e ? [ b, h, l ] :[ b, h, l, e ]);
  };
  this.detect = function() {
    var b = new _cc()._ce(this.image);
    return this._cd(b);
  };
}

function _ax(e) {
  this._cf = _cg.forBits(3 & e >> 3);
  this._fe = 7 & e;
  this.__defineGetter__("_cg", function() {
    return this._cf;
  });
  this.__defineGetter__("_dx", function() {
    return this._fe;
  });
  this.GetHashCode = function() {
    return this._cf.ordinal() << 3 | _fe;
  };
  this.Equals = function(b) {
    return this._cf == b._cf && this._fe == b._fe;
  };
}

function _cg(e, b, d) {
  this._ff = e;
  this.bits = b;
  this.name = d;
  this.__defineGetter__("Bits", function() {
    return this.bits;
  });
  this.__defineGetter__("Name", function() {
    return this.name;
  });
  this.ordinal = function() {
    return this._ff;
  };
}

function _ac(e, b) {
  b || (b = e);
  if (1 > e || 1 > b) throw "";
  this.width = e;
  this.height = b;
  var d = e >> 5;
  0 != (31 & e) && d++;
  this.rowSize = d;
  this.bits = Array(d * b);
  for (d = 0; d < this.bits.length; d++) this.bits[d] = 0;
  this.__defineGetter__("Width", function() {
    return this.width;
  });
  this.__defineGetter__("Height", function() {
    return this.height;
  });
  this.__defineGetter__("Dimension", function() {
    if (this.width != this.height) throw "";
    return this.width;
  });
  this._ds = function(a, d) {
    return 0 != (1 & _ew(this.bits[d * this.rowSize + (a >> 5)], 31 & a));
  };
  this._dq = function(a, d) {
    this.bits[d * this.rowSize + (a >> 5)] |= 1 << (31 & a);
  };
  this.flip = function(a, d) {
    this.bits[d * this.rowSize + (a >> 5)] ^= 1 << (31 & a);
  };
  this.clear = function() {
    for (var a = this.bits.length, d = 0; a > d; d++) this.bits[d] = 0;
  };
  this._bq = function(a, d, b, e) {
    if (0 > d || 0 > a) throw "";
    if (1 > e || 1 > b) throw "";
    b = a + b;
    e = d + e;
    if (e > this.height || b > this.width) throw "";
    for (;e > d; d++) for (var h = d * this.rowSize, l = a; b > l; l++) this.bits[h + (l >> 5)] |= 1 << (31 & l);
  };
}

function _dl(e, b) {
  this._dv = e;
  this._dw = b;
  this.__defineGetter__("_du", function() {
    return this._dv;
  });
  this.__defineGetter__("Codewords", function() {
    return this._dw;
  });
}

function _cl(e) {
  var b = e.Dimension;
  if (21 > b || 1 != (3 & b)) throw "";
  this._au = e;
  this._co = this._cp = null;
  this._dk = function(d, a, b) {
    return this._au._ds(d, a) ? 1 | b << 1 :b << 1;
  };
  this._cm = function() {
    var d, a, b, e;
    if (null != this._co) return this._co;
    for (a = d = 0; 6 > a; a++) d = this._dk(a, 8, d);
    d = this._dk(7, 8, d);
    d = this._dk(8, 8, d);
    d = this._dk(8, 7, d);
    for (a = 5; 0 <= a; a--) d = this._dk(8, a, d);
    this._co = _ax._ci(d);
    if (null != this._co) return this._co;
    b = this._au.Dimension;
    d = 0;
    e = b - 8;
    for (a = b - 1; a >= e; a--) d = this._dk(a, 8, d);
    for (a = b - 7; b > a; a++) d = this._dk(8, a, d);
    this._co = _ax._ci(d);
    if (null != this._co) return this._co;
    throw "Error _cm";
  };
  this._cq = function() {
    var d, a, b, e, k;
    if (null != this._cp) return this._cp;
    d = this._au.Dimension;
    a = d - 17 >> 2;
    if (6 >= a) return _a3._av(a);
    a = 0;
    b = d - 11;
    for (e = 5; 0 <= e; e--) for (k = d - 9; k >= b; k--) a = this._dk(k, e, a);
    this._cp = _a3._aw(a);
    if (null != this._cp && this._cp._cr == d) return this._cp;
    a = 0;
    for (k = 5; 0 <= k; k--) for (e = d - 9; e >= b; e--) a = this._dk(k, e, a);
    this._cp = _a3._aw(a);
    if (null != this._cp && this._cp._cr == d) return this._cp;
    throw "Error _cq";
  };
  this._gk = function() {
    var d, a, b, e, k, h, l, m, r, n = this._cm(), u = this._cq(), w = _dx._gl(n._dx), n = this._au.Dimension;
    w._dj(this._au, n);
    w = u._aq();
    d = !0;
    a = Array(u._dp);
    k = e = b = 0;
    for (h = n - 1; 0 < h; h -= 2) {
      6 == h && h--;
      for (l = 0; n > l; l++) for (m = d ? n - 1 - l :l, r = 0; 2 > r; r++) w._ds(h - r, m) || (k++, 
      e <<= 1, this._au._ds(h - r, m) && (e |= 1), 8 == k && (a[b++] = e, e = k = 0));
      d ^= 1;
    }
    if (b != u._dp) throw "";
    return a;
  };
}

function _fg() {
  this._dj = function(e, b) {
    var d, a;
    for (d = 0; b > d; d++) for (a = 0; b > a; a++) this._fw(d, a) && e.flip(a, d);
  };
  this._fw = function(e, b) {
    return 0 == (1 & e + b);
  };
}

function _fh() {
  this._dj = function(e, b) {
    var d, a;
    for (d = 0; b > d; d++) for (a = 0; b > a; a++) this._fw(d, a) && e.flip(a, d);
  };
  this._fw = function(e) {
    return 0 == (1 & e);
  };
}

function _fi() {
  this._dj = function(e, b) {
    var d, a;
    for (d = 0; b > d; d++) for (a = 0; b > a; a++) this._fw(d, a) && e.flip(a, d);
  };
  this._fw = function(e, b) {
    return 0 == b % 3;
  };
}

function _fj() {
  this._dj = function(e, b) {
    var d, a;
    for (d = 0; b > d; d++) for (a = 0; b > a; a++) this._fw(d, a) && e.flip(a, d);
  };
  this._fw = function(e, b) {
    return 0 == (e + b) % 3;
  };
}

function _fk() {
  this._dj = function(e, b) {
    var d, a;
    for (d = 0; b > d; d++) for (a = 0; b > a; a++) this._fw(d, a) && e.flip(a, d);
  };
  this._fw = function(e, b) {
    return 0 == (1 & _ew(e, 1) + b / 3);
  };
}

function _fl() {
  this._dj = function(e, b) {
    var d, a;
    for (d = 0; b > d; d++) for (a = 0; b > a; a++) this._fw(d, a) && e.flip(a, d);
  };
  this._fw = function(e, b) {
    var d = e * b;
    return 0 == (1 & d) + d % 3;
  };
}

function _fm() {
  this._dj = function(e, b) {
    var d, a;
    for (d = 0; b > d; d++) for (a = 0; b > a; a++) this._fw(d, a) && e.flip(a, d);
  };
  this._fw = function(e, b) {
    var d = e * b;
    return 0 == (1 & (1 & d) + d % 3);
  };
}

function _fn() {
  this._dj = function(e, b) {
    var d, a;
    for (d = 0; b > d; d++) for (a = 0; b > a; a++) this._fw(d, a) && e.flip(a, d);
  };
  this._fw = function(e, b) {
    return 0 == (1 & (1 & e + b) + e * b % 3);
  };
}

function _db(e) {
  this._fa = e;
  this.decode = function(b, d) {
    var a, e, f, k, h;
    a = new _bp(this._fa, b);
    e = Array(d);
    for (f = 0; f < e.length; f++) e[f] = 0;
    k = !0;
    for (f = 0; d > f; f++) h = a.evaluateAt(this._fa.exp(f)), e[e.length - 1 - f] = h, 
    0 != h && (k = !1);
    if (!k) for (f = new _bp(this._fa, e), a = this._eb(this._fa._ba(d, 1), f, d), f = a[1], 
    a = this._ey(a[0]), e = this._di(f, a, !1), f = 0; f < a.length; f++) {
      k = b.length - 1 - this._fa.log(a[f]);
      if (0 > k) throw "";
      b[k] = _az._bd(b[k], e[f]);
    }
  };
  this._eb = function(b, d, a) {
    var e, f, k, h, l, m, r, n;
    b._ec < d._ec && (e = b, b = d, d = e);
    e = this._fa.One;
    k = f = this._fa.Zero;
    for (h = this._fa.One; d._ec >= Math.floor(a / 2); ) {
      l = b;
      m = e;
      r = k;
      b = d;
      e = f;
      k = h;
      if (b.Zero) throw "";
      d = l;
      h = this._fa.Zero;
      f = b._ex(b._ec);
      for (f = this._fa.inverse(f); d._ec >= b._ec && !d.Zero; ) l = d._ec - b._ec, n = this._fa.multiply(d._ex(d._ec), f), 
      h = h._bd(this._fa._ba(l, n)), d = d._bd(b._dc(l, n));
      f = h.multiply1(e)._bd(m);
      h = h.multiply1(k)._bd(r);
    }
    a = h._ex(0);
    if (0 == a) throw "";
    a = this._fa.inverse(a);
    b = h.multiply2(a);
    a = d.multiply2(a);
    return [ b, a ];
  };
  this._ey = function(b) {
    var d, a, e, f = b._ec;
    if (1 == f) return Array(b._ex(1));
    d = Array(f);
    a = 0;
    for (e = 1; 256 > e && f > a; e++) 0 == b.evaluateAt(e) && (d[a] = this._fa.inverse(e), 
    a++);
    if (a != f) throw "";
    return d;
  };
  this._di = function(b, d, a) {
    var e, f, k, h, l, m;
    e = d.length;
    f = Array(e);
    for (k = 0; e > k; k++) {
      h = this._fa.inverse(d[k]);
      l = 1;
      for (m = 0; e > m; m++) k != m && (l = this._fa.multiply(l, _az._bd(1, this._fa.multiply(d[m], h))));
      f[k] = this._fa.multiply(b.evaluateAt(h), this._fa.inverse(l));
      a && (f[k] = this._fa.multiply(f[k], h));
    }
    return f;
  };
}

function _bp(e, b) {
  var d, a;
  if (null == b || 0 == b.length) throw "";
  this._fa = e;
  d = b.length;
  if (1 < d && 0 == b[0]) {
    for (a = 1; d > a && 0 == b[a]; ) a++;
    if (a == d) this._dd = e.Zero._dd; else {
      this._dd = Array(d - a);
      for (d = 0; d < this._dd.length; d++) this._dd[d] = 0;
      for (d = 0; d < this._dd.length; d++) this._dd[d] = b[a + d];
    }
  } else this._dd = b;
  this.__defineGetter__("Zero", function() {
    return 0 == this._dd[0];
  });
  this.__defineGetter__("_ec", function() {
    return this._dd.length - 1;
  });
  this.__defineGetter__("Coefficients", function() {
    return this._dd;
  });
  this._ex = function(a) {
    return this._dd[this._dd.length - 1 - a];
  };
  this.evaluateAt = function(a) {
    var d, b, e;
    if (0 == a) return this._ex(0);
    d = this._dd.length;
    if (1 == a) {
      for (b = a = 0; d > b; b++) a = _az._bd(a, this._dd[b]);
      return a;
    }
    e = this._dd[0];
    for (b = 1; d > b; b++) e = _az._bd(this._fa.multiply(a, e), this._dd[b]);
    return e;
  };
  this._bd = function(a) {
    var d, b, h, l;
    if (this._fa != a._fa) throw "";
    if (this.Zero) return a;
    if (a.Zero) return this;
    d = this._dd;
    a = a._dd;
    d.length > a.length && (b = d, d = a, a = b);
    b = Array(a.length);
    h = a.length - d.length;
    for (l = 0; h > l; l++) b[l] = a[l];
    for (l = h; l < a.length; l++) b[l] = _az._bd(d[l - h], a[l]);
    return new _bp(e, b);
  };
  this.multiply1 = function(a) {
    var d, b, e, l, m, r, n;
    if (this._fa != a._fa) throw "";
    if (this.Zero || a.Zero) return this._fa.Zero;
    d = this._dd;
    b = d.length;
    a = a._dd;
    e = a.length;
    l = Array(b + e - 1);
    for (m = 0; b > m; m++) for (r = d[m], n = 0; e > n; n++) l[m + n] = _az._bd(l[m + n], this._fa.multiply(r, a[n]));
    return new _bp(this._fa, l);
  };
  this.multiply2 = function(a) {
    if (0 == a) return this._fa.Zero;
    if (1 == a) return this;
    for (var d = this._dd.length, b = Array(d), e = 0; d > e; e++) b[e] = this._fa.multiply(this._dd[e], a);
    return new _bp(this._fa, b);
  };
  this._dc = function(a, d) {
    if (0 > a) throw "";
    if (0 == d) return this._fa.Zero;
    for (var b = this._dd.length, e = Array(b + a), l = 0; l < e.length; l++) e[l] = 0;
    for (l = 0; b > l; l++) e[l] = this._fa.multiply(this._dd[l], d);
    return new _bp(this._fa, e);
  };
  this.divide = function(a) {
    var d, b, e, l, m, r;
    if (this._fa != a._fa) throw "";
    if (a.Zero) throw "";
    d = this._fa.Zero;
    b = this;
    e = a._ex(a._ec);
    for (e = this._fa.inverse(e); b._ec >= a._ec && !b.Zero; ) l = b._ec - a._ec, m = this._fa.multiply(b._ex(b._ec), e), 
    r = a._dc(l, m), l = this._fa._ba(l, m), d = d._bd(l), b = b._bd(r);
    return [ d, b ];
  };
}

function _az(e) {
  this._gh = Array(256);
  this._gi = Array(256);
  for (var b = 1, d = 0; 256 > d; d++) this._gh[d] = b, b <<= 1, 256 <= b && (b ^= e);
  for (d = 0; 255 > d; d++) this._gi[this._gh[d]] = d;
  e = Array(1);
  e[0] = 0;
  this.zero = new _bp(this, Array(e));
  e = Array(1);
  e[0] = 1;
  this.one = new _bp(this, Array(e));
  this.__defineGetter__("Zero", function() {
    return this.zero;
  });
  this.__defineGetter__("One", function() {
    return this.one;
  });
  this._ba = function(a, d) {
    if (0 > a) throw "";
    if (0 == d) return zero;
    for (var b = Array(a + 1), e = 0; e < b.length; e++) b[e] = 0;
    b[0] = d;
    return new _bp(this, b);
  };
  this.exp = function(a) {
    return this._gh[a];
  };
  this.log = function(a) {
    if (0 == a) throw "";
    return this._gi[a];
  };
  this.inverse = function(a) {
    if (0 == a) throw "";
    return this._gh[255 - this._gi[a]];
  };
  this.multiply = function(a, b) {
    return 0 == a || 0 == b ? 0 :1 == a ? b :1 == b ? a :this._gh[(this._gi[a] + this._gi[b]) % 255];
  };
}

function _ew(e, b) {
  return 0 <= e ? e >> b :(e >> b) + (2 << ~b);
}

function _cz(e, b, d) {
  this.x = e;
  this.y = b;
  this.count = 1;
  this._aj = d;
  this.__defineGetter__("_ei", function() {
    return this._aj;
  });
  this.__defineGetter__("Count", function() {
    return this.count;
  });
  this.__defineGetter__("X", function() {
    return this.x;
  });
  this.__defineGetter__("Y", function() {
    return this.y;
  });
  this._ek = function() {
    this.count++;
  };
  this._ev = function(a, b, d) {
    return Math.abs(b - this.y) <= a && Math.abs(d - this.x) <= a ? (a = Math.abs(a - this._aj), 
    1 >= a || 1 >= a / this._aj) :!1;
  };
}

function _es(e) {
  this._go = e[0];
  this._gu = e[1];
  this._gr = e[2];
  this.__defineGetter__("_gp", function() {
    return this._go;
  });
  this.__defineGetter__("_gq", function() {
    return this._gu;
  });
  this.__defineGetter__("_gs", function() {
    return this._gr;
  });
}

function _cc() {
  this.image = null;
  this._cv = [];
  this._ge = !1;
  this._al = [ 0, 0, 0, 0, 0 ];
  this._am = null;
  this.__defineGetter__("_da", function() {
    this._al[0] = 0;
    this._al[1] = 0;
    this._al[2] = 0;
    this._al[3] = 0;
    this._al[4] = 0;
    return this._al;
  });
  this._ao = function(e) {
    var b, d, a;
    for (d = b = 0; 5 > d; d++) {
      a = e[d];
      if (0 == a) return !1;
      b += a;
    }
    if (7 > b) return !1;
    b = Math.floor((b << _el) / 7);
    d = Math.floor(b / 2);
    return Math.abs(b - (e[0] << _el)) < d && Math.abs(b - (e[1] << _el)) < d && Math.abs(3 * b - (e[2] << _el)) < 3 * d && Math.abs(b - (e[3] << _el)) < d && Math.abs(b - (e[4] << _el)) < d;
  };
  this._an = function(e, b) {
    return b - e[4] - e[3] - e[2] / 2;
  };
  this._ap = function(e, b, d, a) {
    for (var g = this.image, f = qrcode.height, k = this._da, h = e; 0 <= h && g[b + h * qrcode.width]; ) k[2]++, 
    h--;
    if (0 > h) return 0 / 0;
    for (;0 <= h && !g[b + h * qrcode.width] && k[1] <= d; ) k[1]++, h--;
    if (0 > h || k[1] > d) return 0 / 0;
    for (;0 <= h && g[b + h * qrcode.width] && k[0] <= d; ) k[0]++, h--;
    if (k[0] > d) return 0 / 0;
    for (h = e + 1; f > h && g[b + h * qrcode.width]; ) k[2]++, h++;
    if (h == f) return 0 / 0;
    for (;f > h && !g[b + h * qrcode.width] && k[3] < d; ) k[3]++, h++;
    if (h == f || k[3] >= d) return 0 / 0;
    for (;f > h && g[b + h * qrcode.width] && k[4] < d; ) k[4]++, h++;
    return k[4] >= d || 5 * Math.abs(k[0] + k[1] + k[2] + k[3] + k[4] - a) >= 2 * a ? 0 / 0 :this._ao(k) ? this._an(k, h) :0 / 0;
  };
  this._ej = function(e, b, d, a) {
    for (var g = this.image, f = qrcode.width, k = this._da, h = e; 0 <= h && g[h + b * qrcode.width]; ) k[2]++, 
    h--;
    if (0 > h) return 0 / 0;
    for (;0 <= h && !g[h + b * qrcode.width] && k[1] <= d; ) k[1]++, h--;
    if (0 > h || k[1] > d) return 0 / 0;
    for (;0 <= h && g[h + b * qrcode.width] && k[0] <= d; ) k[0]++, h--;
    if (k[0] > d) return 0 / 0;
    for (h = e + 1; f > h && g[h + b * qrcode.width]; ) k[2]++, h++;
    if (h == f) return 0 / 0;
    for (;f > h && !g[h + b * qrcode.width] && k[3] < d; ) k[3]++, h++;
    if (h == f || k[3] >= d) return 0 / 0;
    for (;f > h && g[h + b * qrcode.width] && k[4] < d; ) k[4]++, h++;
    return k[4] >= d || 5 * Math.abs(k[0] + k[1] + k[2] + k[3] + k[4] - a) >= a ? 0 / 0 :this._ao(k) ? this._an(k, h) :0 / 0;
  };
  this._cu = function(e, b, d) {
    var a, g, f, k = e[0] + e[1] + e[2] + e[3] + e[4];
    d = this._an(e, d);
    b = this._ap(b, Math.floor(d), e[2], k);
    if (!isNaN(b) && (d = this._ej(Math.floor(d), Math.floor(b), e[2], k), !isNaN(d))) {
      e = k / 7;
      k = !1;
      a = this._cv.length;
      for (g = 0; a > g; g++) if (f = this._cv[g], f._ev(e, b, d)) {
        f._ek();
        k = !0;
        break;
      }
      k || (d = new _cz(d, b, e), this._cv.push(d), null != this._am && this._am._ep(d));
      return !0;
    }
    return !1;
  };
  this._ee = function() {
    var e, b, d, a, g, f = this._cv.length;
    if (3 > f) throw "Couldn't find enough finder patterns";
    if (3 < f) {
      for (d = b = e = 0; f > d; d++) a = this._cv[d]._ei, e += a, b += a * a;
      g = e / f;
      this._cv.sort(function(a, b) {
        var d = Math.abs(b._ei - g), e = Math.abs(a._ei - g);
        return e > d ? -1 :d == e ? 0 :1;
      });
      f = Math.max(.2 * g, Math.sqrt(b / f - g * g));
      for (d = 0; d < this._cv.length && 3 < this._cv.length; d++) Math.abs(this._cv[d]._ei - g) > f && (this._cv.remove(d), 
      d--);
    }
    3 < this._cv.length && this._cv.sort(function(a, b) {
      return a.count > b.count ? -1 :a.count < b.count ? 1 :0;
    });
    return [ this._cv[0], this._cv[1], this._cv[2] ];
  };
  this._eq = function() {
    var e, b, d, a = this._cv.length;
    if (1 >= a) return 0;
    e = null;
    for (b = 0; a > b; b++) if (d = this._cv[b], d.Count >= _eg) {
      if (null != e) return this._ge = !0, Math.floor((Math.abs(e.X - d.X) - Math.abs(e.Y - d.Y)) / 2);
      e = d;
    }
    return 0;
  };
  this._cx = function() {
    var e, b, d, a, g, f;
    b = e = 0;
    d = this._cv.length;
    for (a = 0; d > a; a++) g = this._cv[a], g.Count >= _eg && (e++, b += g._ei);
    if (3 > e) return !1;
    e = b / d;
    for (a = f = 0; d > a; a++) g = this._cv[a], f += Math.abs(g._ei - e);
    return .05 * b >= f;
  };
  this._ce = function(e) {
    var b, d, a, g, f, k, h, l;
    this.image = e;
    b = qrcode.height;
    d = qrcode.width;
    a = Math.floor(3 * b / (4 * _eh));
    _gf > a && (a = _gf);
    g = !1;
    f = Array(5);
    for (k = a - 1; b > k && !g; k += a) {
      f[0] = 0;
      f[1] = 0;
      f[2] = 0;
      f[3] = 0;
      for (l = h = f[4] = 0; d > l; l++) if (e[l + k * qrcode.width]) 1 == (1 & h) && h++, 
      f[h]++; else if (0 == (1 & h)) if (4 == h) if (this._ao(f)) {
        if (h = this._cu(f, k, l)) a = 2, this._ge ? g = this._cx() :(h = this._eq(), h > f[2] && (k += h - f[2] - a, 
        l = d - 1)); else {
          do l++; while (d > l && !e[l + k * qrcode.width]);
          l--;
        }
        h = 0;
        f[0] = 0;
        f[1] = 0;
        f[2] = 0;
        f[3] = 0;
        f[4] = 0;
      } else f[0] = f[2], f[1] = f[3], f[2] = f[4], f[3] = 1, f[4] = 0, h = 3; else f[++h]++; else f[h]++;
      this._ao(f) && this._cu(f, k, d) && (a = f[0], this._ge && (g = _cx()));
    }
    e = this._ee();
    qrcode._er(e);
    return new _es(e);
  };
}

function _ai(e, b, d) {
  this.x = e;
  this.y = b;
  this.count = 1;
  this._aj = d;
  this.__defineGetter__("_ei", function() {
    return this._aj;
  });
  this.__defineGetter__("Count", function() {
    return this.count;
  });
  this.__defineGetter__("X", function() {
    return Math.floor(this.x);
  });
  this.__defineGetter__("Y", function() {
    return Math.floor(this.y);
  });
  this._ek = function() {
    this.count++;
  };
  this._ev = function(a, b, d) {
    return Math.abs(b - this.y) <= a && Math.abs(d - this.x) <= a ? (a = Math.abs(a - this._aj), 
    1 >= a || 1 >= a / this._aj) :!1;
  };
}

function _ak(e, b, d, a, g, f, k) {
  this.image = e;
  this._cv = [];
  this.startX = b;
  this.startY = d;
  this.width = a;
  this.height = g;
  this._ef = f;
  this._al = [ 0, 0, 0 ];
  this._am = k;
  this._an = function(a, b) {
    return b - a[2] - a[1] / 2;
  };
  this._ao = function(a) {
    for (var b = this._ef, d = b / 2, e = 0; 3 > e; e++) if (Math.abs(b - a[e]) >= d) return !1;
    return !0;
  };
  this._ap = function(a, b, d, e) {
    var f, g = this.image, k = qrcode.height, q = this._al;
    q[0] = 0;
    q[1] = 0;
    q[2] = 0;
    for (f = a; 0 <= f && g[b + f * qrcode.width] && q[1] <= d; ) q[1]++, f--;
    if (0 > f || q[1] > d) return 0 / 0;
    for (;0 <= f && !g[b + f * qrcode.width] && q[0] <= d; ) q[0]++, f--;
    if (q[0] > d) return 0 / 0;
    for (f = a + 1; k > f && g[b + f * qrcode.width] && q[1] <= d; ) q[1]++, f++;
    if (f == k || q[1] > d) return 0 / 0;
    for (;k > f && !g[b + f * qrcode.width] && q[2] <= d; ) q[2]++, f++;
    return q[2] > d || 5 * Math.abs(q[0] + q[1] + q[2] - e) >= 2 * e ? 0 / 0 :this._ao(q) ? this._an(q, f) :0 / 0;
  };
  this._cu = function(a, b, d) {
    var e, f = a[0] + a[1] + a[2];
    d = this._an(a, d);
    b = this._ap(b, Math.floor(d), 2 * a[1], f);
    if (!isNaN(b)) {
      a = (a[0] + a[1] + a[2]) / 3;
      f = this._cv.length;
      for (e = 0; f > e; e++) if (this._cv[e]._ev(a, b, d)) return new _ai(d, b, a);
      d = new _ai(d, b, a);
      this._cv.push(d);
      null != this._am && this._am._ep(d);
    }
    return null;
  };
  this.find = function() {
    var b, f, g, k, n, u, w, q, t;
    b = this.startX;
    f = this.height;
    g = b + a;
    k = d + (f >> 1);
    n = [ 0, 0, 0 ];
    for (u = 0; f > u; u++) {
      w = k + (0 == (1 & u) ? u + 1 >> 1 :-(u + 1 >> 1));
      n[0] = 0;
      n[1] = 0;
      n[2] = 0;
      for (q = b; g > q && !e[q + qrcode.width * w]; ) q++;
      for (t = 0; g > q; ) {
        if (e[q + w * qrcode.width]) if (1 == t) n[t]++; else if (2 == t) {
          if (this._ao(n) && (t = this._cu(n, w, q), null != t)) return t;
          n[0] = n[2];
          n[1] = 1;
          n[2] = 0;
          t = 1;
        } else n[++t]++; else 1 == t && t++, n[t]++;
        q++;
      }
      if (this._ao(n) && (t = this._cu(n, w, g), null != t)) return t;
    }
    if (0 != this._cv.length) return this._cv[0];
    throw "";
  };
}

function QRCodeDataBlockReader(e, b, d) {
  this._ed = 0;
  this._cw = 7;
  this.dataLength = 0;
  this.blocks = e;
  this._en = d;
  9 >= b ? this.dataLengthMode = 0 :10 <= b && 26 >= b ? this.dataLengthMode = 1 :27 <= b && 40 >= b && (this.dataLengthMode = 2);
  this._gd = function(a) {
    var b, d, e, h = 0;
    if (a < this._cw + 1) {
      for (h = b = 0; a > h; h++) b += 1 << h;
      b <<= this._cw - a + 1;
      h = (this.blocks[this._ed] & b) >> this._cw - a + 1;
      this._cw -= a;
      return h;
    }
    if (a < this._cw + 1 + 8) {
      for (h = d = 0; h < this._cw + 1; h++) d += 1 << h;
      h = (this.blocks[this._ed] & d) << a - (this._cw + 1);
      this._ed++;
      h += this.blocks[this._ed] >> 8 - (a - (this._cw + 1));
      this._cw -= a % 8;
      0 > this._cw && (this._cw = 8 + this._cw);
      return h;
    }
    if (a < this._cw + 1 + 16) {
      for (h = b = d = 0; h < this._cw + 1; h++) d += 1 << h;
      d = (this.blocks[this._ed] & d) << a - (this._cw + 1);
      this._ed++;
      e = this.blocks[this._ed] << a - (this._cw + 1 + 8);
      this._ed++;
      for (h = 0; h < a - (this._cw + 1 + 8); h++) b += 1 << h;
      b <<= 8 - (a - (this._cw + 1 + 8));
      h = (this.blocks[this._ed] & b) >> 8 - (a - (this._cw + 1 + 8));
      this._cw -= (a - 8) % 8;
      0 > this._cw && (this._cw = 8 + this._cw);
      return d + e + h;
    }
    return 0;
  };
  this.NextMode = function() {
    return this._ed > this.blocks.length - this._en - 2 ? 0 :this._gd(4);
  };
  this.getDataLength = function(a) {
    for (var b = 0; 1 != a >> b; ) b++;
    return this._gd(qrcode._eo[this.dataLengthMode][b]);
  };
  this.ZZ = function(a) {
    var b, d = 0, e = "", h = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");
    do 1 < a ? (d = this._gd(11), b = d % 45, e += h[Math.floor(d / 45)], e += h[b], 
    a -= 2) :1 == a && (d = this._gd(6), e += h[d], --a); while (0 < a);
    return e;
  };
  this.getFigureString = function(a) {
    var b = 0, d = "";
    do 3 <= a ? (b = this._gd(10), 100 > b && (d += "0"), 10 > b && (d += "0"), a -= 3) :2 == a ? (b = this._gd(7), 
    10 > b && (d += "0"), a -= 2) :1 == a && (b = this._gd(4), --a), d += b; while (0 < a);
    return d;
  };
  this.get8bitByteArray = function(a) {
    var b = 0, d = [];
    do b = this._gd(8), d.push(b), a--; while (0 < a);
    return d;
  };
  this.XX = function(a) {
    var b;
    b = 0;
    var d = "";
    do b = _gd(13), b = (b / 192 << 8) + b % 192, b = 40956 >= b + 33088 ? b + 33088 :b + 49472, 
    d += String.fromCharCode(b), a--; while (0 < a);
    return d;
  };
  this.__defineGetter__("DataByte", function() {
    for (var a, b, d, e = []; ;) {
      a = this.NextMode();
      if (0 == a) {
        if (0 < e.length) break;
        throw "";
      }
      if (1 != a && 2 != a && 4 != a && 8 != a) throw "";
      dataLength = this.getDataLength(a);
      if (1 > dataLength) throw "";
      switch (a) {
       case 1:
        a = this.getFigureString(dataLength);
        b = Array(a.length);
        for (d = 0; d < a.length; d++) b[d] = a.charCodeAt(d);
        e.push(b);
        break;

       case 2:
        a = this.ZZ(dataLength);
        b = Array(a.length);
        for (d = 0; d < a.length; d++) b[d] = a.charCodeAt(d);
        e.push(b);
        break;

       case 4:
        a = this.get8bitByteArray(dataLength);
        e.push(a);
        break;

       case 8:
        a = this.XX(dataLength), e.push(a);
      }
    }
    return e;
  });
}

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  e = e.dataTransfer;
  var b = e.files;
  0 < b.length ? handleFiles(b) :e.getData("URL") && qrcode.decode(e.getData("URL"));
}

function handleFiles(e) {
  var b, d;
  for (b = 0; b < e.length; b++) d = new FileReader(), d.onload = function() {
    return function(a) {
      gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
      qrcode.decode(a.target.result);
    };
  }(e[b]), d.readAsDataURL(e[b]);
}

function initCanvas(e, b) {
  gCanvas = document.getElementById("qr-CQ");
  gCanvas.style.width = e + "px";
  gCanvas.style.height = b + "px";
  gCanvas.width = e;
  gCanvas.height = b;
  gCtx = gCanvas.getContext("2d");
  gCtx.clearRect(0, 0, e, b);
}

function captureToCanvas() {
  if (1 == stype && gUM) try {
    gCtx.drawImage(v, 0, 0);
    try {
      qrcode.decode();
    } catch (e) {
      console.log(e), setTimeout(captureToCanvas, 500);
    }
  } catch (e) {
    console.log(e), setTimeout(captureToCanvas, 500);
  }
}

function htmlEntities(e) {
  return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function read(e) {
  var b = "<br>";
  0 !== e.indexOf("http://") && 0 !== e.indexOf("https://") || (b += "<a target='_blank' href='" + e + "'>" + e + "</a><br>");
  b += "<b>" + htmlEntities(e) + "</b><br><br>";
  // document.getElementById("result").innerHTML = b;
  sendaction(b);
}

function CC() {
  var e = document.createElement("canvas");
  return !(!e.getContext || !e.getContext("2d"));
}

function error() {
  gUM = !1;
}

function load() {
  CC() && window.File && window.FileReader ? (initCanvas(1, 1), qrcode.callback = read, 
  document.getElementById("main").style.display = "inline") :(document.getElementById("main").style.display = "inline", 
  document.getElementById("main").innerHTML = "<h4>Browser not supported</h4>");
}

function setimg() {
  // document.getElementById("result").innerHTML = "";
  alert('error, rescan');
  if (2 != stype) {
    // document.getElementById("outdiv").innerHTML = imghtml;
    var e = document.getElementById("QQ");
    e.addEventListener("dragenter", dragenter, !1);
    e.addEventListener("dragover", dragover, !1);
    e.addEventListener("drop", drop, !1);
    stype = 2;
  }
}

var _ca, _cb, _ch, L, M, Q, H, FOR_BITS, _gf, _eh, _el, _eg, gCtx, gCanvas, c, stype, gUM, webkit, moz, v, imghtml;

_aa = {
  _ab:function(e, b) {
    var d, a, g, f, k, h;
    d = qrcode.width;
    a = qrcode.height;
    g = !0;
    for (f = 0; f < b.length && g; f += 2) {
      k = Math.floor(b[f]);
      h = Math.floor(b[f + 1]);
      if (-1 > k || k > d || -1 > h || h > a) throw "";
      g = !1;
      -1 == k ? (b[f] = 0, g = !0) :k == d && (b[f] = d - 1, g = !0);
      -1 == h ? (b[f + 1] = 0, g = !0) :h == a && (b[f + 1] = a - 1, g = !0);
    }
    g = !0;
    for (f = b.length - 2; 0 <= f && g; f -= 2) {
      k = Math.floor(b[f]);
      h = Math.floor(b[f + 1]);
      if (-1 > k || k > d || -1 > h || h > a) throw "Error._ab ";
      g = !1;
      -1 == k ? (b[f] = 0, g = !0) :k == d && (b[f] = d - 1, g = !0);
      -1 == h ? (b[f + 1] = 0, g = !0) :h == a && (b[f + 1] = a - 1, g = !0);
    }
  },
  _af:function(e, b, d) {
    var a, g, f, k, h, l, m, r;
    a = new _ac(b);
    g = Array(b << 1);
    for (f = 0; b > f; f++) {
      k = g.length;
      h = f + .5;
      for (l = 0; k > l; l += 2) g[l] = (l >> 1) + .5, g[l + 1] = h;
      d._ad(g);
      _aa._ab(e, g);
      try {
        for (l = 0; k > l; l += 2) m = 4 * Math.floor(g[l]) + 4 * Math.floor(g[l + 1]) * qrcode.width, 
        r = e[Math.floor(g[l]) + qrcode.width * Math.floor(g[l + 1])], qrcode.imagedata.data[m] = r ? 255 :0, 
        qrcode.imagedata.data[m + 1] = r ? 255 :0, qrcode.imagedata.data[m + 2] = 0, qrcode.imagedata.data[m + 3] = 255, 
        r && a._dq(l >> 1, f);
      } catch (n) {
        throw "";
      }
    }
    return a;
  },
  _ah:function(e, b, d, a, g, f, k, h, l, m, r, n, u, w, q, t, D, E) {
    d = _ae._ag(d, a, g, f, k, h, l, m, r, n, u, w, q, t, D, E);
    return _aa._af(e, b, d);
  }
};

_a3._bv = [ 31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017 ];

_a3.VERSIONS = _ay();

_a3._av = function(e) {
  if (1 > e || 40 < e) throw "";
  return _a3.VERSIONS[e - 1];
};

_a3._at = function(e) {
  if (1 != e % 4) throw "";
  try {
    return _a3._av(e - 17 >> 2);
  } catch (b) {
    throw "Error _av";
  }
};

_a3._aw = function(e) {
  var b, d, a, g;
  b = 4294967295;
  for (a = d = 0; a < _a3._bv.length; a++) {
    g = _a3._bv[a];
    if (g == e) return this._av(a + 7);
    g = _ax._gj(e, g);
    b > g && (d = a + 7, b = g);
  }
  return 3 >= b ? this._av(d) :null;
};

_ae._ag = function(e, b, d, a, g, f, k, h, l, m, r, n, u, w, q, t) {
  e = this._be(e, b, d, a, g, f, k, h);
  return this._bf(l, m, r, n, u, w, q, t).times(e);
};

_ae._bf = function(e, b, d, a, g, f, k, h) {
  dy2 = h - f;
  dy3 = b - a + f - h;
  if (0 == dy2 && 0 == dy3) return new _ae(d - e, g - d, e, a - b, f - a, b, 0, 0, 1);
  dx1 = d - g;
  dx2 = k - g;
  dx3 = e - d + g - k;
  dy1 = a - f;
  _dr = dx1 * dy2 - dx2 * dy1;
  a13 = (dx3 * dy2 - dx2 * dy3) / _dr;
  a23 = (dx1 * dy3 - dx3 * dy1) / _dr;
  return new _ae(d - e + a13 * d, k - e + a23 * k, e, a - b + a13 * a, h - b + a23 * h, b, a13, a23, 1);
};

_ae._be = function(e, b, d, a, g, f, k, h) {
  return this._bf(e, b, d, a, g, f, k, h)._fr();
};

_ca = 21522;

_cb = [ [ 21522, 0 ], [ 20773, 1 ], [ 24188, 2 ], [ 23371, 3 ], [ 17913, 4 ], [ 16590, 5 ], [ 20375, 6 ], [ 19104, 7 ], [ 30660, 8 ], [ 29427, 9 ], [ 32170, 10 ], [ 30877, 11 ], [ 26159, 12 ], [ 25368, 13 ], [ 27713, 14 ], [ 26998, 15 ], [ 5769, 16 ], [ 5054, 17 ], [ 7399, 18 ], [ 6608, 19 ], [ 1890, 20 ], [ 597, 21 ], [ 3340, 22 ], [ 2107, 23 ], [ 13663, 24 ], [ 12392, 25 ], [ 16177, 26 ], [ 14854, 27 ], [ 9396, 28 ], [ 8579, 29 ], [ 11994, 30 ], [ 11245, 31 ] ];

_ch = [ 0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4 ];

_ax._gj = function(e, b) {
  e ^= b;
  return _ch[15 & e] + _ch[15 & _ew(e, 4)] + _ch[15 & _ew(e, 8)] + _ch[15 & _ew(e, 12)] + _ch[15 & _ew(e, 16)] + _ch[15 & _ew(e, 20)] + _ch[15 & _ew(e, 24)] + _ch[15 & _ew(e, 28)];
};

_ax._ci = function(e) {
  var b = _ax._cj(e);
  return null != b ? b :_ax._cj(e ^ _ca);
};

_ax._cj = function(e) {
  var b, d, a, g, f;
  b = 4294967295;
  for (a = d = 0; a < _cb.length; a++) {
    g = _cb[a];
    f = g[0];
    if (f == e) return new _ax(g[1]);
    f = this._gj(e, f);
    b > f && (d = g[1], b = f);
  }
  return 3 >= b ? new _ax(d) :null;
};

_cg.forBits = function(e) {
  if (0 > e || e >= FOR_BITS.length) throw "";
  return FOR_BITS[e];
};

L = new _cg(0, 1, "L");

M = new _cg(1, 0, "M");

Q = new _cg(2, 3, "Q");

H = new _cg(3, 2, "H");

FOR_BITS = [ M, L, H, Q ];

_dl._gn = function(e, b, d) {
  var a, g, f, k, h, l, m;
  if (e.length != b._dp) throw "";
  a = b._bu(d);
  d = 0;
  g = a._fb();
  for (b = 0; b < g.length; b++) d += g[b].Count;
  d = Array(d);
  for (k = f = 0; k < g.length; k++) for (h = g[k], b = 0; b < h.Count; b++) l = h._dm, 
  m = a._bo + l, d[f++] = new _dl(l, Array(m));
  b = d[0]._dw.length;
  for (g = d.length - 1; 0 <= g && d[g]._dw.length != b; ) g--;
  g++;
  a = b - a._bo;
  for (b = h = 0; a > b; b++) for (k = 0; f > k; k++) d[k]._dw[b] = e[h++];
  for (k = g; f > k; k++) d[k]._dw[a] = e[h++];
  l = d[0]._dw.length;
  for (b = a; l > b; b++) for (k = 0; f > k; k++) d[k]._dw[g > k ? b :b + 1] = e[h++];
  return d;
};

_dx = {
  _gl:function(e) {
    if (0 > e || 7 < e) throw "";
    return _dx._dy[e];
  }
};

_dx._dy = [ new _fg(), new _fh(), new _fi(), new _fj(), new _fk(), new _fl(), new _fm(), new _fn() ];

_az._bb = new _az(285);

_az._bc = new _az(301);

_az._bd = function(e, b) {
  return e ^ b;
};

Decoder = {};

Decoder.rsDecoder = new _db(_az._bb);

Decoder.correctErrors = function(e, b) {
  for (var d = e.length, a = Array(d), g = 0; d > g; g++) a[g] = 255 & e[g];
  d = e.length - b;
  try {
    Decoder.rsDecoder.decode(a, d);
  } catch (f) {
    throw f;
  }
  for (g = 0; b > g; g++) e[g] = a[g];
};

Decoder.decode = function(e) {
  var b, d, a, g, f, k, h, l = new _cl(e);
  e = l._cq();
  b = l._cm()._cg;
  l = l._gk();
  l = _dl._gn(l, e, b);
  for (a = d = 0; a < l.length; a++) d += l[a]._du;
  d = Array(d);
  for (f = g = 0; f < l.length; f++) for (a = l[f], k = a.Codewords, h = a._du, Decoder.correctErrors(k, h), 
  a = 0; h > a; a++) d[g++] = k[a];
  return new QRCodeDataBlockReader(d, e._fd, b.Bits);
};

qrcode = {
  imagedata:null,
  width:0,
  height:0,
  qrCodeSymbol:null,
  debug:!1,
  maxImgSize:1048576,
  _eo:[ [ 10, 9, 8, 8 ], [ 12, 11, 16, 10 ], [ 14, 13, 16, 12 ] ],
  callback:null,
  decode:function(e) {
    var b, d, a;
    if (0 == arguments.length) return b = document.getElementById("qr-CQ"), d = b.getContext("2d"), 
    qrcode.width = b.width, qrcode.height = b.height, qrcode.imagedata = d.getImageData(0, 0, qrcode.width, qrcode.height), 
    qrcode.result = qrcode.process(d), null != qrcode.callback && qrcode.callback(qrcode.result), 
    qrcode.result;
    a = new Image();
    a.onload = function() {
      var b, d, e, h = document.getElementById("out-CQ");
      null != h && (h = h.getContext("2d"), h.clearRect(0, 0, 320, 320), h.drawImage(a, 0, 0, 320, 320));
      h = document.createElement("canvas");
      b = h.getContext("2d");
      d = a.height;
      e = a.width;
      a.width * a.height > qrcode.maxImgSize && (e = a.width / a.height, d = Math.sqrt(qrcode.maxImgSize / e), 
      e *= d);
      h.width = e;
      h.height = d;
      b.drawImage(a, 0, 0, h.width, h.height);
      qrcode.width = h.width;
      qrcode.height = h.height;
      try {
        qrcode.imagedata = b.getImageData(0, 0, h.width, h.height);
      } catch (l) {
        qrcode.result = "";
        null != qrcode.callback && qrcode.callback(qrcode.result);
        return;
      }
      try {
        qrcode.result = qrcode.process(b);
      } catch (l) {
        console.log(l), qrcode.result = "";
      }
      null != qrcode.callback && qrcode.callback(qrcode.result);
    };
    a.src = e;
  },
  isUrl:function(e) {
    return /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e);
  },
  decode_url:function(e) {
    var b = "";
    try {
      b = escape(e);
    } catch (d) {
      console.log(d), b = e;
    }
    e = "";
    try {
      e = decodeURIComponent(b);
    } catch (d) {
      console.log(d), e = b;
    }
    return e;
  },
  decode_utf8:function(e) {
    return qrcode.isUrl(e) ? qrcode.decode_url(e) :e;
  },
  process:function(e) {
    var b, d, a, g = new Date().getTime(), f = qrcode.grayScaleToBitmap(qrcode.grayscale());
    if (qrcode.debug) {
      for (b = 0; b < qrcode.height; b++) for (d = 0; d < qrcode.width; d++) a = 4 * d + 4 * b * qrcode.width, 
      qrcode.imagedata.data[a] = 0, qrcode.imagedata.data[a + 1] = 0, qrcode.imagedata.data[a + 2] = f[d + b * qrcode.width] ? 255 :0;
      e.putImageData(qrcode.imagedata, 0, 0);
    }
    f = new Detector(f).detect();
    qrcode.debug && e.putImageData(qrcode.imagedata, 0, 0);
    f = Decoder.decode(f.bits).DataByte;
    e = "";
    for (b = 0; b < f.length; b++) for (d = 0; d < f[b].length; d++) e += String.fromCharCode(f[b][d]);
    f = new Date().getTime();
    console.log(f - g);
    return qrcode.decode_utf8(e);
  },
  getPixel:function(e, b) {
    if (qrcode.width < e) throw "";
    if (qrcode.height < b) throw "";
    point = 4 * e + 4 * b * qrcode.width;
    return p = (33 * qrcode.imagedata.data[point] + 34 * qrcode.imagedata.data[point + 1] + 33 * qrcode.imagedata.data[point + 2]) / 100;
  },
  _em:function(e) {
    var b, d, a, g, f, k, h, l;
    b = Math.floor(qrcode.width / 4);
    d = Math.floor(qrcode.height / 4);
    a = Array(4);
    for (g = 0; 4 > g; g++) for (a[g] = Array(4), f = 0; 4 > f; f++) a[g][f] = [ 0, 0 ];
    for (g = 0; 4 > g; g++) for (f = 0; 4 > f; f++) for (a[f][g][0] = 255, k = 0; d > k; k++) for (h = 0; b > h; h++) l = e[b * f + h + (d * g + k) * qrcode.width], 
    l < a[f][g][0] && (a[f][g][0] = l), l > a[f][g][1] && (a[f][g][1] = l);
    e = Array(4);
    for (b = 0; 4 > b; b++) e[b] = Array(4);
    for (g = 0; 4 > g; g++) for (f = 0; 4 > f; f++) e[f][g] = Math.floor((a[f][g][0] + a[f][g][1]) / 2);
    return e;
  },
  grayScaleToBitmap:function(e) {
    var b, d, a, g, f, k, h, l, m;
    b = qrcode._em(e);
    d = b.length;
    a = Math.floor(qrcode.width / d);
    g = Math.floor(qrcode.height / d);
    f = Array(qrcode.height * qrcode.width);
    for (k = 0; d > k; k++) for (h = 0; d > h; h++) for (l = 0; g > l; l++) for (m = 0; a > m; m++) f[a * h + m + (g * k + l) * qrcode.width] = e[a * h + m + (g * k + l) * qrcode.width] < b[h][k] ? !0 :!1;
    return f;
  },
  grayscale:function() {
    var e, b, d, a;
    e = Array(qrcode.width * qrcode.height);
    for (b = 0; b < qrcode.height; b++) for (d = 0; d < qrcode.width; d++) a = qrcode.getPixel(d, b), 
    e[d + b * qrcode.width] = a;
    return e;
  }
};

Array.prototype.remove = function(e, b) {
  var d = this.slice((b || e) + 1 || this.length);
  this.length = 0 > e ? this.length + e :e;
  return this.push.apply(this, d);
};

_gf = 3;

_eh = 57;

_el = 8;

_eg = 2;

qrcode._er = function(e) {
  function b(b, a) {
    xDiff = b.X - a.X;
    yDiff = b.Y - a.Y;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  }
  var d, a = b(e[0], e[1]), g = b(e[1], e[2]), f = b(e[0], e[2]);
  g >= a && g >= f ? (g = e[0], a = e[1], f = e[2]) :f >= g && f >= a ? (g = e[1], 
  a = e[0], f = e[2]) :(g = e[2], a = e[0], f = e[1]);
  0 > function(b, a, d) {
    var e = a.x;
    a = a.y;
    return (d.x - e) * (b.y - a) - (d.y - a) * (b.x - e);
  }(a, g, f) && (d = a, a = f, f = d);
  e[0] = a;
  e[1] = g;
  e[2] = f;
};

gCanvas = gCtx = null;

stype = c = 0;

moz = webkit = gUM = !1;

v = null;


window.onload = function() {
  load();
  setimg();
};