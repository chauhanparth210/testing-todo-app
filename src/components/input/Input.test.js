import React from "react";
import { shallow } from "enzyme";
import TestRenderer from 'react-test-renderer';
import { Input } from "./Input";

describe("Input Component testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Input debug />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render Input component properly", () => {
    const testRenderer = TestRenderer.create(<Input />);
    expect(testRenderer).toMatchSnapshot();
  });

  // it("change input values", () => {
  //   let inputElement = wrapper.find("input[type='text']");

  //   // initially the value should be empty
  //   expect(inputElement.props().value).toBe("");
  //   inputElement.simulate("change", { target: { value: "hello" } });

  //   // need to query again becuse it won't dynamically update the input value
  //   inputElement = wrapper.find("input[type='text']");
  //   expect(inputElement.props().value).toBe("hello");
  // });

  // it("adding a single todo item", () => {
  //   const addTodoMockFn = jest.fn();
  //   wrapper = shallow(<Input addTodo={addTodoMockFn} />);

  //   let inputElement = wrapper.find("input[type='text']");
  //   const formElement = wrapper.find(".input-form");

  //   // initially addTodoMockFn() should not be called and value should be empty
  //   expect(addTodoMockFn).not.toBeCalled();
  //   expect(inputElement.props().value).toBe("");

  //   inputElement.simulate("change", { target: { value: "hello" } });

  //   inputElement = wrapper.find("input[type='text']");
  //   expect(inputElement.props().value).toBe("hello");

  //   // press `Enter` or click on `add todo` button
  //   formElement.simulate("submit", {
  //     preventDefault: () => {},
  //   });

  //   inputElement = wrapper.find("input[type='text']");

  //   expect(inputElement.props().value).toBe("");

  //   jest.useFakeTimers();

  //   setTimeout(() => {
  //     expect(addTodoMockFn).toBeCalled();
  //     expect(addTodoMockFn).toHaveBeenCalledTimes(1);
  //   }, 1000);
  // });
});
