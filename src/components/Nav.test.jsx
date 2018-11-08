import Nav from "./Nav";


it("<Componet><Nav> - renders component", () => {
  const wrapper = shallow(
    <Nav name="test"  />
  );
  expect(wrapper).toMatchSnapshot();
});