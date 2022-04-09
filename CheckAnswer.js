let question ={
    title: 'Pitanje?',
    answer: ['Odgovor1','Odgovor2','Odgovor3','Odgovor4'],
    correctAnswer: 1
};

function showQuestion(q){
    let titleDiv = document.getElementById('title');
    titleDiv.textContent=q.title;
    let alts= document.querySelectorAll('.alternative');
    alts.forEach(function(element, index){
        element.textContent=q.answer[index];
        element.addEventListener('click', function(){
            if(q.correctAnswer==index) {
                alert("Tocno!");
            }else{
                alert("Netocno!");
            }
        })
    })
}

showQuestion(question);