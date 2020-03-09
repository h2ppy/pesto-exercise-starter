function compareFunctionForAnimals(animal1, animal2) {
  if (animal1.numberOfLegs !== animal2.numberOfLegs) {
    return animal1.numberOfLegs - animal2.numberOfLegs;
  } return animal1.name.localeCompare(animal2.name);
}
const animalSort = animals => {
  animals.sort(compareFunctionForAnimals);
  console.log(animals);
  return animals;
};

export { animalSort };
