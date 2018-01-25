addCreature = () =>
{
    let name = document.getElementById("name").value;
    let ac = document.getElementById("ac").value;
    let hp = document.getElementById("hp").value;
    let init = document.getElementById("initiative").value;

    let newPlayer = new Player(name, ac, hp, init);
    printCreature(newPlayer);
}

printCreature = (creature) =>
{
    const printString = "<tr><td>" + creature.name + "</td>" + "<td>" + creature.ac + "</td>" + "<td>" + creature.hp + "</td><td>" + creature.initiative + "</td></tr>";
    document.getElementById("list").innerHTML += printString;
}