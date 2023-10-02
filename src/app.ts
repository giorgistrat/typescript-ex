class Department {
  protected employees: string[] = []; // Protected is available in this class and also for the classes that extends Department.
  // But Private doesn't

  constructor(private readonly id: string, private name: string) {
    // this.name = name;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): (${this.name})`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  reports: string[];
  constructor(id: string, reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

// IT
const it = new ITDepartment('d1', ['Max']);
it.describe();

it.addEmployee('Max');
it.addEmployee('Manu');

it.printEmployeeInformation();

// ACCOUNTING
const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong...');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployeeInformation();
