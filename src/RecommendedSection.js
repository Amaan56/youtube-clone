import React from 'react';
import './RecommendedSection.css';
import ScrollingMenu from './ScrollingMenu';
import VideoCard from './VideoCard';

function RecommendedSection() {
  const videoDetails = [
    {
      thumbnail:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14Gjrkz-bV9ll4OR_m9M3xXEINuwhbBq30F4asg=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
    },
    {
      thumbnail:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14Gjrkz-bV9ll4OR_m9M3xXEINuwhbBq30F4asg=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
    },
    {
      thumbnail:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14Gjrkz-bV9ll4OR_m9M3xXEINuwhbBq30F4asg=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
    },
    {
      thumbnail:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14Gjrkz-bV9ll4OR_m9M3xXEINuwhbBq30F4asg=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
    },
    {
      thumbnail:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14Gjrkz-bV9ll4OR_m9M3xXEINuwhbBq30F4asg=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
    },
    {
      thumbnail:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14Gjrkz-bV9ll4OR_m9M3xXEINuwhbBq30F4asg=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
    },
    {
      thumbnail:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14Gjrkz-bV9ll4OR_m9M3xXEINuwhbBq30F4asg=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
    },
    {
      thumbnail:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14Gjrkz-bV9ll4OR_m9M3xXEINuwhbBq30F4asg=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
    },
    {
      thumbnail:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14Gjrkz-bV9ll4OR_m9M3xXEINuwhbBq30F4asg=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
    },
    {
      thumbnail:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14Gjrkz-bV9ll4OR_m9M3xXEINuwhbBq30F4asg=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
    },
    {
      thumbnail:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14Gjrkz-bV9ll4OR_m9M3xXEINuwhbBq30F4asg=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
    },
  ];

  return (
    <div className="recommendedSection">
      <ScrollingMenu />
      <div className="videoDetailsContainer">
        {videoDetails.map((video, i) => {
          return (
            <VideoCard
              key={i}
              thumbnail={video.thumbnail}
              avatar={video.avatar}
              title={video.title}
              creator={video.creator}
              views={video.views}
              uploadDate={video.uploadDate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecommendedSection;
