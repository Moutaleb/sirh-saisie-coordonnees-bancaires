import './collaborateurs.component.css'
import template from './collaborateurs.component.html'
import { CollaborateursService } from '../service/collaborateurs.service'

class controller {

    constructor(CollaborateursService) {
        this.CollaborateursService = CollaborateursService
    }

    $onInit() {
        //this.collaborateurs = angular.copy(this.collaborateurs)
        this.collaborateurs = this.CollaborateursService.getCollaborateurs()  
    }



    select(collaborateur) {
        this.onSelect({
            $event: collaborateur
        })
    }

}

export let CollaborateursComponent = {
    template,
    controller,
    bindings: {
        collaborateurs: '<',
        onSelect: '&'
    }
}
