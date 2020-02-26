class Filiere {
  constructor(name, num_students) {
    this.name = name;
    this.num_students = num_students;
  }
  descriptionFiliere() {
    return (
      "le nom de la filiere est : " +
      this.name +
      ", le nombre des etudiants pour cette filiere est : " +
      this.num_students
    );
  }
}
class Ecole {
  constructor(name, num_students, num_prof, filieres) {
    this.name = name;
    this.num_students = num_students;
    this.num_prof = num_prof;
    this.filieres = filieres;
  }

  descriptionEcole() {
    var str = "";
    for (var i = 0; i < this.filieres.length; i++) {
      str += this.filieres[i].descriptionFiliere() + ", <br>";
    }
    return (
      "le nom de l'ecole' est : " +
      this.name +
      ", <br>le nombre des etudiants dans cette ecole est : " +
      this.num_students +
      " <br>le nombre des profs est : " +
      this.num_prof +
      ". <br>les filieres dans cette ecole sont :<br>" +
      //   this.filieres[0].descriptionFiliere() +
      //   ", <br>" +
      //   this.filieres[1].descriptionFiliere()
      str
    );
  }
}
Filiere1 = new Filiere("informatique", 30);
Filiere2 = new Filiere("GTR", 32);
Filiere3 = new Filiere("indus", 35);
// document.getElementById("desc").innerHTML +=
//   Filiere1.descriptionFiliere() + "<br>";
// document.getElementById("desc").innerHTML += Filiere2.descriptionFiliere();
ecole1 = new Ecole("ensa", 400, 20, [Filiere1, Filiere2, Filiere3]);

document.getElementById("desc").innerHTML = ecole1.descriptionEcole();
