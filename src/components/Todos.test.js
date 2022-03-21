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

  it("pass todo to main state", () => {
    const todos = ["hello"];
    const removeTodoMockFn = jest.fn();
    wrapper = shallow(<Todos todos={todos} removeTodo={removeTodoMockFn} />);
    let todosListElmt = wrapper.find(".todos");
    expect(todosListElmt.find("ul").children()).toHaveLength(todos.length);

    expect(removeTodoMockFn).not.toBeCalled();

    let deletedTodoRemoveBtnElement = wrapper.find(".todos>li>button");
    deletedTodoRemoveBtnElement.simulate("click");

    jest.useFakeTimers();

    setTimeout(() => {
      expect(removeTodoMockFn).toBeCalled();
      expect(removeTodoMockFn).toHaveBeenCalledTimes(1);
    }, 1000);
  });
});
