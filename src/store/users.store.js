import { observable, computed, action } from "mobx";
import uuid from "uuid"

export default class UsersStore {
    @observable users = [];
    @observable filter = "";

    @action
    addUser(data) {
      this.users.push({
        name: data.name,
        companyName: data.companyName,
        phone: data.phone,
        id: uuid.v4()
      });
    }

    @action
    deleteUser(id) {
      this.users = this.users.filter((user) => user.id.toString() !== id);
    }

    @computed
    get findUser() {
      const matchesFilter = new RegExp(this.filter, "i")
      return this.users.filter(user => !this.filter || matchesFilter.test(user.name) ||  matchesFilter.test(user.companyName) ||  matchesFilter.test(user.phone)) || [];
  }
}