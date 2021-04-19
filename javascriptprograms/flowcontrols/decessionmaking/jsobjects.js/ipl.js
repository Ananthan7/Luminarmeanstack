var ipl=[
    {team_name:"rcb",mp:2,won:2,los:0,pts:4},
    {team_name:"mi",mp:2,won:1,los:1,pts:2},
    {team_name:"pb",mp:1,won:1,los:0,pts:2},
    {team_name:"dc",mp:2,won:1,los:1,pts:2},
    {team_name:"rr",mp:2,won:1,los:1,pts:2},
    {team_name:"kkr",mp:2,won:1,los:1,pts:1},
    {team_name:"srh",mp:2,won:0,los:2,pts:0},
    {team_name:"csk",mp:1,won:0,los:1,pts:0},

]
// print name only
// for(let team of ipl){
//     console.log(team["team_name"]);
// }

// print rcb data
var flag=0;
for(var rcb of ipl){
    if("rcb" in rcb.team_name){
        console.log("found");
    }
}
// print highest point
