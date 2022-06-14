// import utilities
import createMyDisplay from './components/displayPoll.js';
// import component creators

// import state and dispatch functions
import state from './state.js';

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

// assign root with Createdisplay
const CreateDisplay = createMyDisplay(document.querySelector('.topic-display'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs

    // CreateDisplay returns a function, so we can call a function with our poll object 
    // to run the returning function with that poll object
    CreateDisplay({ poll: state.poll });
}

// Call display on page load
display();
