const todokey = 'react-todo'

export function getLocalStorageData() {
    const rawTodoData = localStorage.getItem(todokey)
    if (!rawTodoData) return []
    return JSON.parse(rawTodoData)
}

export function setLocalStorageData(todo){
    return localStorage.setItem(todokey,JSON.stringify(todo))
}
