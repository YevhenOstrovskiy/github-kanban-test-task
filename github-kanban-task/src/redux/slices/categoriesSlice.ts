// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Issue } from '../../types/Issue';
// import { CategoryE } from '../../types/Category';
// import { AppDispatch, RootState } from '../store';

// interface CategoryState {
//   [CategoryE.todo]: Issue[];
//   [CategoryE.inProgress]: Issue[];
//   [CategoryE.done]: Issue[];
// }

// const initialState: CategoryState = {
//   [CategoryE.todo]: [],
//   [CategoryE.inProgress]: [],
//   [CategoryE.done]: [],
// };

// const categorySlice = createSlice({
//   name: 'categories',
//   initialState,
//   reducers: {
//     addIssue: (state, action: PayloadAction<Issue>) => {
//       const issue = action.payload;
//       (state[CategoryE.todo]).push(issue);
//     },
//     removeIssue: (state, action: PayloadAction<Issue>) => {
//       const issueId = action.payload;
//       state[CategoryE.todo] = state[CategoryE.todo].filter(issue => issue.id !== issueId.id);
//     },
//     moveIssue: (state, action) => {
//       const { sourceCategory, destinationCategory, issueId } = action.payload;
//       const issueToMove = state[sourceCategory].find(issue => issue.id === issueId);
//       state[sourceCategory] = state[sourceCategory].filter(issue => issue.id !== issueId);
//       state[destinationCategory].push(issueToMove);
//     },
//   },
// });

// export const { addIssue, removeIssue, moveIssue } = categorySlice.actions;
// export default categorySlice.reducer;
