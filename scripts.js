let dolphinsFirstScoreGameOne = 96;
let dolphinsSecondScoreGameOne = 108;
let dolphinsThirdScoreGameOne = 89;

let dolphinsAverangeFirst = (dolphinsFirstScoreGameOne + dolphinsSecondScoreGameOne + dolphinsThirdScoreGameOne)/3;

let koalasFirstScoreGameOne = 88;
let koalasSecondScoreGameOne = 91;
let koalasThirdScoreGameOne = 110;

let koalasAverangeFirst = (koalasFirstScoreGameOne + koalasSecondScoreGameOne + koalasThirdScoreGameOne)/3;

let dolphinsFirstScoreGameTwo = 97;
let dolphinsSecondScoreGameTwo = 112;
let dolphinsThirdScoreGameTwo = 101;

let dolphinsAverangeTwo = (dolphinsFirstScoreGameTwo + dolphinsSecondScoreGameTwo + dolphinsThirdScoreGameTwo)/3;

let koalasFirstScoreGameTwo = 109;
let koalasSecondScoreGameTwo = 95;
let koalasThirdScoreGameTwo = 123;

let koalasAverangeTwo = (koalasFirstScoreGameTwo + koalasSecondScoreGameTwo + koalasThirdScoreGameTwo)/3;

let dolphinsFirstScoreGameThre = 97;
let dolphinsSecondScoreGameThre = 112;
let dolphinsThirdScoreGameThre = 101;

let dolphinsAverangeThre = (dolphinsFirstScoreGameThre + dolphinsSecondScoreGameThre + dolphinsThirdScoreGameThre)/3;

let koalasFirstScoreGameThre = 109;
let koalasSecondScoreGameThre = 95;
let koalasThirdScoreGameThre = 106;

let koalasAverangeThre = (koalasFirstScoreGameThre + koalasSecondScoreGameThre + koalasThirdScoreGameThre)/3;


if (dolphinsAverangeFirst > koalasAverangeFirst && dolphinsAverangeFirst > 100)
{
  if (dolphinsAverangeTwo > koalasAverangeTwo && dolphinsAverangeTwo > 100)
  {
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Dolphins Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
}
  else if (dolphinsAverangeTwo > koalasAverangeTwo && dolphinsAverangeTwo < 100)
  { 
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
     else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Dolphins Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Split");
    }
}
  else if (dolphinsAverangeTwo < koalasAverangeTwo && koalasAverangeTwo > 100)
  {
    if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Split");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Split");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo < koalasAverangeTwo && koalasAverangeTwo < 100)
  {
    if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Split");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Dolphins Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Split");
    }
}
  else if (dolphinsAverangeTwo === koalasAverangeTwo)
  {
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
         else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Dolphins Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Split");
    }
}
}
if (dolphinsAverangeFirst > koalasAverangeFirst && dolphinsAverangeFirst < 100)
{
  if (dolphinsAverangeTwo > koalasAverangeTwo && dolphinsAverangeTwo > 100)
  {
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Dolphins Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Split");
    }
}
  else if (dolphinsAverangeTwo > koalasAverangeTwo && dolphinsAverangeTwo < 100)
  {   
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
     else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Split");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo < koalasAverangeTwo && koalasAverangeTwo > 100)
  {
    if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Koalas Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo < koalasAverangeTwo && koalasAverangeTwo < 100)
  {   
    if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }

    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Split");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo === koalasAverangeTwo)
  {
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
         else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Split");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
}
if (dolphinsAverangeFirst === koalasAverangeFirst)
{
  if (dolphinsAverangeTwo > koalasAverangeTwo && dolphinsAverangeTwo > 100)
  {
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Dolphins Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Split");
    }
}
  else if (dolphinsAverangeTwo > koalasAverangeTwo && dolphinsAverangeTwo < 100)
  {   
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
     else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Split");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo < koalasAverangeTwo && koalasAverangeTwo > 100)
  {
    if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Koalas Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo < koalasAverangeTwo && koalasAverangeTwo < 100)
  {
    if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Split");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo === koalasAverangeTwo)
  {
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
         else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Split");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
}
if (dolphinsAverangeFirst < koalasAverangeFirst && koalasAverangeFirst < 100)
{
  if (dolphinsAverangeTwo > koalasAverangeTwo && dolphinsAverangeTwo > 100)
  {
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Dolphins Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Dolphins Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Split");
    }
}
  else if (dolphinsAverangeTwo > koalasAverangeTwo && dolphinsAverangeTwo < 100)
{  
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
     else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Split");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo < koalasAverangeTwo && koalasAverangeTwo > 100)
  {
    if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Koalas Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo < koalasAverangeTwo && koalasAverangeTwo < 100)
  {   
    if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Split");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo === koalasAverangeTwo)
  {
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
         else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Split");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
}
if (dolphinsAverangeFirst < koalasAverangeFirst && koalasAverangeFirst > 100)
{
  if (dolphinsAverangeTwo > koalasAverangeTwo && dolphinsAverangeTwo > 100)
{
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Dolphins Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Split");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Split");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo > koalasAverangeTwo && dolphinsAverangeTwo < 100)
  {   
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Split");
    }
     else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Koalas Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo < koalasAverangeTwo && koalasAverangeTwo > 100)
  {

    if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Koalas Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo < koalasAverangeTwo && koalasAverangeTwo < 100)
  {   
    if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
      else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Koalas Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
  else if (dolphinsAverangeTwo === koalasAverangeTwo)
  {
    if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre > koalasAverangeThre && dolphinsAverangeThre > 100)
     {
      console.log("Split");
    }
         else if (dolphinsAverangeThre === koalasAverangeThre)
     {
      console.log("Koalas Win the Championship");
    }
     else  if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre < 100)
     {
      console.log("Koalas Win the Championship");
    }
    else if (dolphinsAverangeThre < koalasAverangeThre && koalasAverangeThre > 100)
     {
      console.log("Koalas Win the Championship");
    }
}
}



