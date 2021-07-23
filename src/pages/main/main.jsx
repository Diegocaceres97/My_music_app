import React from "react";
import MainContainer from "../../containers/main/main";
import { useSelector } from "react-redux";
import { selectPlaylist } from "../../features/PlaylistSlice";
import SongRow from "../../components/organisms/main/SongRow/SongRow";
import { requireAuthentication } from '../../AuthenticatedComponent';
import "./main.scss";

const Main = () => {
  const playlist = useSelector(selectPlaylist);
  return (
    playlist && (
      <section>
        <MainContainer />
        <div className="Songs">
          {playlist.map((item, index) => (
            <SongRow track={item} key={index} />
          ))}
        </div>
      </section>
    )
  );
};

export default requireAuthentication(Main);
