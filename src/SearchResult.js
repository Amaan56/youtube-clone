import React from 'react';
import './SearchResult.css';
import FilterListIcon from '@material-ui/icons/FilterList';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SearchResultRow from './SearchResultRow';

function SearchResult() {
  const searchResultList = [
    {
      image:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
      videoDescription:
        'Today I wanted to reveal the biggest opportunity for developers in 2021 that a lot of us have discovered but nobody has ever ...',
    },
    {
      image:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
      videoDescription:
        'Today I wanted to reveal the biggest opportunity for developers in 2021 that a lot of us have discovered but nobody has ever ...',
    },
    {
      image:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
      videoDescription:
        'Today I wanted to reveal the biggest opportunity for developers in 2021 that a lot of us have discovered but nobody has ever ...',
    },
    {
      image:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
      videoDescription:
        'Today I wanted to reveal the biggest opportunity for developers in 2021 that a lot of us have discovered but nobody has ever ...',
    },
    {
      image:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
      videoDescription:
        'Today I wanted to reveal the biggest opportunity for developers in 2021 that a lot of us have discovered but nobody has ever ...',
    },
    {
      image:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
      videoDescription:
        'Today I wanted to reveal the biggest opportunity for developers in 2021 that a lot of us have discovered but nobody has ever ...',
    },
    {
      image:
        'https://i.ytimg.com/an_webp/R7PhEdxrhB4/mqdefault_6s.webp?du=3000&sqp=CIrdyP0F&rs=AOn4CLCLazHrkAOdz8SQYb5sKVcy33inRw',
      avatar:
        'https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo',
      title: 'How Paul Heyman fixed Roman Reigns',
      creator: 'Whatculture Wrestling',
      views: '114K',
      uploadDate: '1 month ago',
      videoDescription:
        'Today I wanted to reveal the biggest opportunity for developers in 2021 that a lot of us have discovered but nobody has ever ...',
    },
  ];

  return (
    <div className="searchresult">
      <div className="searchresult__filter">
        <FilterListIcon className="searchresult__filterIcon" />
        <h4>FILTER</h4>
      </div>
      <hr />
      <div className="searchresult__channelInfo">
        <img
          src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
          alt="Clever Qazi"
          className="searchresult_channelImage"
        />
        <div className="searchresult__channelDescription">
          <div className="searchresult__channelTitle">
            <h4>Clever Programmer</h4>
            <VerifiedUserIcon className="verifyIcon" />
          </div>
          <p>83K Subscribers • 490 videos</p>
          <p>
            You can find awesome programming lessons here! Also, expect
            programming tips and tricks that will take your coding skills to the
            ...
          </p>
        </div>
        <button className="subscribeBtn">SUBSCRIBED</button>
        <NotificationsActiveIcon className="notificationIcon" />
      </div>
      <hr />
      <h4 style={{ padding: '20px', marginLeft: '1.5rem' }}>
        Latest from Clever Programmer
      </h4>
      <div className="searchresult__container">
        {searchResultList.map((result, i) => {
          return (
            <SearchResultRow
              image={result.image}
              title={result.title}
              avatar={result.avatar}
              views={result.views}
              creator={result.creator}
              videoDescription={result.videoDescription}
              uploadDate={result.uploadDate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
