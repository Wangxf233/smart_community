import type { CategoryObj } from '@/api/product/attr/type'
//定义小仓库数据state类型
export interface UserState {
  token: string | null
  menuRoutes: any
  username: string
  avatar: string
  //存储当前用户是否包含某一个按钮
  buttons: string[]
}

//定义分类仓库state对象的ts类型
export interface CategoryState {
  c1Id: string | number
  c2Id: string | number
  c3Id: string | number
  c1Arr: CategoryObj[]
  c2Arr: CategoryObj[]
  c3Arr: CategoryObj[]
}
