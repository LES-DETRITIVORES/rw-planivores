import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PrestationForm from 'src/components/Prestation/PrestationForm'

export const QUERY = gql`
  query EditPrestationById($id: Int!) {
    prestation: prestation(id: $id) {
      id
      site
      date
      matiere
      prestation
      tarif
      quantite
      passage
      bac
      actif
    }
  }
`
const UPDATE_PRESTATION_MUTATION = gql`
  mutation UpdatePrestationMutation($id: Int!, $input: UpdatePrestationInput!) {
    updatePrestation(id: $id, input: $input) {
      id
      site
      date
      matiere
      prestation
      tarif
      quantite
      passage
      bac
      actif
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ prestation }) => {
  const [updatePrestation, { loading, error }] = useMutation(
    UPDATE_PRESTATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Prestation updated')
        navigate(routes.prestations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updatePrestation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Prestation {prestation?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PrestationForm
          prestation={prestation}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}