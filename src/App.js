import React, { Component } from "react";
import { Data } from "./data";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      isThisAnime: "Yes",

      // Labels
      mediaTitle: "Anime",
      episodeLabel: "Episode",
      seasonLabel: "Season",

      // The Form
      altTitle: "",
      episode: "",
      altepisode: "",
      season: "",
      playlist: "",
      timecode: "",

      // Samson
      youTubeHashtag: Data.youTube.hashtag,
      youTubeSocial: Data.youTubeSocial,
      youTubeFollow: Data.youTube.followTitle,

    };

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  updatePage(select) {
    if (select === "Yes") {
      this.setState(state => ({
        isThisAnime: select,
        mediaTitle: "Anime",
        episodeLabel: "Episode",
        seasonLabel: "Season",
      }))
    } else if (select === "No") {
      this.setState(state => ({
        isThisAnime: select,
        mediaTitle: "Manga",
        episodeLabel: "Chapter",
        seasonLabel: "Volume",
      }))
    } else {
      /*
      this.setState(state => ({
        isThisAnime: select,
        mediaTitle: "Games",
      }))
      */
    }
  }

  titlesTags = (title, sLabelNew, epLabelNew, episode) => {
    return (
      title + ", " +
      title + " reaction, " +
      title + sLabelNew + epLabelNew + ", " +
      title + sLabelNew + epLabelNew + " reaction, " +
      title + sLabelNew + " " + episode + " reaction, " +
      title + sLabelNew + ", " +
      title + sLabelNew + " reaction, "
    )
  }

  reactionTags = (title, season, episode, epLabel, sLabel) => {
    let sLabelNew = "";
    let epLabelNew = "";

    if (season === 0 || season === undefined || season === "0") {
      sLabelNew = "";
    } else if (season >= 1) {
      sLabelNew = " " + sLabel.toLowerCase() + " " + season;
    }

    if (episode === 0 || episode === undefined || episode === "0") {
      return ("");
    } else if (episode >= 1) {
      epLabelNew = " " + epLabel.toLowerCase() + " " + episode;
    }


    if (title === "" || title === undefined) {
      return ("")
    } else {
      epLabelNew = " " + epLabel.toLowerCase() + " " + episode;
      return (this.titlesTags(title, sLabelNew, epLabelNew, episode))
    }
  }

  description = (title, youtubeTitle, episode, youtubeTimecode, season, playlist, epLabel, sLabel) => {
    const captialTitle = title.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    const noSpaceTitle = title.replace(/\s/g, '');
    let sLabelNew = "";
    let epLabelNew = "";
    let youtubeTimecodeNew = "";

    if (season === 0 || season === undefined || season === "0") {
      sLabelNew = "";
    } else if (season >= 1) {
      sLabelNew = " " + sLabel + " " + season;
    }

    if (episode === 0 || episode === undefined || episode === "0") {
      return ("");
    } else if (episode >= 1) {
      epLabelNew = " " + epLabel + " " + episode;
    }

    if (youtubeTimecode === undefined || youtubeTimecode === "") {
      youtubeTimecodeNew = "";
    } else { // eslint-disable-next-line
      youtubeTimecodeNew = "<br>" + "<br>" + "Timecodes ⬇️" + "<br>" // eslint-disable-next-line
    }

    return (
      youtubeTitle + " - " + captialTitle + sLabelNew + " " + epLabelNew + " Reaction" + // eslint-disable-next-line
      "<br>" + "<br>" + captialTitle + sLabelNew + " Reactions Playlist - " + playlist + // eslint-disable-next-line
      "<br>" + "<br>" + "#" + noSpaceTitle + "reaction " + "#" + noSpaceTitle + sLabelNew.replace(/\s/g, '') + epLabelNew.replace(/\s/g, '') + " " + // eslint-disable-next-line
      this.state.youTubeHashtag + // eslint-disable-next-line
      "<br>" + "<br>" + this.state.youTubeFollow + ":" + // eslint-disable-next-line
      "<br>" + this.state.youTubeSocial[0].id + ": " + this.state.youTubeSocial[0].url + // eslint-disable-next-line
      "<br>" + this.state.youTubeSocial[1].id + ": " + this.state.youTubeSocial[1].url + // eslint-disable-next-line
      "<br>" + this.state.youTubeSocial[2].id + ": " + this.state.youTubeSocial[2].url + // eslint-disable-next-line
      "<br>" + this.state.youTubeSocial[3].id + ": " + this.state.youTubeSocial[3].url + // eslint-disable-next-line
      "<br>" + this.state.youTubeSocial[4].id + ": " + this.state.youTubeSocial[4].url + // eslint-disable-next-line
      youtubeTimecodeNew + // eslint-disable-next-line
      youtubeTimecode
    )
  }

  youtubeTag = () => {
    let title = document.getElementById("title").value.toLowerCase();
    let altTitle = document.getElementById("altTitle").value.toLowerCase();
    let youtubeTitle = document.getElementById("youtubeTitle").value;
    let episode = document.getElementById("episode").value;
    let altEpisode = document.getElementById("altEpisode").value;
    let youtubeTimecode = document.getElementById("youtubeTimecode").value;
    let season = document.getElementById("season").value;
    let playlist = document.getElementById("playlist").value;
    let displayTags = document.getElementById("displayTags");
    let displayDesc = document.getElementById("displayDescription");
    let results = document.getElementById("results");
    let noSeason = "";

    displayTags.addEventListener('click', async event => {
      if (!navigator.clipboard) {
        // Clipboard API not available
        return
      }
      const text = event.target.innerText
      try {
        await navigator.clipboard.writeText(text)
        event.target.textContent = 'Copied to clipboard'
      } catch (err) {
        console.error('Failed to copy!', err)
      }
    })

    displayDesc.addEventListener('click', async event => {
      if (!navigator.clipboard) {
        // Clipboard API not available
        return
      }
      const text = event.target.innerText
      try {
        await navigator.clipboard.writeText(text)
        event.target.textContent = 'Copied to clipboard'
      } catch (err) {
        console.error('Failed to copy!', err)
      }
    })

    results.style.display = "flex";

    return (
      displayTags.innerHTML = (this.reactionTags(title, season, episode, this.state.episodeLabel, this.state.seasonLabel) + ", " +
        this.reactionTags(title, noSeason, altEpisode, this.state.episodeLabel, this.state.seasonLabel) + ", " +
        this.reactionTags(altTitle, season, episode, this.state.episodeLabel, this.state.seasonLabel) + ", " +
        this.reactionTags(altTitle, noSeason, altEpisode, this.state.episodeLabel, this.state.seasonLabel)),
      displayDesc.innerHTML = this.description(title, youtubeTitle, episode, youtubeTimecode, season, playlist, this.state.episodeLabel, this.state.seasonLabel)
    )
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="header-title">YouTube Metadata Creator</div>
          <div className="header-subtitle">Created by <a href="https://www.samsonloftin.com/">Post-TimeSkip Sam</a></div>
          <div className="header-nav">
            <div className="header-links" onClick={() => this.updatePage("Yes")}>Anime</div>
            <div className="header-links" onClick={() => this.updatePage("No")}>Manga</div>
            {/* <div className="header-links" onClick={() => this.updatePage("Games")}>Games</div>*/}
          </div>
        </div>

        <div className="form-container">

          {/* TITLE OF MEDIA */}
          <div className="form-section">
            <label htmlFor="title">{this.state.mediaTitle} Title</label>
            <input type="text" id="title" name="title" />
          </div>


          {/* ALTERNATIVE TITLE OF MEDIA */}
          <div className="form-section">
            <label htmlFor="altTitle">Alternative {this.state.mediaTitle} Title</label>
            <input type="text" id="altTitle" name="altTitle" />
          </div>

          {/* YOUTUBE TITLE */}
          <div className="form-section">
            <label htmlFor="youtubeTitle">YouTube Title</label>
            <input type="text" id="youtubeTitle" name="youtubeTitle" />
          </div>

          {/* Episode TITLE */}
          <div className="form-three-section">
            <div className="form-section-three">
              <label htmlFor="episode">{this.state.episodeLabel} #</label>
              <input type="number" id="episode" name="episode" min="0" />
            </div>

            {/* ALT EP TITLE */}
            <div className="form-section-three">
              <label htmlFor="altEpisode">Alt {this.state.episodeLabel} #</label>
              <input type="number" id="altEpisode" name="altEpisode" min="0" />
            </div>

            {/* SEASON TITLE */}
            <div className="form-section-three">
              <label htmlFor="season">{this.state.seasonLabel} #</label>
              <input type="number" id="season" name="season" min="0" />
            </div>

            {/* Playlist TITLE */}
            <div className="form-section-three">
              <label htmlFor="playlist">YouTube Playlist</label>
              <input type="text" id="playlist" name="playlist" min="0" />
            </div>

            {/* TIMECODE TITLE */}
            <div className="form-section">
              <label htmlFor="youtubeTimecode">Timecodes</label>
              <textarea cols="50" rows="5" id="youtubeTimecode" name="youtubeTimecode" />
            </div>

            <div className="form-section" id="form-submit">
              <input className="submit" type="button" onClick={() => this.youtubeTag()} value="Submit" />
            </div>

          </div>
        </div>

        <div className="form-container" id="results">
          {/* DESCRIPTION TITLE */}
          <div className="form-section">
            <label>Description (Click Below to Copy)</label>
            <div className="display" id="displayDescription" />
          </div>

          {/* TAGS TITLE */}
          <div className="form-section">
            <label>Tags (Click Below to Copy)</label>
            <div className="display" id="displayTags" />
          </div>
        </div>



      </div>
    );
  }
}

export default App;
