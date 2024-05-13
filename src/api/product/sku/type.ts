export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
//定义SKU对象的ts类型
export interface Attr {
  attrId: number | string //平台属性的ID
  valueId: number | string //属性值的ID
  id?: number
  valueName?: string
}
export interface saleAttr {
  saleAttrId: number | string
  saleAttrValueId: number | string
  id?: number
  saleAttrValueName?: string
}

export interface SkuData {
  category3Id?: string | number //三级分类的ID
  spuId?: string | number //已有的SPU的ID
  tmId?: string | number //SPU品牌的ID
  skuName?: string //sku名字
  price?: string | number //sku价格
  weight?: string | number //sku重量
  skuDesc?: string //sku的描述
  skuAttrValueList?: Attr[] //平台属性的ID
  skuSaleAttrValueList?: saleAttr[] //销售属性
  skuDefaultImg?: string //sku图片地址
  isSale?: number //控制上架与下架
  id?: number
}

//获取SKU接口返回的数据ts类型
export interface SkuResponseData extends ResponseData {
  data: {
    records: SkuData[]
    total: number
    size: number
    current: number
    orders: []
    optimizeCountSql: boolean
    hitCount: boolean
    countId: boolean
    maxLimit: boolean
    searchCount: boolean
    pages: number
  }
}

//获取SKU商品详情的ts类型
export interface SkuInfoData extends ResponseData {
  data: SkuData
}
