// Membuat Class
class bio {
  constructor(name, hobby) {
    this.name = name;
    this.hobby = hobby;
  }

  message() {
    return `Hello guys, nama saya ${this.name} dan memiliki hobi ${this.hobby}.`;
  }
}

const user = new bio("Rantisi", "ngoding");
console.log(user.message()); // Output: Hello guys, nama saya Rantisi dan memiliki hobi ngoding.

// Inheritance
class Student extends bio {
  constructor(name, hobby, mataPelajaran) {
    super(name, hobby);
    this.mataPelajaran = mataPelajaran;
  }

  study() {
    return `Saya belajar ${this.mataPelajaran}.`;
  }
}

const ran= new Student("Rantisi", "ngoding", "React JS");
console.log(ran.message()); // Output: Hello guys, nama saya Rantisi dan memiliki hobi ngoding.
console.log(ran.study());   // Output: Saya belajar React JS.