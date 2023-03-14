

const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdoutput,
})

// create folder if not exist
const directoryPath = './data'
if(!fs.existsSync(directoryPath)){
    fs.mkdirSync(directoryPath)
}

// // create file json if not exist
const usersPath = './data/users.json'
if(!fs.existsSync(usersPath)){
    fs.writeFileSync(usersPath, '[]', 'utf-8') // param1=path, param2=default value, param3=format encoding
}

const createQuestion = (qst) => {
    return new Promise((resolve, reject) => {
        rl.question(qst, (answer) => { 
            resolve(answer)
        })
    })
}

const main = async () => {
    const name = await createQuestion('Nama : ')
    const email = await createQuestion('Email : ')
    const user = {name: name, email: email}

    const fileBuffer = fs.readFileSync('data/users.json') // param1=path, param2=format encoding
    const users = JSON.parse(fileBuffer)

    users.push(user)

    fs.writeFileSync('data/users.json', JSON.stringify(users))

    console.log('success')
    rl.close()
}

main()