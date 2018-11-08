import { observable, action } from "mobx";
import axios from "axios";

class PageStore {
  @observable pageData = null;
  @observable loadDataError = false;

  @action
    loadData = async(isSearch,path,char)  => {
        try {
           // let filePath = "https://swapi.co/api" + path;
            let filePath = isSearch?"https://swapi.co/api/people/?search="+char : "https://swapi.co/api"+path;
            const response = await axios.get(
                    filePath
                    );
            this.pageData = isSearch? response.data.results[0]:response.data;
              //this.pageData = response.data;
        } catch (error) {
            this.loadDataError = true;
        }
    }
 
}

export default new PageStore();
