'use client'

const Error = ({error} : {error:Error}) => {
 return(
       <aside>
       <h1>{error.message}</h1>
       </aside>
 )
}

export default Error;