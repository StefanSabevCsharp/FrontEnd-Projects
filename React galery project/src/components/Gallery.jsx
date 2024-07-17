import SingleCard from "./SingleCard";
import { useEffect, useState, useRef } from "react";
import Spinner from "./Spinner";
const key = import.meta.env.VITE_PIXABAY_API_KEY;

const baseUrl = `https://pixabay.com/api/?key=${key}&q=&image_type=all&pretty=true&editors_choice=true&per_page=200`;

export default function Gallery() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [imagesPerPage, setImagesPerPage] = useState(20);

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    const galleryRef = useRef(null);

    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                setImages(data.hits);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({
                top: galleryRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(images.length / imagesPerPage)) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({
                top: galleryRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            {loading && <Spinner />}
            <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
                {currentImages.map((img, index) => {
                    return <SingleCard key={index} img={img} />;
                })}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(images.length / imagesPerPage)}
                    className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </>
    );
}