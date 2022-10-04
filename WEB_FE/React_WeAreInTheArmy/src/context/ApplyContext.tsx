import { createContext, Dispatch, useReducer } from 'react';

type DefaultInfomationState = {
  name: string;
  organization?: string;
  phone: string;
  location?: string;
};

type RequestCategory = '재난구조' | '환호보호' | '교육/의료/문화';

type ApplyDataState = {
  title: string;
  requestCategory: RequestCategory;
  description: string;
};

type DefaultInfomationActions =
  | { type: 'SET_NAME'; name: string }
  | { type: 'SET_ORGANIZATION'; organizaion: string }
  | { type: 'SET_PHONE'; phone: string }
  | { type: 'SET_LOCATION'; location: string };

type ApplyDataActions =
  | { type: 'SET_TITLE'; title: string }
  | { type: 'SET_REQUESTCATEGORY'; requestCategory: RequestCategory }
  | { type: 'SET_DESCRIPTION'; description: string };

type DefaultInfomationActionsDispatch = Dispatch<DefaultInfomationActions>;
type ApplyDataActionsDispatch = Dispatch<ApplyDataActions>;

const DefaultInfomationStateContext =
  createContext<DefaultInfomationState | null>(null);
const ApplyDataStateContext = createContext<ApplyDataState | null>(null);

const DefaultInformationDispatchContext =
  createContext<DefaultInfomationActionsDispatch | null>(null);
const ApplyDataDispatchContext = createContext<ApplyDataActionsDispatch | null>(
  null,
);

function DefaultInformationReducer(
  state: DefaultInfomationState,
  action: DefaultInfomationActions,
): DefaultInfomationState {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name,
      };
    case 'SET_ORGANIZATION':
      return {
        ...state,
        organization: action.organizaion,
      };
    case 'SET_PHONE':
      return {
        ...state,
        phone: action.phone,
      };
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.location,
      };
    default:
      throw new Error('Unhandled action');
  }
}

function ApplyDataReducer(
  state: ApplyDataState,
  action: ApplyDataActions,
): ApplyDataState {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        title: action.title,
      };
    case 'SET_REQUESTCATEGORY':
      return {
        ...state,
        requestCategory: action.requestCategory,
      };
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description,
      };
    default:
      throw new Error('Unhandled action');
  }
}

export function DefaultInformationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(DefaultInformationReducer, {
    name: '',
    organization: '',
    phone: '',
    location: '',
  });

  return (
    <DefaultInfomationStateContext.Provider value={state}>
      <DefaultInformationDispatchContext.Provider value={dispatch}>
        {children}
      </DefaultInformationDispatchContext.Provider>
    </DefaultInfomationStateContext.Provider>
  );
}
