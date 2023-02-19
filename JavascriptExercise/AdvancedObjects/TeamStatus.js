const team = {
    _players: [
      {firstName: 'Ben', lastName: 'Stone', age: 24},
      {firstName: 'Ken', lastName: 'Abe', age: 40},
      {firstName: 'Bob', lastName: 'Baur', age: 32}      
      ],
  
    _games: [
      {opponent: 'Redblue', teamPoints: 3, opponentPoints: 1},
      {opponent: 'ColleMac', teamPoints: 1, opponentPoints: 1}, 
      {opponent: 'YellowBeans', teamPoints: 10, opponentPoints: 12}
    ],
  
    get players(){
      return this._players;
      },
  
    get games(){
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
  
      this.players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
  
    this.games.push(game);
  }
  
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  
  console.log(team.games);
  
  