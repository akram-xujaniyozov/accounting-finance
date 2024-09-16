import { RootState } from "../../../../store";

export const selectActiveRequest = (state: RootState) =>
  state.activeRequest.skip;
