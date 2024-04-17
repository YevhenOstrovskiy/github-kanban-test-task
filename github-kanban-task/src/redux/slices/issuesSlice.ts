import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Issue } from '../../types/Issue';
import { getIssues } from '../../api/issues';
import { CategoryE } from '../../types/Category';

interface IssuesState {
  issues: Issue[];
}

const initialState: IssuesState = {
  issues: []
};

type FetchIssuesArgs = {
  url: string;
};

export const fetchIssues = createAsyncThunk('issues/fetch', async ({ url }: FetchIssuesArgs) => {
    const response: Issue[] = await getIssues(url);

    return response.map( issue => {
      return {...issue, status: CategoryE.todo}
    });
});

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.issues = action.payload;
    });
  }
});

export default issuesSlice.reducer;
