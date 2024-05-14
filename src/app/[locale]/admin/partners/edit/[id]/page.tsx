import EditPertners from "@/components/admin/partners/edit/EditPartners"

const editPartner = ({params}:{params:{id:string}})=> {
    return (
        <EditPertners id={params.id}/>
    )
};

export default editPartner;