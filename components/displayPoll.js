export default function createMyDisplay(root) {
    // reference DOM
    const [topic, optionA, optionB, votesA, votesB] = root.querySelectorAll('span');
    // event listeners

    // should return its component render function
    // return ({ data }) => {
    return ({ poll }) => {
        
        if (!poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');

        topic.textContent = poll.topic;
        optionA.textContent = poll.optionA;
        optionB.textContent = poll.optionB;
        votesA.textContent = poll.votesA;
        votesB.textContent = poll.votesB;
    };
}