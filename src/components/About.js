import React from "react";
import next from '../assets/images/next-removebg-preview.jpg';
import profile from '../assets/images/profile-removebg-preview.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    return (
        <>
        <Navbar/>
        <div className="2xl:container bg-gray-100 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">À Propos de Nous</h1>
                    <p className="font-normal text-base leading-6 text-gray-600">Il est bien établi qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il regarde sa mise en page. Le point d'utiliser Lorem Ipsum. En premier lieu, nous avons accordé à Dieu, et par cette notre présente charte confirmée pour nous et nos héritiers à jamais que l'Église anglaise sera libre, et aura ses droits entiers, et ses libertés inviolées; et nous voulons qu'il en soit ainsi observé; ce qui est apparent de</p>
                </div>
                <div className="w-full lg:w-8/12">
                    <img className="w-full h-full" src={next} alt="Un groupe de personnes" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Notre Histoire</h1>
                    <p className="font-normal text-base leading-6 text-gray-600">Il est bien établi qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il regarde sa mise en page. Le point d'utiliser Lorem Ipsum. En premier lieu, nous avons accordé à Dieu, et par cette notre présente charte confirmée pour nous et nos héritiers à jamais que l'Église anglaise sera libre, et aura ses droits entiers, et ses libertés inviolées; et nous voulons qu'il en soit ainsi observé; ce qui est apparent de</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={profile} alt="Image d'Ahmed" />
                            <img className="md:hidden block" src={profile} alt="Image d'Ahmed" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Ahmed</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={profile} alt="Image de Mohamed yahya" />
                            <img className="md:hidden block" src={profile} alt="Image de Mohamed yahya" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Mohamed yahya</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={profile} alt="Image de Cheikh Malainine" />
                            <img className="md:hidden block" src={profile} alt="Image de Cheikh Malainine" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Cheikh Malainine</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={profile} alt="Image d'Elhaj" />
                            <img className="md:hidden block" src={profile} alt="Image d'Elhaj" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elhaj</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default About;
