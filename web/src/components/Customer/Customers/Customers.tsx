import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Customer/CustomersCell'
import { Utils } from 'src/utils'

import { RWGqlError } from '../../../../interfaces'

const DELETE_CUSTOMER_MUTATION = gql`
  mutation DeleteCustomerMutation($id: Int!) {
    deleteCustomer(id: $id) {
      id
    }
  }
`

type Props = {
  error: RWGqlError | null
  onSave: (data: any, id: string) => void
  id: number
  name: string
  role: string
  type: string | null
}

const CustomersList = ({ customers }) => {
  const [deleteCustomer] = useMutation(DELETE_CUSTOMER_MUTATION, {
    onCompleted: () => {
      toast.success('Customer deleted')
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
    if (utils.isConfirm('customer', 'delete', id)) {
      deleteCustomer({ variables: { id } }).then((r) => console.log(r))
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Type</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer: Props) => (
            <tr key={customer.id}>
              <td>{utils.truncateString(customer.id)}</td>
              <td>{utils.truncateString(customer.name)}</td>
              <td>{utils.truncateString(customer.role)}</td>
              <td>{utils.truncateString(customer.type)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.customer({ id: customer.id })}
                    title={'Show customer ' + customer.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCustomer({ id: customer.id })}
                    title={'Edit customer ' + customer.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete customer ' + customer.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(customer.id)}
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

export default CustomersList
