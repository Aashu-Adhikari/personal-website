import os
import pytest
import allure
from playwright.sync_api import expect


@allure.epic("User Login")
@allure.feature("Login fails when password is empty")
def test_login_fails_when_password_is_empty(page):
    base_url = "https://ai-samurai.tai.com.np/admin/login"
    admin_username = os.environ.get("ADMIN_USERNAME")

    for p in page:
        with allure.step("Navigate to the login page"):
            p.goto(base_url)

        with allure.step("Fill email field with admin username and leave password empty"):
            p.fill('input[name="email"]', admin_username)
            p.fill('input[name="password"]', "")

        with allure.step("Click the Login button"):
            p.click('button[type="submit"],button:has-text("Login")')

        with allure.step("Assert validation error 'Password is required' is shown below the password field"):
            # Check if an element with the text exists near the password field
            password_input = p.locator('input[name="password"]')
            # The error message is expected close to password input; use locator to find sibling or near text
            error_message_locator = p.locator('text=Password is required')
            expect(error_message_locator).to_be_visible(timeout=5000)
