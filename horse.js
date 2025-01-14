

// Each animation need three functions constructor, update and draw
class Horse {
    constructor(game){
        this.animator = new Animator(ASSET_MANAGER.getAsset("./horseframes.png"), 0, 0, 400, 244, 5, 0.06);
        this.game = game;

        // x coordination so she can change
        this.x = 250;
        this.y = 250;
        // her speed
        this.speed = 200;
    };

    // update 
    update(){
        this.x += this.speed * this.game.clockTick;
        // if the x coordination get bigger than the width so we will assign x codination zero so it starts over from begining
        if(this.x > 1024) this.x = 0;
    };
    // draw, draw's the the whole image on canva and it takes cntx (context) as an argument
    draw(ctx){
        //ctx.drawImage(ASSET_MANAGER.getAsset("./12frames.png"), 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}