import React from "react";
import Image from 'next/image';
import simpsons from "../assets/simpsons.gif"

const AboutPage = () => {
  return (
    <>
      <h3>Hello 👋</h3>
      <br/>
      <h3>I'm a <span style={{color:"#f39"}}>Fullstack Developer</span>, who loves everything related to programming.</h3>
      <h3>
      Literally i can be spending time the whole day programming (hours and hours) , and i dont notice
      </h3>
      <br/>
      <h3>
      I'm passionate about <span style={{color:"#9f3"}}>creating solutions</span> to all kinds of problems in the world of programming.
      </h3>
      <br/>
      <h3>
      I'm currently taking my first steps in this world, but i consider myself a person who is very <span style={{color:"#f15"}}>capable</span> of performing very well anywhere.
      </h3>
      <br/>
      <h3>
      I'm a <span style={{color:"#3f9"}}>very fast learner</span>, <span style={{color:"#93f"}}>responsible person</span> and <span style={{color:"#33a0ff"}}>good at teamwork</span>
      </h3>
      <br/>
      <h3>
      This is the kind of person I am. I never leave anything half done, I always say, <span style={{color:"#1f5"}}>"if something has to be done, it has to be done well"</span>
      </h3>
      
      <br/>
      <br/>
      <br/>
      <Image src={simpsons} alt="gif" />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
