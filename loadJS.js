
'use strict'

export default function loadJS(src, success, error) {
	const doc = window.document
	const head = doc.head
	let script = doc.createElement('script')
	
	script.async = true
	script.src = src
	
	script.onload = script.onerror = function (e) {
		if (e.type == 'load')
			success && success()
		else
			error && error()
		
		head.removeChild(this)
		this.onload = this.onerror = null
	}
	
	head.appendChild(script)
}
