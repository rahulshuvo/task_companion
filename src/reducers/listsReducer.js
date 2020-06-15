import { CONSTANTS } from "../actions";
import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    title: "list title",
    cards: [
      {
        id: uuid(),
        text: "first card",
      },
      {
        id: uuid(),
        text: "second card",
      },
    ],
  },
  {
    id: uuid(),
    title: "list title 2",
    cards: [
      {
        id: uuid(),
        text: "first card",
      },
      {
        id: uuid(),
        text: "second card",
      },
      {
        id: uuid(),
        text: "third card",
      },
      {
        id: uuid(),
        text: "first card",
      },
      {
        id: uuid(),
        text: "second card",
      },
      {
        id: uuid(),
        text: "third card",
      },
    ],
  },
  {
    id: uuid(),
    title: "list title",
    cards: [
      {
        id: uuid(),
        text: "first card",
      },
      {
        id: uuid(),
        text: "second card",
      },
      {
        id: uuid(),
        text: "third card",
      },
      {
        id: uuid(),
        text: "fourth card",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload.title,
        id: uuid(),
        cards: [],
      };
      return [...state, newList];
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: uuid(),
      };

      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return { ...list, cards: [...list.cards, newCard] };
        } else return list;
      });
      return newState;
    case CONSTANTS.DRAG_HAPPEND: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;
      const newState = [...state];
      //dragging list
      if(type==='list')
      {
        const list = newState.splice(droppableIndexStart,1);
        newState.splice(droppableIndexEnd,0, ...list);
        return newState;
      }
      //in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      if (droppableIdStart !== droppableIdEnd) {
        const liststart = state.find((list) => droppableIdStart === list.id);
        const card = liststart.cards.splice(droppableIndexStart, 1);

        const listEnd = state.find((list) => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    }

    default:
      return state;
  }
};

export default listsReducer;
