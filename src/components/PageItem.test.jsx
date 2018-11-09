import PageItem from "./PageItem";

it("<components><PageItem> - renders component", () => {
  const wrapper = render(<PageItem data={{ test: "str1" }} />);
  expect(wrapper).toMatchSnapshot();
});

it("<components><PageItem> - render data item", () => {
  const wrapper = mount(<PageItem data={{ test: "str1" }} />);
  const text = wrapper
    .find("div")
    .first()
    .text();
  expect(text).toEqual("test");
});

it("<components><PageItem> - onClick", () => {
  const spy = sinon.spy();
  const simulateSearch = wrapper => {
    const input = wrapper.find("div").first();
    input.simulate("click");
  };
  const mountComponent = (props = {}) => {
    const moutWrapper = mount(<PageItem data={{ test: "http://str1" }} />);
    return moutWrapper;
  };
  // Passing spy click with mout wrapper
  const wrapper = mountComponent({ onClick: spy });
  simulateSearch(wrapper);
  expect(spy.calledOnce).toBe(false);
});
