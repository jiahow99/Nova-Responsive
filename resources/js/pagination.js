/**
 * JS file for modify pagination
 * 
 * Main JS File : tool.js
*/


export function centerPagination() {
    console.log('Center pagination loaded')

    const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
            const wrapper = document.querySelector('nav[per-page]')
            const pagination = wrapper.children[0]
            const pagecount = wrapper.children[1]
        
            if (!wrapper || !pagination || !pagecount) return
            if (wrapper.classList.contains('center-applied')) return
        
            wrapper.classList.add('justify-center', 'center-applied')
            pagecount.classList.remove('ml-auto')
		})
	})
	observer.observe(document.body, { childList: true, subtree: true })
}