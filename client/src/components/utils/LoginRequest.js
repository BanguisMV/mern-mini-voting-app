import jwt_decode from "jwt-decode";

export default async (values, setLoading, openNotification, dispatch,push ) => {
    try {
        setLoading(true)
         const auth =  await fetch('/login', {
               method: 'POST', 
               headers: { 'Content-Type': 'application/json'},
               body: JSON.stringify(values),
               })

         const authData = await auth.json()

         if(auth.status === 404 || auth.status === 400) {
            setLoading(false)
            openNotification(authData.message)
         } else {
            localStorage.setItem('token', authData.token);
            setLoading(false)
            const user = jwt_decode(localStorage.getItem('token'))
            dispatch({type: 'LOGIN', payload: { role:user.role, id: user._id}})
            push()
         }

       } catch (error) { console.log(error) }
}