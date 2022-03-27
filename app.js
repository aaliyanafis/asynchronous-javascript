//Promise

let p = new Promise((resolve, reject) => {

    let a = 1 + 6

    if (a == 2) {

        resolve('Success')

    } else {

        reject('Failed')

    }

})

p.then((message) => {

    console.log('This is in the then ' + message)

}).catch((message) => {

    console.log('This is in the catch ' + message)

})


//Fetch API

fetch('https://reqres.in/api/users', {

    method: 'POST',

    headers: {

        'Content-Type': 'application/json'

    },

    body: JSON.stringify({

        name: 'User 1'

    })

}).then(res => {

    return res.json()

})

    .then(data => console.log(data))

    .catch(error => console.log('ERROR'))