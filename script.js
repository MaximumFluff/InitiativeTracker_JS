let playerArray = [];

addCreature = () =>
{
    console.log("I am doing a thing!");
    const name = document.getElementById("name").value;
    const ac = document.getElementById("ac").value;
    const hp = document.getElementById("hp").value;
    const init = document.getElementById("initiative").value;

    const newPlayer = new Player(name, ac, hp, init);
    playerArray.push(newPlayer);
    console.log(playerArray);
    print();
}

print = () =>
{
    playerArray.sort((a, b) =>
    {
        return b.initiative - a.initiative;
    })
    let tr; 
    let td;
    list.innerHTML = "<tr><th>Name</th><th>AC</th><th>HP</th><th>Initiative</th><th>Action</th></tr>";
    for (let i = 0; i < playerArray.length; i++)
    {
        let table = document.getElementById("list");
        let row = table.insertRow(i + 1);
        let cell1, cell2, cell3, cell4, cell5;
        let button = document.createElement("button");
        let text = document.createTextNode("Delete");
        button.id = "delete" + i;
        button.appendChild(text);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);
        cell1.innerHTML = playerArray[i].name;
        cell2.innerHTML = playerArray[i].ac;
        cell3.innerHTML = playerArray[i].hp;
        cell4.innerHTML = playerArray[i].initiative;
        cell5.appendChild(button);
    }

    playerArray.forEach(function(player, i)
    {
        document.querySelector("#delete" + i).addEventListener("click", function() {
            playerArray.splice(i, 1);
            print();
        })
    })
    console.log(printString);
}