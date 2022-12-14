import { Link, navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Utils } from 'src/utils'

import { RWGqlError } from '../../../../interfaces'

const DELETE_SERVICE_MUTATION = gql`
  mutation DeleteServiceMutation($id: Int!) {
    deleteService(id: $id) {
      id
    }
  }
`

interface Props {
  error: RWGqlError | null
  onSave: (data: any, id: string) => void
  service: {
    id: number
    name: string
  }
  loading: boolean
}

const Service = ({ service }: Props) => {
  const [deleteService] = useMutation(DELETE_SERVICE_MUTATION, {
    onCompleted: () => {
      toast.success('Service deleted')
      navigate(routes.services())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const utils = new Utils()
  const onDeleteClick = (id: number) => {
    if (utils.isConfirm('service', 'delete', id)) {
      deleteService({ variables: { id } }).then((r) => console.log(r))
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Service {service.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{service.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{service.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editService({ id: service.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(service.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Service
