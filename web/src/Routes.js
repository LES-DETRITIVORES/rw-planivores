// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import TarifsLayout from 'src/layouts/TarifsLayout'

import TourneesLayout from 'src/layouts/TourneesLayout'

import OperateursLayout from 'src/layouts/OperateursLayout'

import VehiculesLayout from 'src/layouts/VehiculesLayout'

import MaterielsLayout from 'src/layouts/MaterielsLayout'

import MatieresLayout from 'src/layouts/MatieresLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={TarifsLayout}>
        <Route path="/tarifs/new" page={TarifNewTarifPage} name="newTarif" />
        <Route path="/tarifs/{id:Int}/edit" page={TarifEditTarifPage} name="editTarif" />
        <Route path="/tarifs/{id:Int}" page={TarifTarifPage} name="tarif" />
        <Route path="/tarifs" page={TarifTarifsPage} name="tarifs" />
      </Set>
      <Set wrap={TourneesLayout}>
        <Route path="/tournees/new" page={TourneeNewTourneePage} name="newTournee" />
        <Route path="/tournees/{id:Int}/edit" page={TourneeEditTourneePage} name="editTournee" />
        <Route path="/tournees/{id:Int}" page={TourneeTourneePage} name="tournee" />
        <Route path="/tournees" page={TourneeTourneesPage} name="tournees" />
      </Set>
      <Set wrap={OperateursLayout}>
        <Route path="/operateurs/new" page={OperateurNewOperateurPage} name="newOperateur" />
        <Route path="/operateurs/{id:Int}/edit" page={OperateurEditOperateurPage} name="editOperateur" />
        <Route path="/operateurs/{id:Int}" page={OperateurOperateurPage} name="operateur" />
        <Route path="/operateurs" page={OperateurOperateursPage} name="operateurs" />
      </Set>
      <Set wrap={VehiculesLayout}>
        <Route path="/vehicules/new" page={VehiculeNewVehiculePage} name="newVehicule" />
        <Route path="/vehicules/{id:Int}/edit" page={VehiculeEditVehiculePage} name="editVehicule" />
        <Route path="/vehicules/{id:Int}" page={VehiculeVehiculePage} name="vehicule" />
        <Route path="/vehicules" page={VehiculeVehiculesPage} name="vehicules" />
      </Set>
      <Set wrap={MaterielsLayout}>
        <Route path="/materiels/new" page={MaterielNewMaterielPage} name="newMateriel" />
        <Route path="/materiels/{id:Int}/edit" page={MaterielEditMaterielPage} name="editMateriel" />
        <Route path="/materiels/{id:Int}" page={MaterielMaterielPage} name="materiel" />
        <Route path="/materiels" page={MaterielMaterielsPage} name="materiels" />
      </Set>
      <Set wrap={MatieresLayout}>
        <Route path="/matieres/new" page={MatiereNewMatierePage} name="newMatiere" />
        <Route path="/matieres/{id:Int}/edit" page={MatiereEditMatierePage} name="editMatiere" />
        <Route path="/matieres/{id:Int}" page={MatiereMatierePage} name="matiere" />
        <Route path="/matieres" page={MatiereMatieresPage} name="matieres" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
