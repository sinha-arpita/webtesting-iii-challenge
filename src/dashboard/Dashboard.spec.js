// Test away
import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Controls from "./../controls/Controls";
import Display from "./../display/Display";

it("Checks if close button is called", () => {
  const mockFn = jest.fn();
  const { getByText } = render(<Controls toggleClosed={mockFn} />);

  const closeButton = getByText("Close Gate");

  fireEvent.click(closeButton);

  expect(mockFn).toHaveBeenCalled();
});

it("Checks if open button is called", () => {
  const mockFn = jest.fn();
  const { getByText } = render(
    <Controls closed={true} toggleClosed={mockFn} />
  );

  const openButton = getByText("Open Gate");

  fireEvent.click(openButton);

  expect(mockFn).toHaveBeenCalled();
});

it("Checks if unlock button is called", () => {
  const mockFn = jest.fn();
  const { getByText } = render(
    <Controls closed={true} locked={true} toggleLocked={mockFn} />
  );

  const unlockButton = getByText("Unlock Gate");

  fireEvent.click(unlockButton);

  expect(mockFn).toHaveBeenCalled();
});

xit("Checks if lock button is called", () => {
  const mockFn2 = jest.fn();

  const { getByText } = render(
    <Controls closed={true} locked={false} toggleLocked={mockFn2} />
  );

  const lockButton = getByText("Lock Gate");

  fireEvent.click(lockButton);

  expect(mockFn2).toHaveBeenCalled();
});

it("Checks closed is diplayed and gate is unlocked", () => {
  const { getByText } = render(<Display closed={true} locked={false} />);

  const text = getByText("Closed");
  const text2 = getByText("Unlocked");

  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});

it("Checks closed is diplayed  and door is locked", () => {
  const { getByText } = render(<Display closed={true} locked={true} />);

  const text = getByText("Closed");
  const text2 = getByText("Locked");

  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});
it("Checks open is displayed and door is unlocked", () => {
  const { getByText } = render(<Display opened={true} unlocked={true} />);
  const text = getByText("Open");
  const text2 = getByText("Unlocked");
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});
it("Checks closed is displayed and door is unlocked", () => {
  const { getByText } = render(<Display close={true} unlocked={true} />);
  const text = getByText("Closed");
  const text2 = getByText("Unlocked");
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
});

it("Checks if buttons are there", () => {
  const { queryByText } = render(<Controls />);

  const closeButton = queryByText("Close Gate");

  expect(closeButton).toBeInTheDocument();
});


