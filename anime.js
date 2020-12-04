
const reactionTags = (anime, episode) => {
    return (
        anime + " reaction, " +
        anime + " ep " + episode + ", " +
        anime + " ep " + episode + " reaction, " +
        anime + " episode " + episode + ", " +
        anime + " reaction " + episode + ", " +
        "reaction " + anime + ", " +
        "reaction " + anime + " ep " + episode + ", " +
        "reaction " + anime + " episode " + episode + ", " +
        "reaction " + anime + " " + episode + ", " +
        anime + " " + episode + ", " +
        "anime, " + "anime reaction, " + "reaction anime, " + "weeb, " + "weeb reaction, "
    )
}

const seasonTags = (anime, season) => {
    return (
        anime + " " + season + ", " +
        anime + " season " + season + ", " +
        anime + " s " + season + ", " +
        anime + " s" + season + ", "
    )
}

const description = (anime, episode, season, reaction, watchalong, timecode) => {
    const captial = anime.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    const noSpace = anime.replace(/\s/g, '');
    let seasonal = " Season" + season;
    let watchalonger = "<br>" + "<br>" + captial + " Watchalong FULL EPISODE Playlist ♥ " + watchalong;

    if (season === "" || season === 0) {
        seasonal = "";
    }

    if (watchalong === "") {
        watchalonger = "";
    }

    console.log(timecode);

    return (
        "⬇️ TIMECODES ⬇️" +
        "<br>" + "<br>" + captial + " Reaction Episode " + episode + seasonal +
        "<br>" + "<br>" + captial + " Reactions / Impressions Playlist ♥ " + reaction +
        watchalonger +
        "<br>" + "<br>" + "#" + noSpace + "reaction " + "#" + noSpace + "ep" + episode + " " +
        "#MoreSamsonReactions" +
        "<br>" + "<br>" +  "♥ FOLLOW ME ♥ " +
        "<br>" + "Anime Reactions ♥ https://ANIMEREACTIONS.saml.me" +
        "<br>" + "Anime Review / Discussions ♥ http://YOUTUBE.saml.me" +
        "<br>" + "Twitter:  https://TWITTER.saml.me" +
        "<br>" + "Instagram:  https://INSTAGRAM.saml.me" +
        "<br>" + "TikTok: https://TikTok.saml.me" +
        "<br>" + "<br>" + "♥ TIMECODES ♥" +
        "<br>" + timecode
    )
}

youtubeTag = () => {
    const anime = document.getElementById("anime").value.toLowerCase();
    const reaction = document.getElementById("reaction").value.toLowerCase();
    const watchalong = document.getElementById("watchalong").value.toLowerCase();
    const episode = document.getElementById("episode").value;
    const season = document.getElementById("season").value;
    const timecode = document.getElementById("timecode").value;
    const displayTags = document.getElementById("displayTags");
    const displayDesc = document.getElementById("displayDescription");

    const YTReact = reactionTags(anime, episode);
    const YTSeason = seasonTags(anime, season);
    const YTDesc = description(anime, episode, season, reaction, watchalong, timecode);

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

    if (season === "" || season === 0) {
        return (
            displayTags.innerHTML = YTReact,
            displayDesc.innerHTML = YTDesc
        )
    } else {
        return (
            displayTags.innerHTML = (
                reactionTags(anime, episode) +
                "<br>" + "<br>" +
                seasonTags(anime, season)
            ),

            displayDesc.innerHTML = YTDesc
        )
    }
}