// data
const products = [
    { id: 1, description: 'Harley 883', price: 12000, img: 'assets/img/mot1.jpeg'},
    { id: 2, description: 'Custom chinois', price: 5000, img: 'assets/img/mot2.jpeg'},
    { id: 3, description: 'Belle moto custom', price: 15000, img: 'assets/img/mot3.jpeg'},
    { id: 4, description: 'Splendide moto custom', price: 18000, img: 'assets/img/mot4.jpeg'},
    { id: 5, description: 'Magnifique moto custom', price: 13000, img: 'assets/img/mot5.jpeg'},
    { id: 6, description: 'Rutilante moto custom', price: 16500, img: 'assets/img/mot6.jpeg'},
    { id: 7, description: 'Etincelante moto custom', price: 12500, img: 'assets/img/mot7.jpeg'},
    { id: 8, description: 'Epoustouflante moto custom', price: 12800, img: 'assets/img/mot8.jpeg'},
    { id: 9, description: 'Extraordinaire moto custom', price: 14800, img: 'assets/img/mot9.jpeg'},
    { id: 10, description: 'Très belle moto custom', price: 29000, img: 'assets/img/mot10.jpeg'},
    { id: 11, description: 'Super belle moto custom', price: 18700, img: 'assets/img/mot11.jpeg'},
    { id: 12, description: 'Magnifique  moto custom', price: 15660, img: 'assets/img/mot12.jpeg'},
  ];
const Home = {
    template: '#home',
    name: 'Home',
    data:()=> {
        return {
            products,
            searchKey: '',
            liked: [],
            cart: []
        }
    },
    //surveille et reagit au changement (agit comme un eventlistner)
    computed: {
        filteredList(){
            return this.products.filter((product) => {
                return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
            })
        },
        getLikeCookie() {
            let cookieValue = JSON.parse($cookies.get('like'));
            cookieValue == null ? this.liked = [] : this.liked = cookieValue
        }
    },
    // intervient lors d'une action exemple : clic bouton
    methods: {
        setLikeCookie() {
            document.addEventListener('input', () => {
                setTimeout(() => {
                    $cookies.set('like', JSON.stringify(this.liked));

                },300);
            })
        },
        addToCart(product) {
            for(let i = 0; i< this.cart.length; i++){
                if(this.cart[i].id== product.id){
                    return this.cart[i].quantity++
                }
            }
            this.cart.push({
                id: product.id,
                img: product.img,
                description: product.description,
                price: product.price,
                quantity: 1
            })
        },
        cartPlusOne(product){
            product.quantity = product.quantity + 1;
        },    
        cartMinusOne(product, id){
           if(product.quantity == 1){
               this.cartRemoveItem(id);
           }else{
               product.quantity = product.quantity - 1;
           }
        },
        cartRemoveItem(id){
            this.$delete(this.cart, id)
        }    
    },
    mounted() {
        this.getLikeCookie;
    },
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
