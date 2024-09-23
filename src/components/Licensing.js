import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const Licensing = () => {
    return (
        <>
        <Navbar/>
        <div className="p-6 bg-gray-100 shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Licences</h1>
            
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Aperçu</h2>
                <p className="text-gray-700 mb-4">
                    Nos produits sont licenciés sous différentes licences pour garantir la conformité avec les normes légales et offrir à nos utilisateurs la meilleure expérience possible. Veuillez consulter les sections suivantes pour comprendre les termes et conditions associés à nos licences.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Types de Licences</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><strong>Licence d'Utilisation Personnelle :</strong> Permet aux utilisateurs individuels d'utiliser nos produits à des fins personnelles et non commerciales.</li>
                    <li><strong>Licence d'Utilisation Commerciale :</strong> Accorde aux entreprises et aux organisations les droits d'utiliser nos produits à des fins commerciales.</li>
                    <li><strong>Licence Open Source :</strong> Certains de nos produits sont disponibles sous des licences open source, permettant la modification et la redistribution sous des termes spécifiques.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Termes et Conditions</h2>
                <p className="text-gray-700 mb-4">
                    En utilisant nos produits, vous acceptez de respecter les termes et conditions suivants. Les violations de ces termes peuvent entraîner la résiliation de votre licence et des actions légales.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Vous ne pouvez pas redistribuer nos produits sans autorisation appropriée.</li>
                    <li>La modification du code source de nos produits n'est autorisée que sous la Licence Open Source.</li>
                    <li>L'utilisation commerciale de nos produits nécessite l'achat d'une Licence d'Utilisation Commerciale.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Droits et Responsabilités</h2>
                <p className="text-gray-700 mb-4">
                    En tant qu'utilisateur licencié de nos produits, vous avez certains droits et responsabilités :
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li><strong>Droits :</strong> Vous avez le droit d'utiliser nos produits comme spécifié dans votre accord de licence. Vous pouvez recevoir des mises à jour et du support selon les termes de votre licence.</li>
                    <li><strong>Responsabilités :</strong> Vous êtes responsable de vous assurer que votre utilisation de nos produits est conforme à toutes les lois et réglementations applicables. Vous devez également veiller à ce que votre utilisation de nos produits ne porte pas atteinte aux droits des autres.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Conformité Légale</h2>
                <p className="text-gray-700 mb-4">
                    Nos accords de licence sont conçus pour se conformer à toutes les normes légales et réglementations pertinentes. Nous nous engageons à maintenir la transparence et à garantir que nos pratiques de licence respectent les normes légales et éthiques les plus élevées.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">Contact pour le Support Juridique</h2>
                <p className="text-gray-700 mb-4">
                    Si vous avez des questions ou avez besoin d'une assistance supplémentaire concernant nos accords de licence, veuillez contacter notre équipe de support juridique :
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

export default Licensing;
