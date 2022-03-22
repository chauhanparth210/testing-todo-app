import React from "react";
import { mount } from "enzyme";
import TestRenderer from 'react-test-renderer';
import App from "./App";

describe("App component testing", () => {
  let wrapper;
  const todoValue = "I need to poo 💩";
  beforeEach(() => {
    wrapper = mount(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render App component properly",()=>{
    const testRenderer = TestRenderer.create(<App />);
    expect(testRenderer).toMatchSnapshot();
  })

  // it("initially input should be empty", () => {
  //   const inputElement = wrapper.find("input[type='text']");
  //   expect(inputElement.props().value).toBe("");
  // });

  // describe("it could be populated with a value", () => {
  //   beforeEach(() => {
  //     const inputElement = wrapper.find("input[type='text']");
  //     inputElement.simulate("change", { target: { value: todoValue } });
  //   });

  //   it(`the input value changes to ${todoValue}`, () => {
  //     const inputElement = wrapper.find("input[type='text']");
  //     expect(inputElement.props().value).toBe(`${todoValue}`);
  //   });
  // });

  describe("`then` the form can be submitted", () => {
    beforeEach(() => {
      const inputElement = wrapper.find("input[type='text']");
      inputElement.simulate("change", { target: { value: todoValue } });
      const form = wrapper.find(".input-form");
      form.simulate("submit", {
        preventDefault: () => {},
      });
    });

    describe("when the form is submitted", () => {
      // it("the input field is cleared", () => {
      //   const input = wrapper.find("input[type='text']");
      //   expect(input.props().value).toBe("");
      // });

      // it("the todovalue is added to the todolist", () => {
      //   const todoList = wrapper.find(".todos");
      //   expect(todoList).toHaveLength(1);
      // });

      // it(`the todovalue is  ${todoValue}`, () => {
      //   const todoList = wrapper.find(".todos");
      //   expect(todoList.text()).toBe(todoValue + "x");
      // });

      it("should render App component with one todo item",()=>{
        const testRenderer = TestRenderer.create(<App />);
        expect(testRenderer).toMatchSnapshot();
      })

      it("clicking on removeTodo button", () => {
        const removeTodoBtnElement = wrapper.find(".todos>li>button");
        removeTodoBtnElement.simulate("click");
        let todosListElmt = wrapper.find(".todos");
        expect(todosListElmt.find("ul").children()).toHaveLength(0);
      });

      it("should render App component after deleting single todo",()=>{
        const testRenderer = TestRenderer.create(<App />);
        expect(testRenderer).toMatchSnapshot();
      })
    });
  });
});
