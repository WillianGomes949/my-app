// Loading spinner component
export default function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-xl">
      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  );
}
