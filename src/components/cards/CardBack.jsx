export default function CardBack({ coverImage, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick} 
            className="card-deck rounded-lg border border-rose-300 shadow-sm transition hover:shadow-md hover:scale-102 min-h-[400px] cursor-pointer mt-6 flex flex-col justify-center"
            style={{
                backgroundImage: `url("${coverImage}")`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
            }}
        />
    );
}