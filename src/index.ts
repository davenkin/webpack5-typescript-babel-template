import './styles/global.scss';
import './index.scss';
import {fromEvent} from 'rxjs';

const source = fromEvent(document.getElementById('theButton')!, 'click');
source.subscribe(event => alert(`Button clicked at ${event.timeStamp}`));
