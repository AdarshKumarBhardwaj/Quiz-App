const question = [
    {
        'que': "Which of the following is a markup language",
        'a': "HTML",
        'b': "CSS",
        'c': "JAVASCRIPT",
        'd': "PHP",
        'correct': 'a',
    },
    {
        'que': "HTML  Stands For",
        'a': "Hyper text markup language",
        'b': "Cascadding style-sheets",
        'c': "Helicopter Terminal Motorboats Lab",
        'd': "Home To Mall Lab",
        'correct': 'a',
    },
    {
        'que': "Which of the following is a Database",
        'a': "HTML",
        'b': "CSS",
        'c': "JAVASCRIPT",
        'd': "MONGODB",
        'correct': 'd',
    }

]

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const quesbox = document.getElementById("quesbox");
const optioninput = document.querySelectorAll('.options')
const loadquestion = () => {
    if (index == total) {
        return endquiz()
    }
    reset();
    const data = question[index];
    quesbox.innerText = `${index + 1})${data.que}`;
    optioninput[0].nextElementSibling.innerText = data.a;
    optioninput[1].nextElementSibling.innerText = data.b;
    optioninput[2].nextElementSibling.innerText = data.c;
    optioninput[3].nextElementSibling.innerText = data.d;
}


document.querySelector("#submit").addEventListener(
    "click",
    function submitquiz() {
        const data = question[index]
        const ans = getanswer()
        console.log(ans, data.correct)
        if (ans == data.correct) {
            right++;
        } else {
            wrong++;
        }
        index++;
        loadquestion();
        return;
    }
)
const getanswer = () => {
    let ans;
    optioninput.forEach(
        (input) => {
            if (input.checked) {
                ans = input.value;

            }
        }
        )
        return ans;
}
const reset = () => {
    optioninput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endquiz = () => {
    document.getElementById("box").innerHTML = `<h1>Thank You For Playing The Quiz<h1>
    <h2>${right}/${total} is Your Result</h2>`
}

loadquestion();