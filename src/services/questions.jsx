function list(url){    
    return fetch(url).then(response => response.json());       
}

export const questions = { 
    list: list('https://the-trivia-api.com/api/questions')
}