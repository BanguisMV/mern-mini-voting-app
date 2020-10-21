
const PostRequest = (values, endpoint) => {
    fetch(`/${endpoint.toLowerCase()}`, {
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(values),
    })
}

export default PostRequest