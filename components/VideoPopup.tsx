import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

const VideoPopUp: React.FC<ModalProps> = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;
  const handleBackdropClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal-backdrop"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black bg-white p-2 rounded-full shadow"
        >
          ✕
        </button>
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src={`${videoUrl}?autoplay=1`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay"
            title="Expanded Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPopUp;
