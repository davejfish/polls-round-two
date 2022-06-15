import state, {
    initialize,
    newPoll,
    upVote,
    downVote,
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('the first state test...', (expect) => {
    expect.deepEqual(state.poll, null);
});

test('testing to see if I am properly updating state', (expect) => {
    expect.equal(state.poll, null);

    newPoll('burgers or dogs', 'burgers', 'dogs');
    expect.deepEqual(state.poll, {
        topic: 'burgers or dogs',
        optionA: 'burgers',
        optionB: 'dogs',
        votesA: 0,
        votesB: 0
    });

    newPoll('kinoko no yama or takenoko no sato', 'kinoko no yama', 'takenoko no sato');
    expect.deepEqual(state.poll, {
        topic: 'kinoko no yama or takenoko no sato',
        optionA: 'kinoko no yama',
        optionB: 'takenoko no sato',
        votesA: 0,
        votesB: 0
    });
});

test('checking upvote for A or B', (expect) => {
    expect.equal(state.poll, null);

    newPoll('kinoko no yama or takenoko no sato', 'kinoko no yama', 'takenoko no sato');
    upVote('A');
    expect.deepEqual(state.poll, {
        topic: 'kinoko no yama or takenoko no sato',
        optionA: 'kinoko no yama',
        optionB: 'takenoko no sato',
        votesA: 1,
        votesB: 0
    });

    upVote('B');
    upVote('B');
    expect.deepEqual(state.poll, {
        topic: 'kinoko no yama or takenoko no sato',
        optionA: 'kinoko no yama',
        optionB: 'takenoko no sato',
        votesA: 1,
        votesB: 2
    });
});

test('checking downvote for A and B', (expect) => {
    expect.equal(state.poll, null);

    newPoll('kinoko no yama or takenoko no sato', 'kinoko no yama', 'takenoko no sato');
    downVote('A');
    expect.deepEqual(state.poll, {
        topic: 'kinoko no yama or takenoko no sato',
        optionA: 'kinoko no yama',
        optionB: 'takenoko no sato',
        votesA: 0,
        votesB: 0
    });

    downVote('B');
    expect.deepEqual(state.poll, {
        topic: 'kinoko no yama or takenoko no sato',
        optionA: 'kinoko no yama',
        optionB: 'takenoko no sato',
        votesA: 0,
        votesB: 0
    });

    upVote('A');
    upVote('A');
    downVote('A');
    expect.deepEqual(state.poll, {
        topic: 'kinoko no yama or takenoko no sato',
        optionA: 'kinoko no yama',
        optionB: 'takenoko no sato',
        votesA: 1,
        votesB: 0
    });

    upVote('B');
    upVote('B');
    downVote('B');
    expect.deepEqual(state.poll, {
        topic: 'kinoko no yama or takenoko no sato',
        optionA: 'kinoko no yama',
        optionB: 'takenoko no sato',
        votesA: 1,
        votesB: 1
    });
});