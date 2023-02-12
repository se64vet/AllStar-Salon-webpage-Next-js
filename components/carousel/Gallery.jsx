import React, { useEffect, useState } from 'react'
const Gallery = () => {
    const [id,setId]= useState([])
    let start = 0;
    const maxId = 9;
    const setUpIds = ()=>{
        let curId = Math.floor(Math.random()*15 + 1)       
        let tempIds = []
        for(let i=0; i < maxId; i++){
            curId < maxId ? curId++ : curId=1
            tempIds.push(curId);
        }
        setId(tempIds)
    }
    useEffect(()=>{ 
        // setUpIds();
        setId([5,7,12,13,14,15,1,9,16])
    },[])
  return (
    <>
        {id.length == maxId && 
        <div className='container'>
            <div className='row'>
                <div className='col-6 text-center'>
                    <img src={`/gallery/${id[0]}.webp`} alt="recent work arts" className="img-fluid"/>
                </div>
                <div className='col-6 text-center'>
                    <img src={`/gallery/${id[1]}.webp`} alt="recent work arts" className="img-fluid"/>
                </div>
            </div>

            <div className='row'>
                <div className='col-4 text-center'>
                    <img src={`/gallery/${id[2]}.webp`} alt="recent work arts" className="img-fluid"/>
                </div>
                <div className='col-4 text-center'>
                    <img src={`/gallery/${id[3]}.webp`} alt="recent work arts" className="img-fluid"/>
                </div>
                <div className='col-4 text-center'>
                    <img src={`/gallery/${id[4]}.webp`} alt="recent work arts" className="img-fluid"/>
                </div>
            </div>
            
            <div className='row'>
                <div className='col-3 text-center'>
                    <img src={`/gallery/${id[5]}.webp`} alt="recent work arts" className="img-fluid"/>
                </div>
                <div className='col-3 text-center'>
                    <img src={`/gallery/${id[6]}.webp`} alt="recent work arts" className="img-fluid"/>
                </div>
                <div className='col-3 text-center'>
                    <img src={`/gallery/${id[7]}.webp`} alt="recent work arts" className="img-fluid"/>
                </div>
                <div className='col-3 text-center'>
                    <img src={`/gallery/${id[8]}.webp`} alt="recent work arts" className="img-fluid"/>
                </div>
            </div>
        </div>
        }
    </>
  )
}

export default Gallery