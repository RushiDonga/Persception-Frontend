export default function LoadingOverlay({ isLoading }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-solid"></div>
    </div>
  );
}
