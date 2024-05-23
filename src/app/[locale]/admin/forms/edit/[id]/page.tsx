import EditForms from '@/components/admin/forms/edit/EditForms'

const EditFormsPage = ({ params }: { params: { id: string } }) => {
  return <EditForms id={params.id} />
}

export default EditFormsPage
