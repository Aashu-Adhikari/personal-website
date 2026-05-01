import os
import pytest
import allure
from urllib.parse import urlparse, urlunparse
from playwright.sync_api import expect


@allure.feature("User Login")
@allure.story("Successful login with valid credentials")
def test_successful_login_with_valid_credentials(page):
    base_login_url = "https://ai-samurai.tai.com.np/admin/login"
    login_url = os.environ.get("LOGIN_URL", "")
    admin_username = os.environ.get("ADMIN_USERNAME")
    admin_password = os.environ.get("ADMIN_PASSWORD")

    assert admin_username is not None, "ADMIN_USERNAME environment variable must be set"
    assert admin_password is not None, "ADMIN_PASSWORD environment variable must be set"

    # Parse LOGIN_URL and construct expected redirect URL base + /admin
    parsed_url = urlparse(login_url)
    path_parts = parsed_url.path.rstrip('/').split('/')

    # Remove last path parts that could be 'admin' and/or 'login' to get the base
    while path_parts and path_parts[-1].lower() in ('admin', 'login'):
        path_parts.pop()
    base_path = '/'.join(path_parts)

    expected_redirect_path = f"{base_path}/admin" if base_path else "/admin"

    expected_redirect_url = urlunparse((
        parsed_url.scheme,
        parsed_url.netloc,
        expected_redirect_path,
        '', '', ''
    ))

    for p in page:
        with allure.step("Navigate to the login page"):
            p.goto(base_login_url)

        with allure.step("Fill email with ADMIN_USERNAME"):
            p.fill('input[name="email"]', admin_username)

        with allure.step("Fill password with ADMIN_PASSWORD"):
            p.fill('input[name="password"]', admin_password)

        with allure.step("Click Login button"):
            if p.locator('button:has-text("Login")').count() > 0:
                p.click('button:has-text("Login")')
            elif p.locator('input[type="submit"][value="Login"]').count() > 0:
                p.click('input[type="submit"][value="Login"]')
            else:
                p.click('button[type="submit"]')

        with allure.step("Verify user is redirected to the admin page"):
            expect(p).to_have_url(expected_redirect_url, timeout=10000)
