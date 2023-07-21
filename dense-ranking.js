import inquirer from "inquirer";

const leaderboard = [];

const denseRanking = (scores = []) => {
  const sortedScores = scores.sort((a, b) => b - a);

  let rank = 1;
  let prevScore = sortedScores[0];
  const ranks = [];

  for (let i = 0; i < sortedScores.length; i++) {
    const element = scores[i];
    if (i > 0 && prevScore !== element) {
      rank++;
    }

    ranks.push({
      value: element,
      rank,
    });

    prevScore = element;
  }

  return ranks;
};

const setLeaderboard = (scores = []) => {
  leaderboard.push(...scores);
  return leaderboard;
};

const getRankFromLeaderboard = (scores = []) => {
  if (leaderboard.length === 0) {
    setLeaderboard(scores);
    return denseRanking(scores).map((r) => r.rank);
  }

  let currentDenseRanking = denseRanking(leaderboard);
  let ranks = [];
  for (let i = 0; i < scores.length; i++) {
    const element = scores[i];
    const isScoreRanked = currentDenseRanking.find((r) => r.value === element);

    if (!isScoreRanked) {
      currentDenseRanking = denseRanking([...leaderboard, element]);
      ranks.push(currentDenseRanking.find((r) => r.value === element).rank);
    } else {
      ranks.push(isScoreRanked.rank);
    }
  }

  return ranks;
};

const main = async () => {
  let isQuit = false;

  while (!isQuit) {
    // 1. Get count of players
    const { countOfPlayer } = await inquirer.prompt([
      {
        type: "input",
        name: "countOfPlayer",
        message: "Count of players: ",
        validate: (value) => {
          const valid = !isNaN(parseFloat(value));
          return valid || "Please enter a number";
        },
      },
    ]);
  
    // 2. Get scores of players
    let { scores } = await inquirer.prompt([
      {
        type: "input",
        name: "scores",
        message: "Scores of players (separated by space): ",
        validate: (value) => {
          const values = value.split(" ");
          const valid = values.length === parseInt(countOfPlayer, 10);
          return valid || "Please enter a valid scores";
        },
      },
    ]);
    scores = scores.split(" ").map((score) => parseInt(score, 10));
  
    // 3. Get rank of players
    const ranks = getRankFromLeaderboard(scores);
    setLeaderboard(scores);
    
    console.log("Rank of players: ", ranks.join(" "));

    isQuit = (await inquirer.prompt([
      {
        type: "confirm",
        name: "isQuit",
        message: "Do you want to quit? ",
      },
    ])).isQuit;
  }
};

main();
