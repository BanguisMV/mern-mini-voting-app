

export default async (values, setLoading,openNotification , message) => {
    try {
        setLoading(true)
         const auth =  await fetch('/login', {
               method: 'POST', 
               headers: { 'Content-Type': 'application/json'},
               body: JSON.stringify(values),
               })

         const authData = await auth.json()

         if(auth.status === 404 || auth.status === 400) {
            openNotification(authData.message)
            setLoading(false)
         } else {
            localStorage.setItem('token', authData.token);
            setLoading(false)
         }

       } catch (error) { console.log(error) }
}