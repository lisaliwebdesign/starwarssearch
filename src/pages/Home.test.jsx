import Home from "./Home";

it("<pages><Home> - renders component", () => {
  const wrapper = render(<Home />);
  expect(wrapper).toMatchSnapshot();
});

it("<pages><Home> - render loading ", () => {
  const wrapper = mount(<Home />);
  const text = wrapper
    .find("label")
    .first()
    .text();
  expect(text).toEqual("Loading");
});

it("<pages><Home> - render error ", () => {
  const wrapper = mount(<Home />);
  wrapper.setState({ status: "error" });
  const text = wrapper
    .find("label")
    .first()
    .text();
  expect(text).toEqual("Oops... error in getting data!");
});

it("<pages><Home> - render with data ", () => {
  const wrapper = mount(<Home />);
  wrapper.setState({ People: ["test1", "test2"], status: "done" });
  const text = wrapper
    .find("label")
    .first()
    .text();
  expect(text).toEqual("Search for Character");
});
