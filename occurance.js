function countA(str) {

    const stringWithoutAccentuation = str.normalize('NFD').toLowerCase();
    const charArray = stringWithoutAccentuation.split('');

    const count = charArray.filter(char => char === 'a').length;

    if (count > 0) {
      console.log(`A letra 'a' ocorre ${count} vez(es) na string.`);
    } else {
      console.log("A letra 'a' não foi encontrada na string.");
    }
}
  const string = "Amanhã irei a feira";
  countA(string);
