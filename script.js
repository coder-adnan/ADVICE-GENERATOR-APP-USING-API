const clickEvent = document.getElementById('dice');
const adviceQuote = document.querySelector('#adviceQuote');
const adviceNo = document.querySelector('#adviceNo');
clickEvent.addEventListener('click' , adnan=()=>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET' , 'https://api.adviceslip.com/advice', true);

    // xhr.onload=()=>{
    //     console.log(xhr.responseText);
    // }
    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                // console.log(xhr.response);
                var data = JSON.parse(xhr.responseText)
                console.log(data.slip.id);
                console.log(data.slip.advice);
                adviceQuote.innerText = data.slip.advice;
                adviceNo.innerText = `ADVICE #${data.slip.id}`
            }
        }
    };
    xhr.send();
}
)


