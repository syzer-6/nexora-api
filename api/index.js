export default function handler(req, res) {
  const token = req.headers['x-api-token'];
  
  if (token !== process.env.API_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.status(200).json({
    server_host: process.env.SERVER_HOST,
    server_port: process.env.SERVER_PORT,
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
