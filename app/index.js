import angular from 'angular'
import RouteModule from 'angular-route'
import 'bootstrap/dist/css/bootstrap.css'

import { BurgerService } from './service/burger.service'
import { CollaborateursService } from './service/collaborateurs.service'

import { SgpComponent } from './sgp/sgp.component'
import { CollaborateursComponent } from './collaborateurs/collaborateurs.component'
import { BanqueComponent } from './banque/banque.component'
import { FiltreComponent } from './filtre/filtre.component'
import { routes } from './routes.config'


// Création du module app (application)
angular.module('app', [
    RouteModule
])


.component('sgp', SgpComponent)
.component('sgpCollaborateurs', CollaborateursComponent)
.component('sgpBanque', BanqueComponent)
.component('sgpFiltre', FiltreComponent)

.service('BurgerService', BurgerService)
.service('CollaborateursService', CollaborateursService)
.config(routes)
