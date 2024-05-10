import EditTestimonials from "@/components/admin/testimonials/edit/EditTestimonials";


const editTestimonials = ({params}:{params:{id:string}}) => {
    return (
        <EditTestimonials id={params.id}/>
    )
};

export default editTestimonials;