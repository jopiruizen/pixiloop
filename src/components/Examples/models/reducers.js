const setUsers = (state, users) => ({
    ...state,
    users,
});

const setCompanies = (state, companies) => ({
    ...state,
    companies,
});
  
export default {
    reducers: {
        setUsers,
        setCompanies,
    },
};