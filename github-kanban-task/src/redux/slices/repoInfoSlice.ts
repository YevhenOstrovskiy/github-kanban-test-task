import { createSlice } from '@reduxjs/toolkit';

interface RepoInfoState {
  owner: string;
  repo: string;
}

const initialState: RepoInfoState = {
  owner: '',
  repo: ''
};

export const repoInfoSlice = createSlice({
  name: 'repoInfo',
  initialState,
  reducers: {
    setRepoInfo: (state, action) => {
      state.owner = action.payload.owner;
      state.repo = action.payload.repo;
    }
  }
});

export const { setRepoInfo } = repoInfoSlice.actions;

export default repoInfoSlice.reducer;
