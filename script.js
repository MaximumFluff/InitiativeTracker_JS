class Player
{
    constructor(name, ac, hp, init)
    {
        this.name = name;
        this.ac = ac;
        this.hp = hp;
        this.initiative = init;
    }
}

addCreature = () =>
{
    console.log("I am doing a thing!");
    let name = document.getElementById("name").value;
    let ac = document.getElementById("ac").value;
    let hp = document.getElementById("hp").value;
    let init = document.getElementById("initiative").value;

    let newPlayer = new Player(name, ac, hp, init);
    printCreature(newPlayer);
}

printCreature = (creature) =>
{
    let printString = "";
    printString += "<tr><td>" + creature.name + "</td>" + "<td>" + creature.ac + "</td>" + "<td>" + creature.hp + "</td>" + "<td>" + creature.initiative + "</td></tr>";
    document.getElementById("list").innerHTML += printString;
    console.log(printString);
}