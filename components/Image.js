import React,{useState,useEffect,useContext} from 'react';
import { useQuery } from 'react-query';
import getLink from '../javascript/getLink';
import { appContext } from '../pages';


export default function Image({pageLink}) 
{
   const{currentDate,getLocal,LOCAL_STORAGE_KEY}=useContext(appContext)

   const[date,setDate]=useState(currentDate.getDate());
   const[link,setLink]=useState(pageLink);
   const{data,status,isPrevioiusData}=useQuery(['imagePage',link],getImagePage);

   useEffect(()=>
   {
     const local = getLocal();
     if(local!==null&&date!==local.date 
     || local!==undefined&&date!==local.date)return setLocal();

     setLink(local.pageLink)
   },[])

   function setLocal()
   {
      const localObj = {date,pageLink}
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(localObj))
      setDate(localObj)
   }

   async function getImagePage({queryKey})
   {
       const res = await fetch(queryKey[1]);
       const data = await res.text();
       const html = new DOMParser().parseFromString(data,'text/html');
       return getImageLink(html) 
   }
   function getImageLink(html)
   {
      if(html === undefined)return undefined
      return html.querySelector('#image').src;
   }
  
  return (
    <>
      {data && <img className='counter-app__img' src={data}></img>} 
    </>
  )
}
