import Nav from "./Nav";

it("<components><Nav> - renders component", () => {
  const wrapper = shallow(<Nav name="test" />);
  expect(wrapper).toMatchSnapshot();
});
