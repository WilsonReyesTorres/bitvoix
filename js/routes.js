//Paginas

const Home = {
    template: /*html*/ `
    
    `
};
const Fournisseur = {
    template: '<h2>Page Fournisseur</h2>'
}
const Administrateur = {
    template: '<h2>Page Administrateur</h2>'
}

//Rutas

const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/fournisseur",
        component: Fournisseur
    },
    {
        path: "/administrateur",
        component: Administrateur
    }
];
const router = new VueRouter({
    routes
});

//Proyecto vue.js

new Vue({
    router,
    el: "#app"
});
