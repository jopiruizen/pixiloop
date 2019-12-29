import { createSelector } from 'reselect';

const getExamples = state => state.examples.examples;
export const getExamplesState = createSelector(
  [getExamples],
  data => data,
);

const getUsers = state => state.examples.users;
export const getUsersState = createSelector(
  [getUsers],
  data => data,
);

const getCompanies = state => state.examples.companies;
export const getCompaniesState = createSelector(
  [getCompanies],
  data => data,
);
