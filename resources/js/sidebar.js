/**
 * JS file for scrollable sidebar
 * 
 * Main JS File : tool.js
 */


function initStickySidebar() {
    console.log('Sticky sidebar loaded');

	const sidebar = document.querySelectorAll('.sidebar-menu')[1]
	const heider_height = document.querySelector('header').offsetHeight
	const window_height = window.innerHeight
	const sidebar_height = window_height - heider_height

	sidebar.style.height = `${sidebar_height}px`
	sidebar.style.width = `250px`
}

function initResponsiveTable() {
    console.log('Responsive table loaded');

	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			// Table height
			const table = document.querySelector('[data-testid="resource-table"]')
			if (table) {
				if (table.classList.contains('sticky-applied')) return

				const table_wrapper = table.parentElement
				table_wrapper.style.maxHeight = '60vh'
				table_wrapper.style.overflowY = 'scroll'
				table.classList.add('sticky-applied')
			}

			// Sticky header
			const thead = document.querySelector('thead')
			if (thead) {
				if (thead.classList.contains('sticky-applied')) return

				thead.style.position = 'sticky'
				thead.style.top = 0
				thead.style.zIndex = 10
				thead.classList.add('sticky-applied')
			}
		})
	})
	observer.observe(document.body, { childList: true, subtree: true })
}

export { initResponsiveTable, initStickySidebar }