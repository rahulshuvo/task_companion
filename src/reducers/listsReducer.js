const initialState=[
    {
        id:0,
        title:'list title',
        cards:[
            {
                id:0,
                text:'first card'
            },
            {
                id:1,
                text:'second card'
            },
        ]
    },
    {
        id:1,
        title:'list title 2',
        cards:[
            {
                id:0,
                text:'first card'
            },
            {
                id:1,
                text:'second card'
            },
            {
                id:2,
                text:'third card'
            },
        ]
    },
]

const listsReducer= (state=initialState, action) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default listsReducer;