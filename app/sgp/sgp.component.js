//import './game.component.css'
import template from './sgp.component.html'

class controller {
    constructor (CollaborateursService, $location) {
        this.$location=$location
        this.CollaborateursService = CollaborateursService
    }

    $onInit () {
        this.CollaborateursService.getCollaborateurs()
        .then(collaborateurs => this.collaborateurs = collaborateurs)
    }
}

export let SgpComponent = {
    template,
    controller,
    bindings: {
    }
}
