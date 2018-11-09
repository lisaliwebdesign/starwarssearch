import { observable, action } from "mobx";
import axios from "axios";

class PageStore {
  @observable
  pageData = null;
  @observable
  loadDataError = false;
  @observable
  pageName = "";

  @action
  loadData = async (isSearch, path, char) => {
    try {
      let filePath = isSearch
        ? "https://swapi.co/api/people/?search=" + char
        : "https://swapi.co/api" + path;
      const response = await axios.get(filePath);
      this.pageData = isSearch ? response.data.results[0] : response.data;
      let pName = path.split("/");
      this.pageName = pName[1] + ":";
    } catch (error) {
      this.loadDataError = true;
    }
  };
  @action
  loadDefaultData = async () => {
    const response = await axios.get("https://swapi.co/api/people/");
    const data = response.data.results;
    const People = [];
    data.map((item, index) => People.push(item));
    return People;
  };
}

export default new PageStore();
