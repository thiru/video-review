videoEl = null;

function getVideoQueryParam()
{
  let params = new URLSearchParams(document.location.search);
  return params.get("video");
}

function getVideoLinkText()
{
  return document.getElementById("urlInput").value;
}
function setVideoLinkText(newVal)
{
  document.getElementById("urlInput").value = newVal;
}

function loadVideo()
{
  let videoUrlText = getVideoLinkText();

  videoEl.src = videoUrlText;
}

function togglePlayPause()
{
  if (videoEl.paused)
    videoEl.play();
  else
    videoEl.pause();
}

function getJumpSeconds()
{
  return Number.parseFloat(document.getElementById("jumpSecondsInput").value);
}

function jumpBackwards()
{
  videoEl.currentTime -= getJumpSeconds();
}

function jumpForwards()
{
  videoEl.currentTime += getJumpSeconds();
}

function getSpeed()
{
  return Number.parseFloat(document.getElementById("speedInput").value);
}

function onVideoKeyDown(e)
{
  switch (e.key)
  {
    case "Tab":
      e.preventDefault();
      togglePlayPause();
      break;

    case "ArrowLeft":
      e.preventDefault();
      jumpBackwards();
      break;

    case "ArrowRight":
      e.preventDefault();
      jumpForwards();
      break;
  }
}

function onSpeedChange()
{
  let speed = getSpeed();
  videoEl.playbackRate = speed;
  console.log("Video speed changed to: " + speed);
}

window.addEventListener('DOMContentLoaded', (event) => {
  videoEl = document.getElementsByTagName("video")[0];

  let videoUrlParam = getVideoQueryParam();

  if (videoUrlParam && videoUrlParam.length > 0) {
    setVideoLinkText(videoUrlParam);
    loadVideo();
  }
});
