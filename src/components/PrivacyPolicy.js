import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
    
    return (
        <>
           <Navbar/>
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Politique de Confidentialité</h1>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
                <p className="text-gray-700 mb-4">
                    Chez [Votre Entreprise], nous accordons une grande importance à votre vie privée et nous nous engageons à protéger vos informations personnelles. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos données lorsque vous visitez notre site web ou utilisez nos services.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Informations que Nous Collectons</h2>
                <p className="text-gray-700 mb-4">
                    Nous pouvons collecter différents types d'informations lorsque vous interagissez avec notre site web ou nos services, y compris :
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><strong>Informations Personnelles :</strong> Telles que votre nom, adresse e-mail et numéro de téléphone.</li>
                    <li><strong>Données d'Utilisation :</strong> Informations sur votre interaction avec notre site web, telles que les pages visitées et les actions effectuées.</li>
                    <li><strong>Cookies et Technologies de Suivi :</strong> Informations collectées via des cookies et des technologies similaires à des fins d'analyse et de personnalisation.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Comment Nous Utilisons Vos Informations</h2>
                <p className="text-gray-700 mb-4">
                    Nous utilisons les informations que nous collectons pour diverses raisons, y compris :
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Fournir et améliorer nos services.</li>
                    <li>Communiquer avec vous, y compris le support client.</li>
                    <li>Personnaliser votre expérience et fournir du contenu pertinent.</li>
                    <li>Analyser les tendances d'utilisation et optimiser notre site web.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Sécurité des Données</h2>
                <p className="text-gray-700 mb-4">
                    Nous prenons la sécurité des données très au sérieux et mettons en œuvre des mesures pour protéger vos informations personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
                <p className="text-gray-700 mb-4">
                    Notre site web utilise des cookies pour améliorer votre expérience de navigation. En utilisant notre site web, vous consentez à l'utilisation de cookies conformément à notre politique de cookies.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Vos Droits</h2>
                <p className="text-gray-700 mb-4">
                    Vous avez certains droits concernant vos informations personnelles, y compris le droit d'accéder, de corriger ou de supprimer vos données. Pour toute question sur vos droits ou pour les exercer, veuillez nous contacter.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Contactez-nous</h2>
                <p className="text-gray-700 mb-4">
                    Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité ou nos pratiques en matière de données, veuillez contacter notre équipe de confidentialité :
                </p>
                <p className="text-gray-700">
                    Email : <a href="mailto:nextpay@gmail.com" className="text-blue-500 hover:underline">nextpay@gmail.com</a>
                </p>
                <p className="text-gray-700">
                    Téléphone : <a href="tel:+22234895674" className="text-blue-500 hover:underline">+222 34 89 56 74</a>
                </p>
            </section>
        </div>
        <Footer/>
        </>
    );
};

export default PrivacyPolicy;
