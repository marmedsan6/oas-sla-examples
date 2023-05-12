export function getJobss(_, res) {
    res.send([{
        province: "Sevilla",
        year: 2022
    }]);
}

export function addTeam(_, res) {
    res.status(201).send()
}

export function findByprovince(_, res) {
    res.send([{
        province: "Sevilla",
        year: 2022
    }]);
}

export function updateTeam(_, res) {
    res.status(204).send()
}

export function deleteTeam(_, res) {
    res.status(204).send()
}

