export default function handler(req, res) {
  res.status(200).json({
    URL_CLIENT: "",
    URL_GAME_FILES: "",
    URL_GAME_FILES_UPD: "",
    URL_VK: "",
    URL_DISCORD: "",
    URL_YOUTUBE: "",
    URL_FORUM: "",
    URL_DONATE: "",
    clientVersionCode: 1,
    gameFilesVersionCode: 1
  });
}
