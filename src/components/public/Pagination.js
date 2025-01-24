import React from 'react'

const Pagination = ({totalPosts,recordsPerPage,setCurrentPage,currentPage}) => {
    let pages=[]
    for(let i=1;i<= Math.ceil(totalPosts/recordsPerPage);i++){
        pages.push(i)
    }
  return (
    <div>
        {
            pages.map((page,index)=>{
                return <button key={index} onClick={()=>setCurrentPage(page)}
                class={page==currentPage?'active' : ''}>{page}</button>
            })
        }
    </div>
  )
}

export default Pagination