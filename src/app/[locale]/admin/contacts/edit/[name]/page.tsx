import EditPage from '@/components/admin/contacts/editPage/EditPage'

const EditContactPage = ({ params }: { params: { name: string } }) => {
  return <EditPage name={params.name} />
}

export default EditContactPage
