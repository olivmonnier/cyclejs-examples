import {run} from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';

function main (sources) {
}

run(main, {
  DOM: makeDOMDriver('#main-container')
});
