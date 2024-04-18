import EditCourse from "@/components/admin/courses/editCourse/EditCourse";

const EditCoursePage = ({params}:{params:{id:string}})=> {
    return (
        <EditCourse id={params.id} />
    )
};

export default EditCoursePage;