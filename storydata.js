// data

const s007 = {
    body: `You collect the gold. There is blue door and a black door. Choose one to open.`, 
    opt1: {body: "Blue door.", ptr: "s005"},
    opt2: {body: "Black door.", ptr: "s006"},
    opt3: {body: "Neither.", ptr: undefined}
}

const s006 = {
    body: `There is a red door and a green door. Choose one to open.`, 
    opt1: {body: "Blue door.", ptr: undefined},
    opt2: {body: "Black door.", ptr: undefined},
    opt3: {body: "Grab the gold florins.", ptr: undefined}
}

const s005 = {
    body: `There is a red door and a green door. Choose one to open.`, 
    opt1: {body: "Blue door.", ptr: undefined},
    opt2: {body: "Black door.", ptr: undefined},
    opt3: {body: "Grab the gold florins.", ptr: undefined}
}

const s004 = {
    body: `There is a red door and a green door. Choose one to open.`, 
    opt1: {body: "Blue door.", ptr: undefined},
    opt2: {body: "Black door.", ptr: undefined},
    opt3: {body: "Grab the gold florins.", ptr: undefined}
}

const s003 = {
    body: `You chose the green door. Behind it, you find a white door, a yellow door, 
    and a blocked passageway. Above the blocked passageway is a bag of pearls.`, 
    opt1: {body: "White door.", ptr: undefined},
    opt2: {body: "Yellow door.", ptr: undefined},
    opt3: {body: "Grab the pearls", ptr: undefined}
}

const s002 = {
    body: `You chose the red door. Behind it, you find a blue door, a black door, 
    and a blocked passageway. Above the blocked passageway is a pouch of gold florins.`, 
    opt1: {body: "Blue door.", ptr: s005},
    opt2: {body: "Black door.", ptr: s006},
    opt3: {body: "Grab the gold florins.", ptr: s007}
}

const s001 = {
    body: `There is a red door and a green door. Choose one to open.`, 
    opt1: {body: "Red door.", ptr: s002},
    opt2: {body: "Green door.", ptr: s003},
    opt3: {body: "Neither.", ptr: undefined}
}

const s000 = {
    body: `Default screen.`, 
    opt1: {body: "Default opt1.", ptr: undefined},
    opt2: {body: "Default opt2.", ptr: undefined},
    opt3: {body: "Default opt3.", ptr: undefined}
}

