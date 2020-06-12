import {CONSTANTS} from '../actions'

let listID=2;
let cardID=10;

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
        case CONSTANTS.ADD_LIST:
            const newList={
                title: action.payload.title,
                id:listID++,
                cards:[]
            }
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard={
                text:action.payload.text,
                id:cardID++,
            }

            const newState=state.map((list)=>{
                if(list.id===action.payload.listID){
                    return{...list,
                        cards:[...list.cards,newCard]

                    }
                }
                else return list;
            })
            return newState;
        default:
            return state;
    }
}

export default listsReducer;