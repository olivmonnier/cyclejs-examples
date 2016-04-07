import {Observable} from 'rx';
import {div, p} from '@cycle/dom';
import isolate from '@cycle/isolate';

import Counter from './Counter';

function DblCounter({DOM}) {
  let Counter1 = isolate(Counter);
  let Counter2 = isolate(Counter);

  let counter1 = Counter1({DOM});
  let counter2 = Counter2({DOM});

  let value$ = Observable.combineLatest(
    counter1.value$,
    counter2.value$,
    (counter1, counter2) =>
      counter1 + counter2
  );

  let vTree$ = value$.combineLatest(
    counter1.DOM,
    counter2.DOM,
      (value, counter1VTree, counter2VTree) =>
        div([
          counter1VTree,
          counter2VTree,
          p('Result: ' + value)
        ])
  );

  return {
    DOM: vTree$,
    value$
  }
}

export default DblCounter;
