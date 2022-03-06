import indexTpl from './index.pug'

function index(): string {
    return indexTpl({
        myVar: 'some value got from elsewhere'
    })
}

// simulate web server html response
console.log(index())