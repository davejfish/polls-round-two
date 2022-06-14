export default function createNewPoll(root, { handleNewPoll }) {
    // reference DOM
    const myForm = root.querySelector('form');
    // event listeners
    myForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = new FormData(myForm);

        handleNewPoll(data.get('topic'), data.get('option A'), data.get('option B'));
    });
    // should return its component render function
    // return ({ data }) => {
    return ({ poll }) => {
        // update classList here
        if (poll) {
            root.classList.add('hidden');
            return;
        }
        root.classList.remove('hidden');
    };
}