import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import img from '/assets/img/hero.png'
import img1 from '/assets/img/SURİYE BUSRA ROMA ANTİK TİYATRO 6 1.png'
import img2 from '/assets/img/IMG_20191129_114543 1.png'
import './BlogDetails.css'
// import { Row } from "react-bootstrap";
import BlogImages from './BlogImages';
import BlogSuggestion from './BlogSuggestion'
import axios from 'axios'


const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({ title: '', content: '' ,main_image:''});([]);
  const [moreImages, setMoreImages] = useState([]);




  useEffect(() => {
  const BlogsData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/show_bloge/${id}`, {
       
      });
      const data= response.data.blog;
      console.log(data);
      setBlog(data);
      console.log(response.data.more_images);

      setMoreImages(response.data.more_images);

    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };
 

  BlogsData();
}, [id]);





  return (


    <div> 
      <p>id: {id}</p>
      <section className='about w-100'>
      <div className='about-hero w-100'>
        <div className='about-top-section w-100 z-0'>
          <img src={img} alt={''} className='hero-img object-fit-cover w-100 h-100'/>
        </div>
      </div>
      <div className='blogdetails'>
      <h3>{blog.title}</h3>
      <br/>
      <p>{blog.content}</p>
      </div>
     
      <BlogImages
        img1={blog.main_image} 
        img2={moreImages[0]} 
        img3={moreImages[1]} 
        img4={moreImages[2]}
        >

          </BlogImages>
      
      <BlogSuggestion></BlogSuggestion>
    </section>
    </div>

  )

}


export default BlogDetails