import {Observable} from 'rx';
import {input, div, p} from '@cycle/dom';
import {Input} from './helpers';

function InputField ({DOM, props$}) {
  let value$ = Input(DOM.select('.input-field')).startWith('');

  let vTree$ = Observable.combineLatest(props$, value$, (props, value) =>
    input('.input-field', {
      type: props.type, name: props.name, value
    })
  );

  return {
    DOM: vTree$,
    value$
  }
}

export default InputField;
