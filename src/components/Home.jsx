import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home"  id="home">


        <main>
            <h1>Tech</h1>
            <p>Solution to all problems</p>
        </main>
    </div>

    <div className="home2">
    <img src={vg} alt="Graphics" />

    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim qui veniam soluta itaque quidem officiis voluptate quia pariatur architecto fugiat? Quod recusandae deleniti quos hic cumque earum eum nobis maxime et, non tenetur vero!</p>
    </div>

    </div>

    <div className="home3"  id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident eius neque suscipit officia voluptates est nostrum quidem architecto soluta, nisi deserunt. Atque dolores reiciendis quod exercitationem, fugiat odit blanditiis cum optio? Delectus?</p>
        </div>
    </div>

    <div className="home4"  id="brands ">
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay:"0.3s",
            }}
           >
                <AiFillGoogleCircle />
                <p>Google</p>

            </div>
            <div style={{
                animationDelay:"0.5s",
            }}
           >
                <AiFillAmazonCircle />
                <p>Amazon</p>

            </div>
            <div style={{
                animationDelay:"0.7s",
            }}
           >
                <AiFillYoutube />
                <p>Youtube</p>

            </div>

            <div style={{
                animationDelay:"1s",
            }}
           >
                <AiFillInstagram />
                <p>Instagram</p>

            </div>

            


        </article>

    </div>

    </>
  );
};

export default Home;