import Tool from './pages/Tool'
import { initFloatingAction } from './actions'
import { initResponsiveTable, initStickySidebar } from './sidebar'
import { centerPagination } from './pagination'

Nova.booting((app, store) => {
	Nova.inertia('NovaResponsive', Tool)

	window.addEventListener('load', () => {
		// Floating action
		initFloatingAction()

		// Scroll table & sidebar
		initResponsiveTable()
		initStickySidebar()

		// Pagination
		centerPagination()
	})
})
