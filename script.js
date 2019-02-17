import Player from './player';

let playerArray = [];
let counter = 1;

document.getElementById('submit').addEventListener('click', addCreature);
document.getElementById('next').addEventListener('click', next);

function addCreature() {
  const name = document.getElementById('name').value;
  const ac = document.getElementById('ac').value;
  const hp = document.getElementById('hp').value;
  const init = document.getElementById('initiative').value;
  const newPlayer = new Player(name, ac, hp, init);
  playerArray.push(newPlayer);
  console.log(playerArray);
  print();
}

function print() {
  playerArray.sort((a, b) => {
    return b.initiative - a.initiative;
  });
  list.innerHTML =
    '<tr><th>Name</th><th>AC</th><th>HP</th><th>Initiative</th><th>Action</th></tr>';
  for (let i = 0; i < playerArray.length; i++) {
    let table = document.getElementById('list');
    let row = table.insertRow(i + 1);
    let cell1, cell2, cell3, cell4, cell5;
    let button = document.createElement('button');
    let hpTextField = document.createElement('input');
    hpTextField.id = `input${i}`;
    hpTextField.setAttribute('style', 'width: 25px; text-align: center;');
    let text = document.createTextNode('Delete');
    button.id = 'delete' + i;
    button.appendChild(text);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);
    cell1.innerHTML = playerArray[i].name;
    cell2.innerHTML = playerArray[i].ac;
    cell4.innerHTML = playerArray[i].initiative;
    cell3.appendChild(hpTextField).value = playerArray[i].hp;
    cell5.appendChild(button);
  }

  playerArray.forEach(function(player, i) {
    document.querySelector('#delete' + i).addEventListener('click', () => {
      playerArray.splice(i, 1);
      print();
    });
  });
  document
    .getElementById('list')
    .rows[counter].setAttribute('style', 'background-color: #97b0d8');
}

function next() {
  counter++;
  if (counter > playerArray.length) {
    counter = 1;
  }
  let table = document.getElementById('list').rows;
  if (counter == 1) {
    table[playerArray.length].removeAttribute(
      'style',
      'background-color: #97b0d8'
    );
  }
  table[counter].setAttribute('style', 'background-color: #97b0d8');
  table[counter - 1].removeAttribute('style', 'background-color: #97b0d8');
}
