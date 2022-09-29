import {
  TruckIcon,
  EyeIcon,
  MinusCircleIcon,
  PencilAltIcon,
} from '@heroicons/react/outline'
import { Link } from '@redwoodjs/router'

const Vehicule = ({ vehicule, show, deleted, edit }) => {
  let icone
  switch (vehicule.icone) {
    case 'truck':
      icone = <TruckIcon className="h-6 w-6 text-gray-400" />
      break
    case 'biking':
      icone = (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 300.25 300.25"
          className="h-6 w-6 text-gray-400"
          xmlSpace="preserve"
        >
          <path
            className="fill-current"
            d="M238.703,127.946c-5.119,0-10.089,0.487-14.847,1.67l-18.955-50.955h6.176c9.72,0,18.913-3.577,25.887-10.345l6.541-6.273
              c2.973-2.885,3.043-7.595,0.158-10.568s-7.633-3.024-10.605-0.139l-6.541,6.206c-4.159,4.037-9.643,6.118-15.439,6.118h-16.979
              c-2.458,0-4.76,1.356-6.161,3.375c-1.401,2.02-1.725,4.673-0.865,6.975l7.214,19.372c-0.046-0.001-0.093,0.141-0.139,0.141
              c-0.016,0-0.032,0.137-0.049,0.137H98.126L85.165,71.823l14.078-4.895c3.467-1.191,5.564-4.55,4.961-8.166
              c-0.604-3.615-3.731-6.101-7.397-6.101H55.597c-5.775,0-10.475,4.506-10.475,10.281c0,8.941,7.266,16.12,16.196,16.12
              c1.79,0,3.565-0.347,5.277-0.934l4.103-1.433l13.146,21.996l-10.097,30.285c-3.312-0.669-6.714-1.09-10.193-1.201
              c-17.589-0.563-34.055,6.138-46.219,18.697c-11.694,12.074-17.84,27.992-17.303,44.822c1.032,32.337,27.172,58.476,59.509,59.508
              c0.673,0.021,1.34,0.032,2.008,0.032c16.811,0,32.513-6.716,44.212-18.794c9.464-9.773,15.291-22.38,16.885-35.38h12.051
              c2.598,2,5.961,3.634,9.639,3.634c8.196,0,14.864-6.636,14.864-14.833c0-2.661-0.712-5.139-1.942-7.303l42.042-71.305l10.553,28.289
              c-19.435,10.359-32.698,30.831-32.698,54.348c0,33.938,27.61,61.549,61.548,61.549s61.547-27.61,61.547-61.547
              S272.641,127.946,238.703,127.946z M180.979,108.661l-36.606,62.091c-0.013,0-0.025-0.062-0.037-0.062
              c-0.043,0-0.084,0.096-0.127,0.097l-37.131-62.125H180.979z M93.992,115.669l37.378,62.514c-0.618,1.101-1.089,2.478-1.412,3.478
              h-7.326c-2.591-21-16.064-39.121-34.658-48.001L93.992,115.669z M74.447,181.661c-0.503-1-1.081-1.526-1.728-2.233l8.865-26.626
              c10.72,5.925,18.562,16.859,20.834,28.859H74.447z M91.395,218.126c-8.215,8.481-19.311,13.04-31.215,12.655
              c-21.822-0.696-39.461-18.319-40.157-40.141c-0.363-11.369,3.784-22.112,11.679-30.262c7.898-8.154,18.497-12.642,29.845-12.642
              c0.455,0,0.91,0.01,1.369,0.024c1.502,0.048,2.981,0.185,4.439,0.389l-8.966,26.9c-6.569,1.537-11.481,7.43-11.481,14.461
              c0,8.196,6.668,14.801,14.863,14.801c5.552,0,10.395-2.65,12.947-7.65h27.699C100.966,204.661,97.197,212.135,91.395,218.126z
              M238.703,231.042c-22.909,0-41.548-18.639-41.548-41.548c0-14.932,7.921-28.044,19.779-35.369l14.098,37.785
              c1.125,3.017,3.986,4.88,7.027,4.88c0.871,0,1.757-0.152,2.621-0.476c3.881-1.447,5.853-5.768,4.404-9.648l-14.169-37.977
              c2.524-0.481,5.125-0.743,7.788-0.743c22.909,0,41.547,18.639,41.547,41.548S261.613,231.042,238.703,231.042z"
          />
        </svg>
      )
      break
  }
  return (
    <>
      <tr
        key={vehicule.id}
        className={vehicule.id % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
      >
        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
          {vehicule.ordre}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
          {vehicule.nom}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
          {vehicule.immatriculation}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
          {vehicule.identifiant}
        </td>
        <td className="inline-flex whitespace-nowrap px-6 py-4 text-sm text-gray-500">
          <span className={`!text-[${vehicule.couleur}]`}>
            {vehicule.couleur}
          </span>
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
          {icone}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
          <input type="checkbox" checked={vehicule.actif} disabled />
        </td>
        <div className="inline-flex space-x-0">
          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
            <Link to={edit} className="text-indigo-600 hover:text-indigo-900">
              <PencilAltIcon className="h-5 w-5" />
            </Link>
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
            <Link to={show} className="text-indigo-600 hover:text-indigo-900">
              <EyeIcon className="h-5 w-5" />
            </Link>
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
            <Link
              to={deleted}
              className="text-indigo-600 hover:text-indigo-900"
            >
              <MinusCircleIcon className="h-5 w-5" />
            </Link>
          </td>
        </div>

        <td className="inline-flex whitespace-nowrap px-6 py-4 text-sm text-gray-500"></td>
      </tr>
    </>
  )
}

export default Vehicule
