import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isLogoutModalOpen: boolean;
}

const initialState: UIState = {
  isLogoutModalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLogoutModalOpen(state, action: PayloadAction<boolean>) {
      state.isLogoutModalOpen = action.payload;
    },
  },
});

export const { setLogoutModalOpen } = uiSlice.actions;
export default uiSlice.reducer;
