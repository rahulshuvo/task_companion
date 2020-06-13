import {CONSTANTS} from '../actions';
import {v4 as uuid} from 'uuid';


const initialState=[
    {
        id:uuid(),
        title:'list title',
        cards:[
            {
                id:uuid(),
                text:'first card'
            },
            {
                id:uuid(),
                text:'second card'
            },
        ]
    },
    {
        id:uuid(),
        title:'list title 2',
        cards:[
            {
                id:uuid(),
                text:'first card'
            },
            {
                id:uuid(),
                text:'second card'
            },
            {
                id:uuid(),
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
                id:uuid(),
                cards:[]
            }
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard={
                text:action.payload.text,
                id:uuid(),
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