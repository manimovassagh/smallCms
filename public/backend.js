'use strict';

//define variables
const btn = document.querySelector('#btn')
const input = document.querySelector('#input')


// define a post Methos function to post and fetch the post
// fetch meaning is not *** get but here fetch send the data and act as post

const postingData=()=>{
    const newPost = new Request(
        'save_data',
        {
            method:'post',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify({
                inhalt:input.value
            })
        }
    )

    fetch(newPost).then(
        res => res.text()
    ).then(
        data=>console.log(data)
    ).catch(
        console.log
    )
}

//define a function to fire after click and do the upper jobs

const init =()=>{
    btn.addEventListener('click',postingData)
}

init();