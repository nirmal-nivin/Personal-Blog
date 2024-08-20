import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <>
    <section className="book" id="book">
        <h1 className="heading">COntact <span>Ping Me</span></h1>

        <form action="#">

            <input type="text" placeholder="your name" className="box"></input>
            <input type="email" placeholder="your email" className="box"></input>
            <input type="number" placeholder="your number" className="box"></input>

            <textarea placeholder="your message" class="box" cols="30" rows="10">   
            </textarea>

            <input type="submit" value="send message" class="btn"></input>

        </form>
    </section>
    </>
  )
}

export default Contact