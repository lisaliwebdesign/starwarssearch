import Autocomplete from "./Autocomplete";


it("<Componet><Autocomplete> - renders component", () => {
  const wrapper = shallow(
    <Autocomplete activeSuggestion={0} filteredSuggestions={[]} showSuggestions={true} userInput="" />

   // <Temperature temp={10} city="Toronto" toggleForecast={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();
});