import {Observable} from 'rx';
import {div, button, p} from '@cycle/dom';
import {Button} from './helpers';

function Counter({DOM}) {
  let action$ = Observable.merge(
    Button(DOM.select('.decrement')).map(ev => -1),
    Button(DOM.select('.increment')).map(ev => +1)
  );
  let value$ = action$.startWith(0).scan((x, y) => x + y);

  let vTree$ = value$.map(value =>
    div([
      button('.decrement', 'Decrement'),
      button('.increment', 'Increment'),
      p('Counter: ' + value)
    ])
  );

  return {
    DOM: vTree$,
    value$
  }
}

export default Counter;
