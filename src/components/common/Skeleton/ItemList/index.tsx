const ItemList = () => (
  <>
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={`skeleton-${i + 1}`} className="mt-5">
        <div className="skeleton h-10" />
        <div className="skeleton h-4 mt-2" />
        <div className="skeleton h-4 mt-2" />
      </div>
    ))}
  </>
);

export default ItemList;
