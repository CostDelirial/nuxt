export default ({ store, redirect}) => {
    
    if(!store.state.authenticated) return redirect('/login')
    //const loggedIn = true;

    console.log('middleware de router')

    /*if(!loggedIn) {
        return redirect('/login');
    }*/
}