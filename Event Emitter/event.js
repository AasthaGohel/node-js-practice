// // on (eventName, listener) -> register a listener that fires every time the event is emitted

// import { timeStamp } from 'console';
// import {EventEmitter} from 'events';
// const eventEmitter = new EventEmitter();

// eventEmitter.on('data', (msg)=> {
//     console.log("Received:", msg)
// });

// eventEmitter.emit('data',"hello");
// eventEmitter.emit('data',"world");

// // emit (eventName, ...args) -> trigger an event and pass data to all listeners
// eventEmitter.on('userLoggedIn', (username, timestamp)=> {
//     console.log(`${username} logged in at ${timestamp}`);
// })

// eventEmitter.emit('userLoggedIn', "Alice", Date.now())

// // once (eventName, listener) -> registers a one time listener that's automatically removed after firing
// eventEmitter.once('ready', ()=> {
//     console.log("app is ready")
// });

// eventEmitter.emit('ready');
// eventEmitter.emit('ready'); // nothing happens listener was removed

// // Listeners must be registered before you emit an event

// eventEmitter.on('myEvent', () => console.log('Listener 1'));
// eventEmitter.emit('myEvent'); // ✅ Listener 1 executes

// eventEmitter.on('myEvent', () => console.log('Listener 2'));
// // ❌ Listener 2 is registered too late - won't be called for the event above

// // Execution Order

// eventEmitter.on('myEvent', (data)=> console.log(data, '-First'));
// eventEmitter.on('myEvent', (data)=>console.log(data, '-Second'));


// console.log('Statement A');
// eventEmitter.emit('myEvent','Event Data');
// console.log('Statement B');

// Error Handling
// App can crash emitting an 'error' event with no listeners registered
import {EventEmitter} from 'events';
const eventEmitter = new EventEmitter();

// eventEmitter.on('error',(err)=>{
//     console.log('Error occured:',err.message)
// })

eventEmitter.on('data', (val)=>{
    try {
        if(val<0)
        throw new Error('Negative value')
        console.log(val);
    }
    catch(err) {console.log('Error:',err.message);}
        
})

eventEmitter.emit('data',-2)
//eventEmitter.emit('error', new Error('Something went wrong'))

function handleUserLogin(userId) {
    const userData = { userId, timestamp: Date.now() };

    // This listener stays in memory forever!
    eventEmitter.on('notification', (msg) => {
        console.log(`User ${userData.userId}: ${msg}`);
    });
}

// Each login creates a new listener that never gets removed
for (let i = 0; i < 1000; i++) {
    handleUserLogin(i);
}

console.log(eventEmitter.listenerCount('notification')); // 1000 listeners!
// All 1000 are still in memory, even though the function finished