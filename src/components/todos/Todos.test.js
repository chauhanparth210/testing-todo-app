import React from "react";
import { shallow } from "enzyme";
import TestRenderer from 'react-test-renderer';
import { Todos } from "./Todos";

describe("Todos component testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Todos debug />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render Todos component properly", () => {
    const testRenderer = TestRenderer.create(<Todos debug />);
    expect(testRenderer).toMatchSnapshot();
  });

  it("should render Todos component properly with todos prop",()=>{
    const todos = ["hello","I need to poo 💩"]
     wrapper = TestRenderer.create(<Todos todos={todos} />);  
    expect(wrapper).toMatchSnapshot();
  })

  // it("initially todos should empyt", () => {
  //   let todosListElmt = wrapper.find(".todos");
  //   expect(todosListElmt.find("ul").children()).toHaveLength(0);
  // });

  // it("shoudl render todos", () => {
  //   const todos = ["hello", "testing"];
  //   wrapper = shallow(<Todos todos={todos} />);
  //   let todosListElmt = wrapper.find(".todos");
  //   expect(todosListElmt.find("ul").children()).toHaveLength(todos.length);
  // });

  // it("pass todo to main state", () => {
  //   const todos = ["hello"];
  //   const removeTodoMockFn = jest.fn();
  //   wrapper = shallow(<Todos todos={todos} removeTodo={removeTodoMockFn} />);
  //   let todosListElmt = wrapper.find(".todos");
  //   expect(todosListElmt.find("ul").children()).toHaveLength(todos.length);

  //   expect(removeTodoMockFn).not.toBeCalled();

  //   let deletedTodoRemoveBtnElement = wrapper.find(".todos>li>button");
  //   deletedTodoRemoveBtnElement.simulate("click");

  //   jest.useFakeTimers();

  //   setTimeout(() => {
  //     expect(removeTodoMockFn).toBeCalled();
  //     expect(removeTodoMockFn).toHaveBeenCalledTimes(1);
  //   }, 1000);
  // });
});
