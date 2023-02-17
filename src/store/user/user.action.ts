import { User } from "../../types/User";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user: User) => createAction("user/SET_CURRENT_USER", user)
