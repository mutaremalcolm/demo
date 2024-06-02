
export interface User {
    id: string;
    name: string;
    avatarUrl?: string;
    username: string;
}

export interface UserState {
    isAuthenticated: boolean;
    user?: User;
}

export interface UserContextProps {
    state: UserState;
    dispatch: React.Dispatch<UserAction>;

}

export type UserAction = 
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' };