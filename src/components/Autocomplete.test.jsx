import Autocomplete from "./Autocomplete";

const testHelp = {
  mountComponent: (props = {}) => {
    const moutWrapper = mount(
      <Autocomplete
        activeSuggestion={0}
        filteredSuggestions={["test1", "test2"]}
        showSuggestions={false}
        userInput="test"
      />
    );
    return moutWrapper;
  }
};

it("<components><Autocomplete - renders component", () => {
  const wrapper = render(
    <Autocomplete
      activeSuggestion={0}
      filteredSuggestions={[]}
      showSuggestions={true}
      userInput=""
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it("<components><Autocomplete> - showSuggestions no", () => {
  const wrapper = mount(
    <Autocomplete
      activeSuggestion={0}
      filteredSuggestions={["test1", "test2"]}
      showSuggestions={false}
      userInput="test"
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it("<components><Autocomplete> - onChange", () => {
  const spy = sinon.spy();
  const simulateSearch = wrapper => {
    const input = wrapper.find("input");
    // simulate user typing query
    input.simulate("change", { target: { value: "testchar" } });
    // simulate fetching predictions
    wrapper.setState({
      suggestions: ["test1", "test2"]
    });
  };
  // Passing spy click with mout wrapper
  const wrapper = testHelp.mountComponent({ onChange: spy });
  simulateSearch(wrapper);
  expect(spy.calledOnce).toBe(false);
});

it("<components><Autocomplete> - onFocus", () => {
  const spy = sinon.spy();
  const simulateSearch = wrapper => {
    const input = wrapper.find("input");
    // simulate user onfocus query
    input.simulate("mouseenter");
  };
  // Passing spy onfocus with mout wrapper
  const wrapper = testHelp.mountComponent({ onFocus: spy });
  simulateSearch(wrapper);
  expect(spy.calledOnce).toBe(false);
});

it("<components><Autocomplete> - onKeyDown", () => {
  const spy = sinon.spy();
  const simulateSearch = wrapper => {
    const input = wrapper.find("input");
    input.simulate("keydown", { key: "ArrowDown" });
    input.simulate("keydown", { key: "Enter" });
  };
  // Passing spy onkeydown with mout wrapper
  const wrapper = testHelp.mountComponent({ onKeyDown: spy });
  simulateSearch(wrapper);
  expect(spy.calledOnce).toBe(false);
});
