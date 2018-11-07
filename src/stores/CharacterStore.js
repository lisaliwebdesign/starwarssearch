import { observable, action } from "mobx";
import axios from "axios";

class CharacterStore {
  //@observable time = new Date().toISOString();
  @observable character = null;
  @observable people = null;
  @observable loadCharacterError = false;

//  @action
//  tick = () => {
//    this.time = new Date().toISOString();
//  };

  @action
  loadCharacter = async number => {
    try {
      const response = await axios.get(
        "https://swapi.co/api/people/?search=",
        {
          params: { number }
        }
      );

      this.character = response.data;
    } catch (error) {
      this.loadCharacterError = true;
    }
  };
}

export default new CharacterStore();
