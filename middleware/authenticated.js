export default ({ redirect}) => {
    
    const loggedIn = true;

    console.log('middleware de router')

    if(!loggedIn) {
        return redirect('/login');
    }
}