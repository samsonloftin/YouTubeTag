const reactionTags = (anime, season, episode) => {
    let seasonal2 = " season " + season;

    if (season === "" || season === 0) {
        seasonal2 = "";
    }

    return (
        anime + ", " +
        anime + " reaction, " +
        anime + seasonal2 + " episode " + episode + ", " +
        anime + seasonal2 + " episode " + episode + " reaction, " +
        anime + seasonal2 + ", " +
        anime + seasonal2 + " reaction, " +
        "samson, samson loftin, samson l, "
    )
}

const description = (anime, title, episode, season, reaction, timecode) => {
    const captial = anime.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    const noSpace = anime.replace(/\s/g, '');
    let seasonal = " Season " + season;
    let seasonalnos = "season" + season;

    if (season === "" || season === 0) {
        seasonal = "";
        seasonalnos = "";
    }

    return (
        "Timecodes ⬇️" +
        "<br>" + timecode +
        "<br>" + title + " - " + captial + seasonal + " Episode " + episode + " Reaction" +
        "<br>" + "<br>" + captial + seasonal + " Reactions Playlist ♥ " + reaction +
        "<br>" + "<br>" + "#" + noSpace + "reaction " + "#" + noSpace + seasonalnos + "episode" + episode + " " +
        "#MoreSamsonReactions" +
        "<br>" + "<br>" + "Follow me over on:" +
        "<br>" + "Anime Reactions ♥ https://ANIMEREACTIONS.saml.me" +
        "<br>" + "Main Channel (Gaming/Anime): http://YOUTUBE.saml.me" +
        "<br>" + "Twitter:  https://TWITTER.saml.me" +
        "<br>" + "Instagram:  https://INSTAGRAM.saml.me" +
        "<br>" + "Twitch: https://TWITCH.saml.me"
    )
}

youtubeTag = () => {
    const anime = document.getElementById("anime").value.toLowerCase();
    const title = document.getElementById("title").value;
    const reaction = document.getElementById("reaction").value;
    const episode = document.getElementById("episode").value;
    const season = document.getElementById("season").value;
    const timecode = document.getElementById("timecode").value;
    const displayTags = document.getElementById("displayTags");
    const displayDesc = document.getElementById("displayDescription");

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

    return (
    displayTags.innerHTML = reactionTags(anime, season, episode),
        displayDesc.innerHTML = description(anime, title, episode, season, reaction, timecode)
    )
}