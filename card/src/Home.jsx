import React from 'react';
import Food from './Food';
import Navber from './Navber';
import Footer from './Footer';


const Home = () => {
    return (
    <div className='container'>
        <Navber/>
        <div className="row mt-3 mx-auto">
            <div className="col-md-3">
                <Food title="Menu 1" img="images/food1.jpg" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis minima accusamus cum sapiente quidem culpa saepe porro sequi in magnam ratione quaerat."/>
            </div>

            <div className="col-md-3">

                <Food title="Menu 2" img="images/food2.jpg" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis minima accusamus cum sapiente quidem culpa saepe porro sequi in magnam ratione quaerat."/>

            </div>

            <div className="col-md-3">

                <Food title="Menu 3" img="images/food3.jpg" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis minima accusamus cum sapiente quidem culpa saepe porro sequi in magnam ratione quaerat."/>

            </div>

            <div className="col-md-3">

                <Food title="Menu 4" img="images/food4.jpg" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis minima accusamus cum sapiente quidem culpa saepe porro sequi in magnam ratione quaerat."/>

            </div>

        </div>
        <div className="row mt-3 mb-5 mx-auto">
            <div className="col-md-3">

                <Food title="Menu 5" img="images/food5.jpg" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis minima accusamus cum sapiente quidem culpa saepe porro sequi in magnam ratione quaerat."/>

            </div>
            <div className="col-md-3">

                <Food title="Menu 6" img="images/food6.jpg" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis minima accusamus cum sapiente quidem culpa saepe porro sequi in magnam ratione quaerat."/>

            </div>
            <div className="col-md-3">

                <Food title="Menu 7" img="images/food7.jpg" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis minima accusamus cum sapiente quidem culpa saepe porro sequi in magnam ratione quaerat."/>
            </div>
            <div className="col-md-3">

                <Food title="Menu 8" img="images/food8.jpg" discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis minima accusamus cum sapiente quidem culpa saepe porro sequi in magnam ratione quaerat."/>

            </div>
        </div>
        <Footer/>
            
    </div>

    );
};

export default Home;