export default function createPreviousPolls(root) {

    return ({ previousPolls }) => {

        root.innerHTML = '';

        for (let poll of previousPolls) {
            const div = document.createElement('div');
            div.classList.add('topic-display');

            const span1 = document.createElement('span');
            span1.classList.add('topic');
            span1.textContent = poll.topic; 

            const span2 = document.createElement('span');
            span2.classList.add('optionA');
            span2.textContent = poll.optionA; 

            const span3 = document.createElement('span');
            span3.classList.add('optionB');
            span3.textContent = poll.optionB; 

            const span4 = document.createElement('span');
            span4.classList.add('votesA');
            span4.textContent = poll.votesA; 

            const span5 = document.createElement('span');
            span5.classList.add('votesB');
            span5.textContent = poll.votesB; 

            div.append(span1, span2, span3, span4, span5);
            root.append(div);
        }   
    };
}