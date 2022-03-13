import React from "react";
import { shallow } from "enzyme";
import { Todos } from "./Todos";

describe("Todos component testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Todos debug />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("initially todos should empyt", () => {
    let todosListElmt = wrapper.find(".todos");
    expect(todosListElmt.find("ul").children()).toHaveLength(0);
  });

  it("shoudl render todos", () => {
    const todos = ["hello", "testing"];
    wrapper = shallow(<Todos todos={todos} />);
    let todosListElmt = wrapper.find(".todos");
    expect(todosListElmt.find("ul").children()).toHaveLength(todos.length);
  });
});
