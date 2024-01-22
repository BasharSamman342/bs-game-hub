import PlaceHolderImage from "../assets/Image Placeholder/no-image.webp"
const getCroppedImageUrl = (url:string)=>{
    if (!url) {
        return PlaceHolderImage;
    }
    const target = "media/"
    const index:number = url.indexOf(target)+target.length
    return url.slice(0,index)+"crop/600/400/"+url.slice(index)
}

export default getCroppedImageUrl