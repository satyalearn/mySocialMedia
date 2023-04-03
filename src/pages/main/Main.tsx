import React, { useEffect, useState } from 'react'
import {getDocs, collection, doc} from 'firebase/firestore'
import { db } from '../../config/firebase'
import Post from './Post';


export interface Post{
  id:string;
  userId:string;
  title:string;
  username:string;
  description:string;

}

const Main = () => {
  const [postList, setPostList] = useState<Post[] | null>(null)
  
  const postsRef = collection(db, "posts")


  const getPosts = async ()=>{
    const data = await getDocs(postsRef);
    setPostList(data.docs.map((doc)=>({ ...doc.data(),id: doc.id})) as Post[]);
  }


useEffect(()=>{
  
  getPosts()
},[])

  return (
    <div>{postList?.map((post)=><Post post={post} key={post.id}/>)}</div>
  )
}

export default Main