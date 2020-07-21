import {compose, pipe} from 'lodash/fp';

let input = " javaasdSSSSript ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();

const wrapInDiv = str => `<div>${str}</div>`; // nur zu divs
const wrap = type => str => `<${type}>${str}</${type}>`; //zu allen tags
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));

const result = wrapInDiv(toLowerCase(trim(input)));


