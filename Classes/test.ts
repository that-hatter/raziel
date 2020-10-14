abstract class Department {
  abstract printMeeting(): void;

  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  // must be implemented in derived classes
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}
