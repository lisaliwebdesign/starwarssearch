import { observable, action } from "mobx";
import axios from "axios";

class CharacterStore {
  //@observable time = new Date().toISOString();
  @observable character = null;
  @observable loadCharacterError = false;

//  @action
//  tick = () => {
//    this.time = new Date().toISOString();
//  };

  @action
  loadCharacter = async char => {
    try {
          let filePath = "https://swapi.co/api/people/?search="+char;
      const response = await axios.get(
        filePath
      );
      this.character = response.data.results[0];
    } catch (error) {
      this.loadCharacterError = true;
    }
  };
}

export default new CharacterStore();
