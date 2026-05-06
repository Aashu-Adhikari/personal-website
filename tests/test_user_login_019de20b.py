import os
import pytest
import allure
from playwright.sync_api import expect

@allure.feature("User Login")
@allure.story("Login fails when email is empty")
def test_login_fails_when_email_is_empty(page):
    login_url = "https://ai-samurai.tai.com.np/admin/login"
    admin_password = os.environ.get("ADMIN_PASSWORD")

    for p in page:
        with allure.step("Navigate to login page"):
            p.goto(login_url)

        with allure.step("Leave email empty and fill password"):
            p.fill('input[name="email"]', "")
            p.fill('input[name="password"]', admin_password)

        with allure.step("Click Login button"):
            # Assuming button type submit or button text login
            # We use exact button with text "Login"
            p.click('button:has-text("Login")')

        with allure.step("Assert validation error message for email is shown"):
            error_locator = p.locator('text="Email address is required"')
            expect(error_locator).to_be_visible(timeout=5000)
