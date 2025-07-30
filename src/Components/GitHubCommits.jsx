import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubCommits = () => {
    const userName = "meshal10613";
    const [blockSize, setBlockSize] = useState(12);

    // Adjust block size for responsiveness
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setBlockSize(8);     // mobile
            else if (window.innerWidth < 1024) setBlockSize(10); // tablet
            else setBlockSize(12);                           // desktop
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="w-[60%] md:w-[80%] lg:w-fit mx-auto overflow-x-auto">
            <div className="card bg-[#3f3f3f] shadow-md p-4 mx-auto w-fit">
                <GitHubCalendar
                username={userName}
                blockSize={blockSize}
                blockMargin={4}
                fontSize={14}
                colorScheme="dark"
                >
                {/* <ReactTooltip delayShow={50} html /> */}
                </GitHubCalendar>
            </div>
        </div>
    );
};

export default GitHubCommits;