let state = {
        profilePage: { 
            posts:[
                {id: 1, message: 'Hi, how are you?', like_counts: '15'},
                {id: 2, message: "It's my first post", like_counts: '20'},
            ],
        },
        messagesPage:{
            messages:[
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'Ku'},
            ],
            dialogs:[
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],  
        }
}

export default state;