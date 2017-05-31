const API_URL = 'http://localhost:8080/sgp/api/collaborateurs'

export class CollaborateursService {
    constructor ($http, $q) {
        this.$http = $http
        this.$q = $q
        this.collaborateurs = []
    }

    // return promise of
    getCollaborateurs () {
        if (this.collaborateurs.length !== 0) {
            return this.$q.resolve(this.collaborateurs)
        }

        return this.$http.get(API_URL)
        .then(response => response.data)
        .then(collaborateurs => {
            this.collaborateurs = collaborateurs
            return collaborateurs
        })
    }
}

