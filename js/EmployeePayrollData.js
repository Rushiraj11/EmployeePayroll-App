class EmployeePayrollData {
    id;

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else
            throw "Name is Incorrect";
    }
    get profilePic() {
        return this._profilePic;
    }

    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {

        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {

        this._salary = salary;

    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        let currentDate = new Date();
        if (startDate > currentDate) {
            throw "Start date is a future date"
        }
        let difference = Math.abs(currentDate.getTime() - startDate.getTime());
        let date = difference / (1000 * 60 * 60 * 24);
        if (date > 30) {
            throw "Start date is beyond 30 days";
        }
        this._startDate = startDate;
    }

    get notes() {
        return this._notes;
    }

    set notes(notes) {
        this._notes = notes;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const employeeDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-us", options);
        return "Name = " + this.name + ", Profile Image = " + this.profilePic + ", Gender = " + this.gender + ", Department = " + this.department + ", Salary = " + this.salary + ", Start Date = " + employeeDate + ", Notes = " + this.notes;
    }
}