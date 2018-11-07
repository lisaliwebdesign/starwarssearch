import React from "react";
import axios from "axios";
import { inject, observer } from "mobx-react";
import { Motion, spring } from "react-motion";
import Nav from "../components/Nav";
import {
  PeopleContainer // div to wrap page content
 
} from "../elements/people";

@inject( "CharacterStore")
@observer
export default class People extends React.Component {
   componentDidMount() {
    this.props.CharacterStore.loadCharacter(this.props.match.params.people);


  }

    render() {
        const CharacterStore = this.props.CharacterStore;
        if (CharacterStore.loadCharacterError) {
            return <PeopleContainer>Sorry... very embarassing</PeopleContainer>;
        }
        if (!CharacterStore.character) {
            return <PeopleContainer>Loading...</PeopleContainer>;
        }
         return (
                 <PeopleContainer>
                    <Nav name={CharacterStore.character.name} />
                            <div>{CharacterStore.character.name}</div>
                             <div>Height: {CharacterStore.character.height}</div>
                             <div>Hair colour:{CharacterStore.character.hair_color}</div>
                             <div>Skin colour:{CharacterStore.character.skin_color}</div>
   

                 </PeopleContainer>
                 
             )

    }
}
