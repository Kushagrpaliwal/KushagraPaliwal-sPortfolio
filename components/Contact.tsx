"use client"
import React from 'react'
import { useGSAP } from "@gsap/react"
import { gsap } from 'gsap';


const Contact = () => {

  useGSAP(() =>{
    gsap.to('.con' , {
      ease:"power4.inOut",
      opacity:1,
      y:0,
      duration:10,
    })
  })

  return (
    <div className='con opacity-0 text-white py-40' id='contact'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, magni minima deserunt provident, mollitia aliquid fuga sint quam libero dolore accusantium. Aliquam odio doloremque, delectus esse veritatis ad repellendus possimus, perferendis magnam dicta repellat saepe unde totam culpa debitis. Eveniet, vel tempore odit deserunt maxime laudantium nisi. Nobis repellendus totam voluptatibus inventore consectetur omnis animi itaque recusandae aspernatur tenetur fugiat perferendis laboriosam quisquam aperiam optio, cupiditate magnam culpa sed ut architecto nostrum possimus blanditiis! Ea neque voluptates dolor delectus recusandae consequuntur voluptatem, veritatis minima placeat ex officia inventore saepe libero excepturi, sint sed qui provident quod minus velit deleniti error!</div>
  )
}

export default Contact