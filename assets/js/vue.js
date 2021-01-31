// data
const products = [
    { id: 1, description: "Harley 883", price: 12000, img: 'assets/img/mot1.jpeg'},
    { id: 2, description: 'Custom chinois', price: 5000, img: 'assets/img/mot2.jpeg'},
    { id: 3, description: 'Belle moto custom', price: 15000, img: 'assets/img/mot3.jpeg'},
    { id: 4, description: 'Belle moto custom', price: 18000, img: 'assets/img/mot4.jpeg'},
    { id: 5, description: 'Belle moto custom', price: 13000, img: 'assets/img/mot5.jpeg'},
    { id: 6, description: 'Belle moto custom', price: 16500, img: 'assets/img/mot6.jpeg'},
    { id: 7, description: 'Belle moto custom', price: 12500, img: 'assets/img/mot7.jpeg'},
    { id: 8, description: 'Belle moto custom', price: 12800, img: 'assets/img/mot8.jpeg'},
    { id: 9, description: 'Belle moto custom', price: 14800, img: 'assets/img/mot9.jpeg'},
    { id: 10, description: 'Très belle moto custom', price: 29, img: 'assets/img/mot10.jpeg'},
    { id: 11, description: 'Super belle moto custom', price: 87, img: 'assets/img/mot11.jpeg'},
    { id: 12, description: 'Magnifique  moto custom', price: 6, img: 'assets/img/mot12.jpeg'},
  ];
const Home = {
    template: '#home',
    name: 'Home',
    data:()=> {
        return{
            products,
        }
    }
}
const UserSettings = {
    template: '<h1>UserSettings</h1>',
    name: 'UserSettings'
}
const WishList = {
    template: '<h1>WishList</h1>',
    name: 'WishList'
}
const ShoppingCart = {
    template: '<h1>ShoppingCart</h1>',
    name: 'ShoppingCart'
}

const router = new VueRouter({
    routes: [
        { path: '/', component:Home, name:Home },
        { path: '/user-settings', component:UserSettings, name:'UserSettings' },
        { path: '/wishList', component:WishList, name: 'WishList' },
        { path: '/shopping-cart', component:ShoppingCart, name: 'ShoppingCart'},
    ]
})

const vue = new Vue({
    router

}).$mount('#app');
