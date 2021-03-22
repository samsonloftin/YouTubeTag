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

  titlesTags = (title, sLabelNew, epLabelNew, episode, mediaType) => {
    return (
      title + ", " +
      title + " " + mediaType + " reaction, " +
      title + sLabelNew + " reaction, " +
      title + sLabelNew + epLabelNew + " reaction, "
    )
  }

  reactionTags = (title, season, episode, epLabel, sLabel, mediaType, altEpisode, altTitle, displayTagsOverflow, overflowTags) => {
    let sLabelNew = "";
    let epLabelNew = "";
    let altEpLabelNew = "";
    let tag01 = "";
    let tag03 = "";
    let tag02 = "";
    let tag04 = "";
    let tags = "";
    let newTags = "";
    let newTags2 = "";

    if (season === 0 || season === undefined || season === "0") {
      sLabelNew = "";
    } else if (season >= 1) {
      sLabelNew = " " + sLabel.toLowerCase() + " " + season;
    }

    if (episode === 0 || episode === undefined || episode === "0") {
      epLabelNew = "";
    } else if (episode >= 1) {
      epLabelNew = " " + epLabel.toLowerCase() + " " + episode;
    }

    if (altEpisode === 0 || altEpisode === undefined || altEpisode === "0") {
      altEpLabelNew = "";
    } else if (altEpisode >= 1) {
      altEpLabelNew = " " + epLabel.toLowerCase() + " " + altEpisode;
    }

    if (title === "" || title === undefined) {
      return ("Title Needed")
    } else {
      tag01 = this.titlesTags(title, sLabelNew, epLabelNew, episode, mediaType.toLowerCase());
      tag02 = this.titlesTags(title, "", altEpLabelNew, altEpisode, mediaType.toLowerCase());
      tags += tag01 + tag02;
      newTags2 = tag01 + tag02;
    }

    if (altTitle === "" || altTitle === undefined || altTitle === 0) {
      tag03 = "";
      tag04 = "";
    } else {
      tag03 = this.titlesTags(altTitle.toLowerCase(), sLabelNew, epLabelNew, episode, mediaType.toLowerCase());
      tag04 = this.titlesTags(altTitle.toLowerCase(), "", altEpLabelNew, altEpisode, mediaType.toLowerCase());
      tags += tag03 + tag04;
      newTags = newTags2 + tag03;
    }

    if (tags.length <= 500) {
      return (tags);
    } else if (newTags.length <= 500) {
      return (
        newTags +
        (overflowTags.style.display = "flex") +
        (displayTagsOverflow.innerHTML = tag04)
        );
    } else if (newTags2.length <= 500) {
      return (
        newTags2 +
        (overflowTags.style.display = "flex") +
        (displayTagsOverflow.innerHTML = tag03 + tag04)
        );
    } else {
      return ("Anime title is too long, cannot create tags under 500 characters")
    }

  }

  videoTitle = (title, youtubeTitle, episode, season, epLabel, sLabel) => {
    const captialTitle = title.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    let sLabelNew = "";
    let epLabelNew = "";

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

    return (youtubeTitle + " - " + captialTitle + sLabelNew + epLabelNew + " Reaction")
  }

  description = (title, youtubeTitle, episode, youtubeTimecode, season, playlist, epLabel, sLabel, altEpisode, mediaType, altTitle) => {
    const captialTitle = title.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    const altCaptialTitle = altTitle.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    const noSpaceTitle = title.replace(/\s/g, '');
    let sLabelNew = "";
    let epLabelNew = "";
    let altEpLabelNew = "";
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

    if (altEpisode === 0 || altEpisode === undefined || altEpisode === "0") {
      altEpLabelNew = "";
    } else if (altEpisode >= 1) {
      altEpLabelNew = youtubeTitle + " - " + captialTitle + " " + epLabel.toLowerCase() + " " + altEpisode + " Reaction";
    }

    if (youtubeTimecode === undefined || youtubeTimecode === "") {
      youtubeTimecodeNew = "";
    } else { // eslint-disable-next-line
      youtubeTimecodeNew = "<br>" + "<br>" + "Timecodes ⬇️" + "<br>" // eslint-disable-next-line
    }


    return (
      youtubeTitle + " - " + captialTitle + sLabelNew + epLabelNew + " Reaction" + // eslint-disable-next-line
      altEpLabelNew + // eslint-disable-next-line
      youtubeTitle + " - " + altCaptialTitle + epLabelNew + " Reaction" + // eslint-disable-next-line
      "<br>" + "<br>" + captialTitle + sLabelNew + mediaType +" Reactions Playlist - " + playlist + // eslint-disable-next-line
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
    let displayTagsOverflow = document.getElementById("displayTagsOverflow");
    let displayDesc = document.getElementById("displayDescription");
    let displayTitle = document.getElementById("displayTitle");
    let results = document.getElementById("results");
    let overflowTags = document.getElementById("overflowTags");

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

    displayTitle.addEventListener('click', async event => {
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
    overflowTags.style.display = "none";

    return (
      displayTags.innerHTML = this.reactionTags(title, season, episode, this.state.episodeLabel, this.state.seasonLabel, this.state.mediaTitle, altEpisode, altTitle, displayTagsOverflow, overflowTags),
      displayTitle.innerHTML = this.videoTitle(title, youtubeTitle, episode, season, this.state.episodeLabel, this.state.seasonLabel),
      displayDesc.innerHTML = this.description(title, youtubeTitle, episode, youtubeTimecode, season, playlist, this.state.episodeLabel, this.state.seasonLabel, this.state.mediaTitle, altEpisode, altTitle)
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
          {/* TITLE */}
          <div className="form-section">
            <label>Video Title - Click below to Copy</label>
            <div className="display" id="displayTitle" />
          </div>

          {/* DESCRIPTION TITLE */}
          <div className="form-section">
            <label>Description - Click below to Copy</label>
            <div className="display" id="displayDescription" />
          </div>

          {/* TAGS TITLE */}
          <div className="form-section">
            <label>Tags - Click below to Copy</label>
            <div className="display" id="displayTags" />
          </div>

          {/* TAGS OVERFLOW */}
          <div className="form-section" id="overflowTags">
            <label>Tags Overflow</label>
            <label>For tags that don't fit within YouTube's 500 character limit</label>
            <div className="display" id="displayTagsOverflow" />
          </div>
        </div>



      </div>
    );
  }
}

export default App;
