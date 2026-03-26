import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # We know from memory local project files can be loaded via file:///app/index.html
        # Or from the server we just spun up
        await page.goto('http://localhost:8000')

        await page.wait_for_selector('.subtest-btn')
        await page.click('.subtest-btn')
        await page.wait_for_selector('.day-link')
        await page.click('.day-link')

        await page.wait_for_selector('.option')

        # Test keyboard navigation and selection
        # Options should be focusable and selectable with 'Space' or 'Enter'
        options = await page.locator('.option').all()
        if len(options) == 0:
            print("No options found!")
            return

        await options[0].focus()
        print("Focused first option")

        # Press Space
        await page.keyboard.press('Space')
        print("Pressed Space")

        # Check if selected class is applied and aria-checked is true
        is_selected = await options[0].evaluate('el => el.classList.contains("selected")')
        is_checked = await options[0].evaluate('el => el.getAttribute("aria-checked") === "true"')
        print(f"Option 1 selected: {is_selected}, aria-checked: {is_checked}")

        # Press ArrowDown/Tab to move to next option
        await page.keyboard.press('Tab')
        await options[1].focus() # Explicit focus since tab order might be tricky in tests

        # Press Enter
        await page.keyboard.press('Enter')
        print("Focused second option and pressed Enter")

        is_selected_2 = await options[1].evaluate('el => el.classList.contains("selected")')
        is_checked_2 = await options[1].evaluate('el => el.getAttribute("aria-checked") === "true"')

        # First option should be unselected now
        is_selected_1_after = await options[0].evaluate('el => el.classList.contains("selected")')
        is_checked_1_after = await options[0].evaluate('el => el.getAttribute("aria-checked") === "true"')

        print(f"Option 2 selected: {is_selected_2}, aria-checked: {is_checked_2}")
        print(f"Option 1 still selected: {is_selected_1_after}, aria-checked: {is_checked_1_after}")

        await page.screenshot(path='test_output.png')
        await browser.close()

if __name__ == '__main__':
    asyncio.run(run())
