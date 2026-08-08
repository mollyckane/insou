export default function CardBack({
    coverImage,
    onClick,
    className = "",
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`card-deck aspect-[3/4] flex h-full min-h-0 w-full cursor-pointer flex-col justify-center rounded-lg border border-rose-300 bg-cover bg-center shadow-sm transition hover:scale-[1.02] hover:shadow-md ${className}`}
            style={{
                backgroundImage: `url("${coverImage}")`,
            }}
        />
    );
  }