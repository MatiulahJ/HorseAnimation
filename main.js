const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();
// First download the image path
ASSET_MANAGER.queueDownload("./background.png");
ASSET_MANAGER.queueDownload("./horseframes.png");
ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	// put sailor moon into the game engine
	// gameEngine.addEntity(new Background());
	gameEngine.addEntity(new Horse(gameEngine));
	gameEngine.init(ctx);
	gameEngine.start();
	
});
