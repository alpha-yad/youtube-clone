import React from 'react';
import "./recommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
      title="2024 Mercedes Benz New C-Class Walkaround | Car Quest"
      views="35K Views"
      timestamp="3 days ago"
      channelImage="https://imgs.search.brave.com/W2sSN2fsmb_PBPzauIACvP5fH3l7LrhzcAoPJfoLh5s/rs:fit:32:32:1/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvZGVhNGRiZDIx/ZjQxNjIxOGI3MmIy/YjUwMjg4YjI4NTEy/NThlOTc5ODg3ODU5/MzE2Mjg2OGRhZGZi/ZGMwZWI1YS93d3cu/Y2Fyc2d1aWRlLmNv/bS5hdS8"
      channel="carsguide"
      image="https://img.youtube.com/vi/jlQCMLUJlV8/mqdefault.jpg"
      />
      <VideoCard
      title="The Most Realistic Game I've Ever Played..."
      views="145k Views"
      timestamp="1 days ago"
      channelImage="https://yt3.ggpht.com/qVHOaaFyysO3HNJzYL3KmEsGexzS5ZkGQCwVethI2W-iB_f0XF7zCdxMqLakCdaukFJlD4AdTkQ=s68-c-k-c0x00ffffff-no-rj"
      channel="Tomographic"
      image="https://img.youtube.com/vi/SeDAG_hsLUU/mqdefault.jpg"
      />
      <VideoCard
      title="$10,000 Every Day You Survive In The Wilderness"
      views="6.6M Views"
      timestamp="10 days ago"
      channelImage="https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s48-c-k-c0x00ffffff-no-rj"
      channel="MrBeast"
      image="https://img.youtube.com/vi/U_LlX4t0A9I/mqdefault.jpg"
      />
      <VideoCard
      title="Last time in NZ: Super overs galore! | IND Vs NZ | Prime Video India"
      views="27M Views"
      timestamp="1 year ago"
      channelImage="https://yt3.ggpht.com/tV7mR48kz0fcbL4056L7S_pfqygwKrRQB1Rb8YPP32CLnA8NT14zc9Cp87v6Xj1yWUl7N6hW=s48-c-k-c0x00ffffff-no-rj"
      channel="Prime Video India"
      image="https://img.youtube.com/vi/ZT2ilX9MC1w/mqdefault.jpg"
      />
      <VideoCard
      title="VENOM: THE LAST DANCE – Official Trailer (HD)"
      views="15M Views"
      timestamp="1 days ago"
      channel="Sony Pictures Entertainment"
      channelImage="https://yt3.ggpht.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s48-c-k-c0x00ffffff-no-rj"
      image="https://img.youtube.com/vi/__2bjWbetsA/mqdefault.jpg"
      />
      <VideoCard
      title="One Punch Man - Fitness test"
      views="147M Views"
      timestamp="8 years ago"
      channel="animelab"
      channelImage="https://yt3.ggpht.com/ytc/AIdro_lZvqbVRy1xfiEVUQcW_V0vQ66fZS1OKi4SQMVxdPue7bs=s48-c-k-c0x00ffffff-no-rj"
      image="https://img.youtube.com/vi/x0CJKvevs2M/mqdefault.jpg"/>
      </div>
    </div>
  );
}

export default RecommendedVideos;

