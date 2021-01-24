import * as data from './data'
import { Band, Member, Expected } from './models'
import { Cloneable }  from './clonable'

function genExpected(band: Band): Expected{
    let res = Cloneable.deepCopy(band) as unknown as Expected
    let all_members = Cloneable.deepCopy(band.members.current).concat(band.members.past)
    res.members.all = getAllNames(all_members)
    res.plays = getPlays(all_members)
    return res
}

function getAllNames(allMembers: Array<Member>): Array<string> {
    return allMembers
            .sort(byOrder)
            .map(member => member.name.toLowerCase())
}

function getPlays(allMembers: Array<Member>): Object {
    let plays = {}
    for (let member of allMembers)
        for (let play of member.plays) {
            if (play in plays)
                plays[play].push(member.name.toLowerCase())
            else
                plays[play] = [member.name.toLowerCase()]
        }
    return plays
}

function byOrder(m1: Member, m2: Member): number{
    if (m1.age > m2.age) return -1
    if (m1.age < m2.age) return 1
    if (m1.name > m2.name) return 1
    if (m1.name < m2.name) return -1
    return 0
} 

console.log("----------------")
console.log(genExpected(data.band))
console.log("#################")
console.log(data.expected as Expected)
console.log("----------------")
