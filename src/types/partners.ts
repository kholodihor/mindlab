export interface IPartners {
    nameUa?: string
    nameEn?: string
    imageUrl?: string
    imageId?: string
    color?: string
    descriptionUa?: string
    descriptionEn?: string
    websiteLink?: string
  }
  
  export interface IPartnersResponse extends IPartners {
    id: string
  }
  
  export type PartnersFormData = {
    nameUa?: string
    nameEn?: string
    color?: string
    image?: FileList
    descriptionUa?: string
    descriptionEn?: string
    websiteLink?: string
  }
  