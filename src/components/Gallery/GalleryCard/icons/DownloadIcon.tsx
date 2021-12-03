import React, { useState, useEffect } from 'react';

interface IDownloadIcon {
  downloadLink: string;
  id: number;
  photographer: string;
}

export const DownloadIcon: React.FC<IDownloadIcon> = ({
  downloadLink,
  photographer,
  id,
}: IDownloadIcon) => {
  
  const [didMount, setDidMount] = useState(false);
  

  useEffect(() => {
    setDidMount(true);
    ;
    return () => {
      setDidMount(false);
    };
  }, []);

  if (!didMount) {
    return null;
  }

  return (
    <a
      className="card__download-wrapper"
      href={downloadLink}
      download={`${photographer.replace(' ', '-')}-${id}.jpg`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        width="24px"
        fill="#FFF"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
      >
        <g>
          <path d="M72.2,43.2L58,57.4V17c0-2.2-1.8-4-4-4s-4,1.8-4,4v40.4L35.8,43.2c-1.6-1.6-4.1-1.6-5.7,0c-1.6,1.6-1.6,4.1,0,5.7l21,21   C52,70.7,53,71,54,71s2-0.4,2.8-1.2l21-21c1.6-1.6,1.6-4.1,0-5.7C76.3,41.6,73.8,41.6,72.2,43.2z"></path>
          <path d="M32,87h44c2.2,0,4-1.8,4-4s-1.8-4-4-4H32c-2.2,0-4,1.8-4,4S29.8,87,32,87z"></path>
        </g>
      </svg>
    </a>
  );
};
