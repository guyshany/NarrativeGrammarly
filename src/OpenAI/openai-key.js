let open_ai_key = localStorage.getItem('open_ai_key')
if (!open_ai_key) alert('No key found!')
export { open_ai_key }
