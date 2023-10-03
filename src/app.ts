abstract class Department {
  // Now we cannot instantiate Department class because of this abstract keyword that typeScript provides it just for subclasses to get blueprint of parent class
  static fiscalYear: number = 2020;
  protected employees: string[] = []; // Protected is available in this class and also for the classes that extends Department.
  // But Private doesn't

  constructor(protected readonly id: string, private name: string) {
    // this.name = name;
    // this.id = id;
    // console.log(this.fiscalYear); // I cant because fiscalYear doesn't exist on type Department. Department.fiscalYear is valid!
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  reports: string[];

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  private constructor(id: string, reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }

    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }
}

// DEPARTMENT

const employee1 = Department.createEmployee('Max');

// IT
const it = new ITDepartment('d1', ['Max']);
it.describe();

it.addEmployee('Max');
it.addEmployee('Manu');

it.printEmployeeInformation();

// ACCOUNTING
const accounting = AccountingDepartment.getInstance();
