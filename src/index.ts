import './styles/global.scss';
import './index.scss';
import {fromEvent} from 'rxjs';

interface HelloWorld {
    hello: string,
    world: string,
}

const source = fromEvent(document.getElementById('theButton')!, 'click');
source.subscribe(event => {
    let helloWorld: HelloWorld = {
        world: "World",
        hello: "Hello"
    }
    alert(`Button clicked at ${event.timeStamp} and say ${helloWorld.hello} ${helloWorld.world}`);
});
