import { createContext, Dispatch, useContext, useReducer } from 'react';
import { HasChild, Post } from 'src/type';

type State = {
  posts: Post[];
};

type Action = { type: 'SET_POSTS'; posts: Post[] };

type PostDispatch = Dispatch<Action>;

const PostStateContext = createContext<State | null>(null);
const PostDispatchContext = createContext<PostDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_POSTS':
      {
        return {
          ...state,
          posts: action.posts,
        };
      }
      defualt: throw new Error('Unhandled Action');
  }
}

export function PostProvider({ children }: HasChild) {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
  });

  return (
    <PostStateContext.Provider value={state}>
      <PostDispatchContext.Provider value={dispatch}>
        {children}
      </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
}

export function usePostState() {
  const state = useContext(PostStateContext);
  if (!state) throw new Error('Cannot find PostProvider');
  return state;
}

export function usePostDispatch() {
  const dispatch = useContext(PostDispatchContext);
  if (!dispatch) throw new Error('Cannot find PostProvider');
  return dispatch;
}
