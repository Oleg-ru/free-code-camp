const footballTeam = {
  team: 'СССР',
  year: 1988,
  headCoach: 'Валерий Лобановский',
  players: [
    {
      name: 'Ринат Дасаев',
      position: 'goalkeeper',
      isCaptain: false,
    },
    {
      name: 'Александр Чивадзе',
      position: 'defender',
      isCaptain: false,
    },
    {
      name: 'Анатолий Демьяненко',
      position: 'defender',
      isCaptain: true,
    },
    {
      name: 'Олег Кузнецов',
      position: 'defender',
      isCaptain: false,
    },
    {
      name: 'Александр Заваров',
      position: 'midfielder',
      isCaptain: false,
    },
    {
      name: 'Сергей Алейников',
      position: 'midfielder',
      isCaptain: false,
    },
    {
      name: 'Василий Рац',
      position: 'midfielder',
      isCaptain: false,
    },
    {
      name: 'Владимир Бессонов',
      position: 'midfielder',
      isCaptain: false,
    },
    {
      name: 'Павел Яковенко',
      position: 'midfielder',
      isCaptain: false,
    },
    {
      name: 'Сергей Родионов',
      position: 'forward',
      isCaptain: false,
    },
    {
      name: 'Игорь Беланов',
      position: 'forward',
      isCaptain: false,
    },
  ],
};
const team = document.getElementById('team');
const year = document.getElementById('year');
const headCoach = document.getElementById('head-coach');
const playerCards = document.getElementById('player-cards');
const select = document.getElementById('players');

function initFootballTeam() {
  function setInnerText(element, text) {
    element.innerText = text;
  }
  setInnerText(team, footballTeam.team);
  setInnerText(year, footballTeam.year);
  setInnerText(headCoach, footballTeam.headCoach);

  playerCards.innerHTML = filterTeam('all');
  select.addEventListener(
    'change',
    (event) => (playerCards.innerHTML = filterTeam(event.target.value))
  );
}

function filterTeam(typePlayer) {
  const filteredTeam = [];
  if (typePlayer === 'all') {
    filteredTeam.push(...footballTeam.players);
  } else {
    filteredTeam.push(
      ...footballTeam.players.filter((player) => {
        return player.position === typePlayer;
      })
    );
  }

  return filteredTeam.reduce((htmlCode, player) => {
    return (htmlCode += `
        <div class="player-card">
            <h2>${player.isCaptain ? '(Captain) ' : ''}${player.name}</h2>
             <p>Position: ${player.position}</p>
        </div>`);
  }, '');
}
initFootballTeam();
