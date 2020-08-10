function md5cycle(x, k) {
	console.log("MD5 CYCLE");
	var a = x[0], b = x[1], c = x[2], d = x[3];
console.log(a , b, c, d);
	a = ff(a, b, c, d, k[0], 7, -680876936);
	d = ff(d, a, b, c, k[1], 12, -389564586);
	c = ff(c, d, a, b, k[2], 17,  606105819);
	b = ff(b, c, d, a, k[3], 22, -1044525330);
	a = ff(a, b, c, d, k[4], 7, -176418897);
	d = ff(d, a, b, c, k[5], 12,  1200080426);
	c = ff(c, d, a, b, k[6], 17, -1473231341);
	b = ff(b, c, d, a, k[7], 22, -45705983);
	a = ff(a, b, c, d, k[8], 7,  1770035416);
	d = ff(d, a, b, c, k[9], 12, -1958414417);
	c = ff(c, d, a, b, k[10], 17, -42063);
	b = ff(b, c, d, a, k[11], 22, -1990404162);
	a = ff(a, b, c, d, k[12], 7,  1804603682);
	d = ff(d, a, b, c, k[13], 12, -40341101);
	c = ff(c, d, a, b, k[14], 17, -1502002290);
	b = ff(b, c, d, a, k[15], 22,  1236535329);
console.log(a , b, c, d);
	a = gg(a, b, c, d, k[1], 5, -165796510);
	d = gg(d, a, b, c, k[6], 9, -1069501632);
	c = gg(c, d, a, b, k[11], 14,  643717713);
	b = gg(b, c, d, a, k[0], 20, -373897302);
	a = gg(a, b, c, d, k[5], 5, -701558691);
	d = gg(d, a, b, c, k[10], 9,  38016083);
	c = gg(c, d, a, b, k[15], 14, -660478335);
	b = gg(b, c, d, a, k[4], 20, -405537848);
	a = gg(a, b, c, d, k[9], 5,  568446438);
	d = gg(d, a, b, c, k[14], 9, -1019803690);
	c = gg(c, d, a, b, k[3], 14, -187363961);
	b = gg(b, c, d, a, k[8], 20,  1163531501);
	a = gg(a, b, c, d, k[13], 5, -1444681467);
	d = gg(d, a, b, c, k[2], 9, -51403784);
	c = gg(c, d, a, b, k[7], 14,  1735328473);
	b = gg(b, c, d, a, k[12], 20, -1926607734);
console.log(a , b, c, d);
	a = hh(a, b, c, d, k[5], 4, -378558);
	d = hh(d, a, b, c, k[8], 11, -2022574463);
	c = hh(c, d, a, b, k[11], 16,  1839030562);
	b = hh(b, c, d, a, k[14], 23, -35309556);
	a = hh(a, b, c, d, k[1], 4, -1530992060);
	d = hh(d, a, b, c, k[4], 11,  1272893353);
	c = hh(c, d, a, b, k[7], 16, -155497632);
	b = hh(b, c, d, a, k[10], 23, -1094730640);
	a = hh(a, b, c, d, k[13], 4,  681279174);
	d = hh(d, a, b, c, k[0], 11, -358537222);
	c = hh(c, d, a, b, k[3], 16, -722521979);
	b = hh(b, c, d, a, k[6], 23,  76029189);
	a = hh(a, b, c, d, k[9], 4, -640364487);
	d = hh(d, a, b, c, k[12], 11, -421815835);
	c = hh(c, d, a, b, k[15], 16,  530742520);
	b = hh(b, c, d, a, k[2], 23, -995338651);
console.log(a , b, c, d);
	a = ii(a, b, c, d, k[0], 6, -198630844);
	d = ii(d, a, b, c, k[7], 10,  1126891415);
	c = ii(c, d, a, b, k[14], 15, -1416354905);
	b = ii(b, c, d, a, k[5], 21, -57434055);
	a = ii(a, b, c, d, k[12], 6,  1700485571);
	d = ii(d, a, b, c, k[3], 10, -1894986606);
	c = ii(c, d, a, b, k[10], 15, -1051523);
	b = ii(b, c, d, a, k[1], 21, -2054922799);
	a = ii(a, b, c, d, k[8], 6,  1873313359);
	d = ii(d, a, b, c, k[15], 10, -30611744);
	c = ii(c, d, a, b, k[6], 15, -1560198380);
	b = ii(b, c, d, a, k[13], 21,  1309151649);
	a = ii(a, b, c, d, k[4], 6, -145523070);
	d = ii(d, a, b, c, k[11], 10, -1120210379);
	c = ii(c, d, a, b, k[2], 15,  718787259);
	console.log(a , b, c, d);
	b = last_ii(b, c, d, a, k[9], 21, -343485551);

	console.log(k[2], k[11], k[9]);
	console.log(x);
	console.log(a, b , c, d);
	console.log(dec2bin(a));
	console.log(dec2bin(x[0]));
	x[0] = add32(a, x[0]);
	x[1] = add32(b, x[1]);
	x[2] = add32(c, x[2]);
	x[3] = add32(d, x[3]);
	console.log(dec2bin(x[0]));
	console.log(x);
	console.log("END MD5 CYCLE");
}

function last_ii(a, b, c, d, x, s, t){
	console.log('LAST II');
	// cmn(c ^ (b | (~d)), a, b, x, s, t);
	// console.log(~d);
	// console.log(dec2bin(b));
	// console.log(dec2bin(d));
	// console.log('x', x);
	// console.log(dec2bin(b | d));
	var q = c ^ (b | (~d));
	console.log('a', a);
	// console.log(dec2bin(a));
	// console.log('add32', add32(x, t));
	// console.log('q', add32(a, q));
	a = add32(add32(a, q), add32(x, t));

	var result = add32((a << s) | (a >>> (32 - s)), b);

	// console.log(a); // find
	// console.log('bin a',dec2bin(a));
	// console.log(dec2bin(a << 21));
	// console.log(dec2bin(a >>> 32 - 21));
	// console.log(dec2bin((a << 21) | (a >>> (32 - 21))));
	// console.log((a << 21) | (a >>> (32 - 21)), result, b);
	var num = re_add(result, b);

	num = (num << (32-21) | (num) >>> 21);
	// console.log(num << (32-21) | (num) >>> 21);
	// console.log('bin f', dec2bin(num << (32-21) | (num) >>> 21), result, b);
	// console.log('add32', add32(x, t));
	var result_x = re_add(num, add32(a, q));

	var result_q = re_add(num, add32(x, t));
	// console.log(num);
	// console.log('q', result_q);

	var result_a = re_add(result_q, q);
	console.log(result_a);

	return result;
}

function cmn(q, a, b, x, s, t) {
	a = add32(add32(a, q), add32(x, t));
	return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
	return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
	return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
	return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
	return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
	console.log("MD51");
	txt = '';
	var n = s.length,
	state = [1732584193, -271733879, -1732584194, 271733878], i;

	console.log("for");
	for (i=64; i<=s.length; i+=64) {
		md5cycle(state, md5blk(s.substring(i-64, i)));
	}
	console.log("efor");
	s = s.substring(i-64);

	var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];

	console.log("for1");
	for (i=0; i<s.length; i++){
		tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
	}
	console.log("efor1");
	tail[i>>2] |= 0x80 << ((i%4) << 3);

	console.log("if");
	if (i > 55) {
		md5cycle(state, tail);
		for (i=0; i<16; i++) tail[i] = 0;
	}
	console.log("ef");

	tail[14] = n*8;
	console.log(state);
	console.log(tail);
	md5cycle(state, tail);
	console.log("END MD51");
	return state;
}

/* there needs to be support for Unicode here,
* unless we pretend that we can redefine the MD-5
* algorithm for multi-byte characters (perhaps
* by adding every four 16-bit characters and
* shortening the sum to 32 bits). Otherwise
* I suggest performing MD-5 as if every character
* was two bytes--e.g., 0040 0025 = @%--but then
* how will an ordinary MD-5 sum be matched?
* There is no way to standardize text to something
* like UTF-8 before transformation; speed cost is
* utterly prohibitive. The JavaScript standard
* itself needs to look at this: it should start
* providing access to strings as preformed UTF-8
* 8-bit unsigned value arrays.
*/
function md5blk(s) { /* I figured global was faster.   */
	var md5blks = [], i; /* Andy King said do it this way. */
	for (i=0; i<64; i+=4) {
		md5blks[i>>2] = s.charCodeAt(i)
		+ (s.charCodeAt(i+1) << 8)
		+ (s.charCodeAt(i+2) << 16)
		+ (s.charCodeAt(i+3) << 24);
	}
	return md5blks;
}

var hex_chr = '0123456789ABCDEF'.split('');

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function rhex(n){
	var input = n;
	// console.log("RHEX");
	// console.log(input);

	var result = '';
	for(var j = 0 ; j < 4; j++){
		// console.log(n, j);
		// console.log(dec2bin(n));
		// console.log((j * 8 + 4));
		// console.log((n >> (j * 8 + 4)));
		// console.log(dec2bin((n >> (j * 8 + 4))));
		// console.log((n >> (j * 8 + 4)) << (j * 8 + 4));
		// console.log(dec2bin((n >> (j * 8 + 4)) << (j * 8 + 4)));
		// console.log((n >> (j * 8 + 4)) & 0x0F);
		// console.log(hex_chr[(n >> (j * 8 + 4)) & 0x0F]);

		// console.log(n, j);
		// console.log(dec2bin(n));
		// console.log((j * 8));
		// console.log((n >> (j * 8)));
		// console.log(dec2bin((n >> (j * 8))));
		// console.log((n >> (j * 8)) << (j * 8));
		// console.log(dec2bin((n >> (j * 8)) << (j * 8)));
		// console.log((n >> (j * 8)) & 0x0F);
		// console.log(hex_chr[(n >> (j * 8)) & 0x0F]);
		// 0x0F 0000 1111 
		result += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];		
	}

	// console.log(result);
	// console.log("END RHEX");
	return result;
}

function hex(x) {
	var input = x;
	console.log("HEX");
	console.log(input);

	for (var i = 0; i < x.length; i++){
		x[i] = rhex(x[i]);
	}

	var result = x.join('');

	var deinput = result.match(/.{1,8}/g);
	console.log(deinput);

	// console.log('1001 0011 1001 0000 0111 0001 0000 0101');
	// console.log('   1 0011 1011 0000 1101 1110 0110 0011');

	var array = [];
	for (var i = 0; i < deinput.length; i++){
		array.push(de_rhex(deinput[i]));
	}

	console.log(array);
	var state = [1732584193, -271733879, -1732584194, 271733878];
	for (var i = 0; i < array.length; i++){
		// var a = dec2bin(array[i] - state[i]);
		// array[i] = parseInt(a, 2);
		array[i] = re_add(array[i] , state[i]);
	}
	console.log(array);

	console.log(result);
	console.log("END HEX");
	return result;
}

function re_add(a, b){
	var c = dec2bin(a - b);;
	var result = parseInt(c, 2);
	return result;
}

function re_add2(a, b){
	var c = dec2bin(a - b);;
	var result = parseInt(c.split('').reverse().join(''), 2 );
	return result;
}


var rayc = {
    "0" : 0,
    "1" : 1,
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "A" : 10,
    "B" : 11,
    "C" : 12,
    "D" : 13,
    "E" : 14,
    "F" : 15
    };

function de_rhex(input){
	var result = 0;
	for(var j = 0 ; j < 4; j++){
		result += rayc[input[2*j + 1]] << (2 * j * 4);
		result += rayc[input[2*j]] << ((2 * j + 1) * 4);
		// console.log(input[2*j], input[2*j + 1]);
		// console.log(dec2bin(rayc[input[2*j]]), dec2bin(rayc[input[2*j + 1]]));
	}
	// console.log(result);
	// console.log('----');
	return result;
}

function md5(s) {
	var input = s;
	console.log("MD5");
	console.log(input);

	var result = hex(md51(s));

	console.log(result);
	console.log("END MD5");
	return result;
}

/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */

function add32(a, b) {
	return (a + b) & 0xFFFFFFFF;
}

// if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
	// function add32(x, y) {
	// 	var lsw = (x & 0xFFFF) + (y & 0xFFFF),
	// 	msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	// 	return (msw << 16) | (lsw & 0xFFFF);
	// }
// }

// var value = '64.6577338957671%:ocCH6ZqGZ8';
// var real_hash = '0571909363DEB0139FA021ED99208289';

// var value = '81.7108292630733%:DcMPDrD8BF';
// var real_hash = '3AA25880BE9867212765BB0CF12DC084';

var value = '57.3030395043992%:zoR9NAh3wq';
var real_hash = '145DE84CC6F127F2CFDDCE0E12ABD298';


//3AA25880 BE98672127 65BB0CF12DC084
//3AA25880 BE98672127 65BB0CF12DC084
//3AA25880 736959D627 65BB0CF12DC084

console.log("value: " + value);
var result_hash = md5(value);
console.log("result: " + result_hash);


console.log("valid: " + (result_hash == real_hash));
//0571909363DEB0139FA021ED99208289

