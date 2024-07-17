

export default function SingleCard({img}) {
    
    return (
        
        <div>
            <img
                className="h-auto max-w-full rounded-lg"
                src={img.webformatURL}
               
            />
        </div>

    );
}