export default ({  store, redirect}) => {
    
    console.log(store.state.auth.loggedIn);
    if( store.state.auth.loggedIn){
        return redirect('/signup')
    }
    if(!store.state.authenticated) return redirect('/login')
   
    console.log(loggedIn)

    //console.log('middleware de router')

   if(!loggedIn) {
        return redirect('/login');
    }
}