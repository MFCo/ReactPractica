export const SET_TIME = 'SET_TIME';

export const setTime = (debounceTime) => {
    return {
        type: SET_TIME,
        debounceTime
    }
}