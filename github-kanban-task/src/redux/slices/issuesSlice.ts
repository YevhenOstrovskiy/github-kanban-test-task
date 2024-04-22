import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Issue } from '../../types/Issue';
import { getIssues } from '../../api/issues';
import { CategoryE } from '../../types/Category';
import { parseGitHubUrl } from '../../services/parceGitHubUrl';

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
  const { owner, repo } = parseGitHubUrl(url);
  const response: Issue[] = await getIssues(owner, repo);

    return response.map( issue => {
      return {...issue, status: CategoryE.todo}
    });
});

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    changeCategoryById: (state, action) => {
      const { id, category } = action.payload;
      const issueIndex = state.issues.findIndex(issue => issue.id === id);
      if (issueIndex !== -1) {
        if (state.issues[issueIndex].status !== category) {
        state.issues[issueIndex].status = category;
        }
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.issues = action.payload;
    });
  }
});

export default issuesSlice.reducer;
