//封装本地存储存储数据和读取数据
//存储数据
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}
//获取数据
export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}

export const REMOVE_TOKEN = () => {
  localStorage.removeItem('TOKEN')
}
