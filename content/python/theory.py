class Musician:
    def __init__(self, name, instrument, band):
        self.name = name
        self.instrument = instrument
        self.band = band

    def __str__(self):
        return f"{self.name} -> {self.instrument}"

    def presentation(self):
        return ("Hello my name is " + self.name + "and I play " + self.instrument + "in " + self.band)


class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)


class Student(Person):
    pass


class Worker(Person):
    def __init__(self, fname, lname, occupation):
        # Person.__init__(self, fname, lname)
        super().__init__(fname, lname)
        self.occupation = occupation

    def welcome(self):
        print("Welcome", self.firstname, self.lastname,
              "mr. ", self.occupation)


# class Student2(Person):
#     def __init__(self, fname, lname, year):
#         super().__init__(fname, lname)
#         self.graduationyear = year


# h = Student2("John", "Wood", 2019)
# print(h.graduationyear)

x = Student("Mike", "Olsen")
print("Method from parent class")
x.printname()

a = Worker("Jake", "Ghil", "plumber")
a.welcome()
