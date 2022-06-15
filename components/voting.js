export default function createVotingButtons(root, { 
    handleUpVote,
    handleDownVote,
    handleEndPoll, 
}) { 

    const [upVoteA, upVoteB, downVoteA, downVoteB, endPolling] = root.querySelectorAll('button');
  
    upVoteA.addEventListener('click', () => {
        handleUpVote('A');
    });
    upVoteB.addEventListener('click', () => {
        handleUpVote('B');
    });
    downVoteA.addEventListener('click', () => {
        handleDownVote('A');
    });
    downVoteB.addEventListener('click', () => {
        handleDownVote('B');
    });
    endPolling.addEventListener('click', () => {
        handleEndPoll();
    });
    
    return ({ poll }) => {
        
        if (!poll) {
            root.classList.add('hidden');
            return;
        }

        root.classList.remove('hidden');
    };
}