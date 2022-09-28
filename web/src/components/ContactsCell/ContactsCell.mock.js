// Define your own mock data here:
export const standard = () => ({
  contacts: [
    { 
      id: '1',
      ordre: '1',
      prenom: 'John',
      nom: 'Doe',
      email: 'john@doe.co',
      motdepasse: 'azaerazez',
      telephone1: '06 12 12 12 12',
      telephone2: '05 12 12 12 12',
      remarque: 'super contact',
      fonction: 'grand chef décideur',
      extranet: true,
      actif: true,
    }, 
    { 
      id: '2',
      ordre: '2',
      prenom: 'Harry',
      nom: 'Doe',
      email: 'harry@doe.co',
      motdepasse: 'azaerazez',
      telephone1: '06 12 12 12 12',
      telephone2: '05 12 12 12 12',
      remarque: 'petit contact',
      fonction: 'petit chef décideur',
      extranet: true,
      actif: false,
    }, 
    { 
      id: '3',
      ordre: '3',
      prenom: 'Max',
      nom: 'Doe',
      email: 'max@doe.co',
      motdepasse: 'azaerazez',
      telephone1: '06 12 12 12 12',
      telephone2: '05 12 12 12 12',
      remarque: 'insignifiant contact',
      fonction: 'insignifiant chef décideur',
      extranet: false,
      actif: true,
    }],
})
