const LoadingPopup = () => (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-stone-400 bg-opacity-40 z-[100]">
    <span className="loading loading-dots loading-lg text-primary" />
  </div>
);

export default LoadingPopup;
