export interface IForm {
  name?: string
  formLink?: string
  excelLink?: string
}

export interface IFormResponse extends IForm {
  id: string
}
