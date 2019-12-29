import  { useEffect, useReducer } from 'react';
import { useSelector, useDispatch  } from 'react-redux';

const Titles = {
    REGISTERED_USERS: 'Registered Users',
    COMPANIES: 'Companies',
};

const reducerMapping = {
    all: (state, action) => ({
        ...state, 
        title: action.title,
        dataSource: action.dataSource,
        itemRenderer: action.itemRenderer,
    }),
}

const reducer = (state, action) => {
    if (action.type && reducerMapping[action.type]) {
        return reducerMapping[action.type](state,action);
    }
    return state;
}; 

function useExampleList ( userItemRenderer, companyItemRenderer) {
    const users = useSelector(state => state.examples.users);
    const companies = useSelector(state => state.examples.companies);
    const dispatch = useDispatch();

    const {
        getUsers,
        getCompanies,
    } = dispatch.examples;

    const defaultState =  {
        dataSource: [],
        title: Titles.REGISTERED_USERS,
        itemRenderer: { renderer: userItemRenderer },
    }

    const [reducedState , reducerDispatch ] = useReducer(reducer, defaultState);
    
    useEffect(()=>{
       reducerDispatch({
           type: 'all',
           dataSource: users,
           title: Titles.REGISTERED_USERS,
           itemRenderer: { renderer: userItemRenderer },
       });
    }, [users]);

    useEffect(()=>{
       reducerDispatch({
            type: 'all',
            dataSource: companies,
            title: Titles.COMPANIES,
            itemRenderer: { renderer: companyItemRenderer },
        });
    }, [companies]);

    useEffect(()=>{
      getUsers();
    }, []);

    return {
        ...reducedState,
        getUsers,
        getCompanies,
    };
}


export default useExampleList;