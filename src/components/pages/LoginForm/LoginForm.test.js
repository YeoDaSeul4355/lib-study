import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

test("validates form", async () => {
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  const button = screen.getByRole("button", { name: "로그인" });

  userEvent.click(button);

  const alerts = await screen.findAllByRole("alert");
  expect(alerts).toHaveLength(2);
  expect(onSubmit).not.toHaveBeenCalled();
});

test("submits form", async () => {
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  const email = screen.getByRole("textbox", { name: "이메일" });
  const password = screen.getByLabelText("비밀번호");
  const button = screen.getByRole("button", { name: "로그인" });

  userEvent.type(email, "coder@gmail.com");
  userEvent.type(password, "test1234");

  userEvent.click(button);

  await waitFor(() =>
    expect(onSubmit).toHaveBeenCalledWith(
      {
        email: "coder@gmail.com",
        password: "test1234",
      },
      expect.anything()
    )
  );

  expect(screen.queryAllByRole("alert")).toHaveLength(0);
});
