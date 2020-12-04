
const reactionTags = (anime, episode) => {
    return (
        anime + " playthrough, " +
        anime + " p " + episode + ", " +
        anime + " p " + episode + " playthrough, " +
        anime + " part " + episode + ", " +
        anime + " part " + episode + ", " +
        "playthrough " + anime + ", " +
        "playthrough " + anime + " p " + episode + ", " +
        "playthrough " + anime + " part " + episode + ", " +
        "playthrough " + anime + " " + episode + ", " +
        anime + " " + episode + ", " +
        "gaming, " + "gaming playthrough, " + "playthrough gaming"
    )
}

const description = (anime, episode, reaction, timecode) => {
    const captial = anime.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    const noSpace = anime.replace(/\s/g, '');

    return (
        "⬇️ TIMECODES ⬇️" +
        "<br>" + "<br>" + captial + " Playthrough Part " + episode +
        "<br>" + "<br>" + captial + " Playthrough Playlist ♥ " + reaction +
        "<br>" + "<br>" + "#" + noSpace + "playthrough " + "#" + noSpace + "part" + episode + " " +
        "#MoreSamsonPlaythroughs" +
        "<br>" + "<br>" +  "♥ FOLLOW ME ♥ " +
        "<br>" + "Anime Reactions ♥ https://ANIMEREACTIONS.saml.me" +
        "<br>" + "Gaming Playthroughs / Discussions ♥ http://YOUTUBE.saml.me" +
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
    const episode = document.getElementById("episode").value;
    const timecode = document.getElementById("timecode").value;
    const displayTags = document.getElementById("displayTags");
    const displayDesc = document.getElementById("displayDescription");

    const YTReact = reactionTags(anime, episode);
    const YTDesc = description(anime, episode, reaction, timecode);

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
            displayTags.innerHTML = YTReact,
            displayDesc.innerHTML = YTDesc
        )
}