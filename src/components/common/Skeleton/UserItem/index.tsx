const UserItem = () => (
  <>
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={`skeleton-${i + 1}`} className="flex flex-col gap-4 w-full">
        <div className="flex gap-4 items-center mt-4">
          <div className="skeleton w-12 h-12 rounded-full shrink-0" />
          <div className="flex flex-col gap-2 w-full">
            <div className="skeleton h-3" />
            <div className="skeleton h-3" />
          </div>
        </div>
      </div>
    ))}
  </>
);

export default UserItem;
