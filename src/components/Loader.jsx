export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center">
        <span className="loading loading-spinner loading-xl"></span>
        <p className="mt-4 text-gray-600 font-medium text-lg">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
