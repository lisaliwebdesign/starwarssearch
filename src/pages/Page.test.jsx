import Page from "./Page";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

it("<pages><Page> - renders component", () => {
  const wrapper = render(<Page PageStore={{}} />);
  expect(wrapper).toMatchSnapshot();
});

it("<pages><Page> - renders loading", () => {
  const wrapper = render(<Page PageStore={{}} />);
  //console.log(wrapper.html());
  expect(wrapper.html()).toEqual("Loading...");
});

it("<pages><Page> - renders error", () => {
  const wrapper = render(<Page PageStore={{ loadDataError: true }} />);
  expect(wrapper.html()).toEqual("Sorry... very embarassing");
});

it("<pages><Page> - renders with data", () => {
  //Mock router
  const mockRouter = {
    childContextTypes: {
      router: () => void 0
    },
    context: {
      router: {
        history: "test",
        route: {
          location: {
            hash: "",
            pathname: "",
            search: "",
            state: ""
          },
          match: { params: {}, isExact: false, path: "", url: "" }
        }
      }
    }
  };
  // mount component with router context and get component's instance
  const wrapper = shallow(
    <Page
      Nav={<div>testnav</div>}
      PageStore={{
        pageName: "testpagename",
        pageData: { name: "testpagename" }
      }}
    />,
    mockRouter
  );
  // console.log(wrapper.props(), wrapper.state());
  expect(wrapper).toMatchSnapshot();
});
