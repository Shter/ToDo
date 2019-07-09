export class DataService {
  private dataFromStorage: object[] = JSON.parse(localStorage.getItem("myToDo"));
  getData(): object[] {
    return this.dataFromStorage;
  }
  updateData(obj: object) {
    localStorage.setItem("myToDo", JSON.stringify(obj));
  }
}
