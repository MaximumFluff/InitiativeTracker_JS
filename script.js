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
    let printString = "";
    let tr, td;
    list.innerHTML = "<tr><th>Name</th><th>AC</th><th>HP</th><th>Initiative</th><th>Action</th></tr>";
    for (let i = 0; i < playerArray.length; i++)
    {
        tr = document.createElement("tr");
        list.appendChild(tr);
        tr.appendChild(td = document.createElement("td"));
        td.innerHTML = playerArray[i].name;
        tr.appendChild(td = document.createElement("td"));
        td.innerHTML = playerArray[i].ac;
        tr.appendChild(td = document.createElement("td"));
        td.setAttribute = playerArray[i].hp;
        tr.appendChild(td = document.createElement("td"));
        td.setAttribute = playerArray[i].initiative;
        tr.appendChild(td = document.createElement("td"));
        let button = document.createElement("button");
        let text = document.createTextNode("Delete");
        button.id = "delete" + i;
        button.appendChild(text);
        td.appendChild(button);
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