import userData from './data.json'

const DisplayUser = () => {
    console.log(userData);
    
  return (
    <section className='user-com'>
        {
            userData.map(
                (value) =>
                {
                   return (
                    <div className='user' key={value.id}>
                       <img className='user-img' src={value.avatar_url} alt="" />
                       <h1 className='userName'>{value.login}</h1>
                    </div>
                   )
                }
            )
        }
    </section>
      
   
  )
}

export default DisplayUser