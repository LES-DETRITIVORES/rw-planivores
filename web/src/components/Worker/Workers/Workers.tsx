import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Worker/WorkersCell'
import { Utils } from 'src/utils'

import { RWGqlError } from '../../../../interfaces'

const DELETE_WORKER_MUTATION = gql`
  mutation DeleteWorkerMutation($id: Int!) {
    deleteWorker(id: $id) {
      id
    }
  }
`
interface Props {
  error: RWGqlError | null
  onSave: (data: any, id: string) => void

  name: string
  id: number

  loading: boolean
}

const WorkersList = ({ workers }) => {
  const [deleteWorker] = useMutation(DELETE_WORKER_MUTATION, {
    onCompleted: () => {
      toast.success('Worker deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const utils = new Utils()
  const onDeleteClick = (id: number) => {
    if (utils.isConfirm('worker', 'delete', id)) {
      deleteWorker({ variables: { id } }).then((r) => console.log(r))
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker: Props) => (
            <tr key={worker.id}>
              <td>{utils.truncateString(worker.id)}</td>
              <td>{utils.truncateString(worker.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.worker({ id: worker.id })}
                    title={'Show worker ' + worker.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWorker({ id: worker.id })}
                    title={'Edit worker ' + worker.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete worker ' + worker.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(worker.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WorkersList
