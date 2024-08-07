import React from 'react';

interface VideoAvatarProps {
  src: string;
}

const VideoAvatar: React.FC<VideoAvatarProps> = ({ src }) => {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full overflow-hidden border-2 border-gray-300">
        <video
          src={src}
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoAvatar;
