class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 150;

    }
    else if (this.index === 2) {
      this.positionX = width / 2 + 150;
    }


    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY


    });

  }


  
  getDistance(){
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", (data)=>{
      var data = data.val();
     this.positionX = data.positionX;
     this.positionY = data.positionY;
    });
   
     }

  getCount() {

    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    });
  }


  updateCount(count) {
    firebase.database().ref("/").update({
      playerCount: count
    });
  }


}

