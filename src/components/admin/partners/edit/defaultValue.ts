import { IPartners } from "@/types/partners";

export const defaultValue = (data: IPartners)=>{
    // const imageUrl = (file: File) => {
    //     const img = URL.createObjectURL(file)
    //    return img
    //   }
    return {
        nameUa: data ? data.nameUa :'',
        nameEn: data ? data.nameEn :'',
        color: data ? data.color :'',
        descriptionUa: data ? data.descriptionUa :'',
        descriptionEn: data ? data.descriptionEn :'',
        image: data ? [new File([], data?.imageUrl, { type: 'for-url' })] : [new File([], '', { type: 'for-url' })],
        websiteLink: data ? data.websiteLink :'',
    }
}