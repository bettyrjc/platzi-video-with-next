import React, { Component } from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { getVideoSource } from "../actions";

import css from "../components/styles/components/Player.scss";
import NotFound from "./_error";

// const player = props => {

//   const { id } = props.trends.id;
//   const hasPlaying = Object.keys(props.playing).length > 0;
//   useEffect(() => {
//     props.getVideoSource(id);
//   }, []);
//   return !hasPlaying ? <NotFound/> :
//   (
//     <div className="Player">
//       <video controls autoPlay>
//         <source src={props.playing.source} type="video/mp4" />
//         Your browser does not support HTML5 video.
//       </video>
//       <div className="Player-back">
//         <button type="button" onClick={() => Router.push('/')}>
//           Regresar
//         </button>
//       </div>
//     </div>
//   )
// }

class Player extends Component {
  static async getInitialProps({ query }) {
    const { id, slug } = query;
    return { id, slug };
  }

  async componentDidMount() {
    await this.props.getVideoSource(this.props.id);
  }

  render() {
    return (
      <div className="Player">
        <video controls autoPlay>
          <source src={this.props.playing.source} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="Player-back">
          <button type="button" onClick={() => Router.push("/")}>
            Regresar
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

const mapDispatchToProps = {
  getVideoSource
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
