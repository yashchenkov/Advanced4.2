export default function sortFunc (arr){
  return arr.sort((a, b) => return b.health - a.health);
}
