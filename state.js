// set state to an empty object
const state = {};

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    // For example:
    // state.game = null;
    // state.pastGames = [];

    // state.poll = {
    //     topic: 'burgers or dogs',
    //     optionA: 'burgers',
    //     optionB: 'dogs',
    //     votesA: 30,
    //     votesB: 50,
    // };

    state.poll = null;
    state.previousPolls = [];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state
export function newPoll(topic, optionA, optionB) {
    state.poll = {
        topic: topic,
        optionA: optionA,
        optionB: optionB,
        votesA: 0,
        votesB: 0,
    };
}

export function upVote(option) {
    if (option === 'A') {
        state.poll.votesA++;
    }
    if (option === 'B') {
        state.poll.votesB++;
    }
}

export function downVote(option) {
    if (option === 'A') {
        if (state.poll.votesA <= 0) return;
        state.poll.votesA--;
    }
    if (option === 'B') {
        if (state.poll.votesB <= 0) return;
        state.poll.votesB--;
    }
}

export function endPoll() {
    console.log('ending the poll');
}